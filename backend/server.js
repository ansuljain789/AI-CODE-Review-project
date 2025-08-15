import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import connectDB from './src/config/db.js';
import cors from 'cors'; // ✅ Use ESM import for consistency

app.use(cors({
  origin: [process.env.FROTEND_URI], // frontend URL
  credentials: true
}));


connectDB();





app.listen(3000, ()=> {
    console.log('server is running on http://localhost:3000')
})