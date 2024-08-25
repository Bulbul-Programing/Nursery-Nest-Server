import express, { Application, Request, Response } from 'express'
const app : Application = express()
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';

app.use(express.json())
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://nursery-nest-frontend.vercel.app'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}))

app.use('/api', router)
app.use(globalErrorHandler)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})

export default app