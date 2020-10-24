import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema(
  {
    date :{type: Date,required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    summary: { type: String, required: true },
    balance: { type: Number, required: true },
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

const beneficiarySchema = mongoose.Schema(
    {
        description: { type: String, required: true },
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

const accountSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    accounts: {
    accountType: { 
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
      },
  
    transaction: [transactionSchema],
    beneficiary: [beneficiarySchema],
    }

  },
  {
    timestamps: true,
  }
)

const Account = mongoose.model('Account', accountSchema)

export default  Account