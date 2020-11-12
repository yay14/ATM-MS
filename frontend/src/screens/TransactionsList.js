
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listTransactions } from '../actions/transactionActions'

const TransactionsList = ({ history }) => {
    const dispatch = useDispatch()

    const transactionList = useSelector((state) => state.transactionList)
    const { loading, error, transactions } = transactionList
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
        dispatch(listTransactions())
      } else {
        history.push('/login')
      }
    }, [dispatch, history, userInfo])
  
    return (
        <>
        <h1>All Transactions</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>TYPE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>AVAILABLE BALANCE</th>
                
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction._id}</td>
                  <td>{transaction.user && transaction.user.name}</td>
                  <td>{transaction.createdAt.substring(0, 10)}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.user.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    )
}

export default TransactionsList

