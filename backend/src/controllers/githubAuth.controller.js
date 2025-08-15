import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const githubCallback = (req, res) => {
  // req.user is populated by passport after successful auth
  if (!req.user) return res.redirect(`${process.env.FRONTEND_URL}/login?error=no-user`);

  const payload = {
    id: req.user._id,
    email: req.user.email,
    username: req.user.username
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

  // Redirect to frontend with token (frontend will parse and store)
  res.redirect(`${process.env.FRONTEND_URL}/mainComp?token=${token}`);
};
