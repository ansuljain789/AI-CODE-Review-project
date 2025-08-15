
import express from 'express'; // ✅ Use ESM import for consistency
import cors from 'cors'; // ✅ Use ESM import for consistency

import authRoutes from './routes/auth.routes.js'; // ✅ NO .js if not ESM
import aiRoutes from './routes/ai.routes.js'; // ✅ Use ESM import for consistency

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server started');
});

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

export default app;
