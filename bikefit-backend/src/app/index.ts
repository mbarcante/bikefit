import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from '@/config/database';
import cors from 'cors';
import { UserRoutes, ClientRoutes, BikeRoutes, BikeFitsRoutes, PostureEvaluationRoutes } from '@/routers';
import '@/models';

dotenv.config();
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});
app.use('/api/bikes', BikeRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/clients', ClientRoutes);
app.use('/api/bikeFits', BikeFitsRoutes);
app.use('/api/postureEvaluations', PostureEvaluationRoutes);
const startServer = async () => {
  try {
    await connectToDatabase();
    app.get('/', (_req, res: Response) => {
      res.send('API BikeFit está online!');
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao iniciar o servidor:', error);
    process.exit(1);
  }
};

startServer();
