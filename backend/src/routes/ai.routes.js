import express from 'express'; // ✅ Use ESM import for consistency
import aiController from '../controllers/ai.controller.js'; // ✅ Use ESM import for consistency
import authMiddleware from '../middleware/authMiddleware.js'; // ✅ Use ESM import for consistency
const router = express.Router();


router.post('/get-ai-review', authMiddleware, aiController.getAiReview);

export default router;