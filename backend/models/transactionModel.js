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



const Transaction = mongoose.model('Transaction', transactionSchema)

export default  Transaction