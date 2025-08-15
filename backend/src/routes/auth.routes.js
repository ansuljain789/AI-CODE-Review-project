import express from 'express'; // ✅ Use CommonJS import for consistency
//const authController = require('../controllers/authController'); // ✅ Use CommonJS
import authController from '../controllers/authController.js'; // ✅ Use ESM import for consistency
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);


export default router; // ✅ Use CommonJS export for consistency
