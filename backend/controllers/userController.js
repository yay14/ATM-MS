import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

import validator from 'express-validator'
const { validationResult } = validator

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
     res.status(400)
     throw new Error(firstError)
  } else {

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      balance: user.balance,
      phone: user.phone,
      account:user.account,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Wrong email or password! Please try again')
  }
}
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, account, password } = req.body
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
     res.status(400)
     throw new Error(firstError)
  } else {

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    phone,
    account,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      balance: user.balance,
      account: user.account,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
     
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      balance: user.balance,
      account: user.account,
      password: user.password,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { password } = req.body
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
     res.status(400)
     throw new Error(firstError)
  } else {
    const user = await User.findById(req.user._id)
    if (user) 
    {

    if ( await user.matchPassword(password)) {

    if (req.body.newPassword) {
      user.password = req.body.newPassword
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      balance: updatedUser.balance,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
    } else {
      res.status(401)
      throw new Error('Wrong PIN! Please try again')
    }

  
   
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}})

// @desc    Update balance after transaction
// @route   PUT /api/users/transact
// @access  Private
const transact = asyncHandler(async (req, res) => {
  const { password } = req.body
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
     res.status(400)
     throw new Error(firstError)
  } else {
    const user = await User.findById(req.user._id)
    if(user)
    {
    if ( await user.matchPassword(password)) {

      user.balance = req.body.balance || user.balance
      
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        balance: updatedUser.balance,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
      } else {
        res.status(401)
        throw new Error('Wrong PIN! Please try again')
      }
    }
   else {
    res.status(404)
    throw new Error('User not found')
  }
}})


// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.phone = req.body.phone || user.phone
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  transact,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
}