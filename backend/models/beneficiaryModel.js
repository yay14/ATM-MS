import mongoose from 'mongoose'

const beneficiarySchema = mongoose.Schema(
    {
        name: {
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
          accountNumber: {
            type: String,
            required: true,
            autoincrement: true,
          },
        description: { type: String },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
    },
    {
      timestamps: true,
    }
  )
  
const Beneficiary = mongoose.model('Beneficiary', beneficiarySchema)

export default  Beneficiary