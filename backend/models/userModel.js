import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
        type: Number,
        required: true,
      },
    secretPIN: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
const User = mongoose.model('User', userSchema)

export default User