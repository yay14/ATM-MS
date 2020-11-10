import express from 'express'
const router = express.Router()

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'


import {
  validLogin,
  validSign,
  validUpdate
} from '../utils/validate.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(validSign,registerUser).get(protect, admin, getUsers)
router.post('/login',validLogin, authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(validUpdate,protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router