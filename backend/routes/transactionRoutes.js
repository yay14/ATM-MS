import express from 'express'
const router = express.Router()
import {
  addNewTransaction,
  getTransactionById,
  getMyTransactions,
  getTransactions,
} from '../controllers/transactionController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addNewTransaction).get(protect, admin, getTransactions)
router.route('/mytransactions').get(protect, getMyTransactions)
router.route('/:id').get(protect, getTransactionById)


export default router