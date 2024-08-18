import express from 'express';
import { countVisitorController } from './countVisitor.controller';
const router = express.Router()

router.get('/', countVisitorController.countVisitor)
router.get('/last-seven-days', countVisitorController.lastSevenDayVisitors)

export const visitorRoute = router