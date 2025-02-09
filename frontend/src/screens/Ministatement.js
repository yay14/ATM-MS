import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMyTransactions } from '../actions/transactionActions'

const Ministatement = ({ history }) => {

    const dispatch = useDispatch()

    const myTransactionList = useSelector((state) => state.myTransactionList)
    const { loading, error, transactions } = myTransactionList
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      if (userInfo) {
        dispatch(listMyTransactions())
      } else {
        history.push('/login')
      }
    }, [dispatch, history, userInfo])
  

    return (
        <>
        <h1>Mini-Statement</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{transaction.createdAt.substring(0, 10)}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    )
}

export default Ministatement
