import User from '../models/User.js'; // this path must point correctly to your model

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
  //   console.log("🔥 signup route hit");
  // console.log("req.body:", req.body);
  // const { email, password } = req.body;
  // console.log(email, password);
  
  // try {

  //    console.log("🟢 inside try block");
  //   const userExists = await User.findOne({ email });
  //   if (userExists) return res.status(400).json({ msg: "User already exists" });

  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log('Hashed Password:', hashedPassword);
    
  //   const user = await User.create({ email, password: hashedPassword });
  //   console.log('User created:', user);

  //   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  //   console.log('Generated Token:', token);
  //   console.log("created");
    
  //   res.status(201).json({ token });
  // } catch (err) {
  //   console.log("❌ Error in signup:", err);
    
  //   res.status(500).json({ msg: "Server error" });
  // }

  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ message: "User exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email: email.toLowerCase(), password: hashed, name });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export default {
  signup,
    login
};