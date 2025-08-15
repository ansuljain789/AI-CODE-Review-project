// src/middleware/authMiddleware.js


import jwt from 'jsonwebtoken'; // Use ESM import for consistency
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export default authMiddleware; // Use ESM export for consistency    
