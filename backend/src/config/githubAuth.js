import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

passport.serializeUser((user, done) => done(null, user.id ?? user._id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // profile fields: id, username, displayName, photos, emails
    const githubId = profile.id;
    const email = profile.emails?.[0]?.value?.toLowerCase() ?? null;

    // Find existing user by githubId OR by email (so linking existing account)
    let user = await User.findOne({ $or: [{ githubId }, { email }] });

    if (!user) {
      // Create new user
      user = await User.create({
        githubId,
        username: profile.username,
        name: profile.displayName || profile.username,
        email,
        avatarUrl: profile.photos?.[0]?.value || null
      });
    } else if (!user.githubId) {
      // Link account (email existed earlier) by setting githubId
      user.githubId = githubId;
      if (!user.username) user.username = profile.username;
      if (!user.avatarUrl) user.avatarUrl = profile.photos?.[0]?.value || null;
      await user.save();
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

export default passport;
