import express from 'express';
import taskRoutes from './src/routes/task.routes.js';

const app = express();

app.use(express.json());
const port = process.env.PORT || 3002;

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
