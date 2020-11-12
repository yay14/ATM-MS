import asyncHandler from 'express-async-handler'
import Transaction from '../models/transactionModel.js'

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
const addNewTransaction = asyncHandler(async (req, res) => {
  const {
    
    amount,
    type,
    description,
    status
  } = req.body

    const transaction = new Transaction({
      user: req.user._id,
      amount,
      balance: req.user.balance,
      description,
      type,
      status,
    })

    const createdTransaction = await transaction.save()

    res.status(201).json(createdTransaction)
  
})

// @desc    Get transaction by ID
// @route   GET /api/transactions/:id
// @access  Private
const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (ransaction) {
    res.json(transaction)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})


// @desc    Get logged in user orders
// @route   GET /api/transactions/mytransaction
// @access  Private
const getMyTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id })
  res.json(transactions)
})

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private/Admin
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).populate('user', 'id name')
  res.json(transactions)
})

export {
  addNewTransaction,
  getTransactionById,
  getMyTransactions,
  getTransactions,
}
