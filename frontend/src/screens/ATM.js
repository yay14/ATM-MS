import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Container} from 'react-bootstrap'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { userRegisterReducer } from '../reducers/userReducers'

const ATM= ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [balance, setBalance] = useState('')
    const [amount,setAmount]=useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails
  
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile
  
  
    useEffect(() => {
      if (!userInfo) {
        history.push('/login')
      } else {
        if (!user || !user.name || success) {
          dispatch({ type: USER_UPDATE_PROFILE_RESET })
          dispatch(getUserDetails('profile'))
         
        } else {
          setName(user.name)
          setEmail(user.email)
          setPhone(user.phone)
          
        }
 
      }
    }, [dispatch, history, userInfo, user, success])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if (amount==='') {
        setMessage('Please enter an amount')
      } else {
        setBalance((parseInt(user.balance)+parseInt(amount)))
        console.log(balance)
        dispatch(updateUserProfile({ id: user._id,balance,name, email, phone, password }))
      }
    }
  
    return (
     <Container>
      <br/>
        <Col lg={4}>
          {message && <Message variant='danger'>{message}</Message>}
          
          
          {console.log(balance)}
          {success && <Message variant='success'>Profile Updated</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <div id="container">
            <Form onSubmit={submitHandler}>
  
              <Form.Group controlId='amount'>
                <Form.Label>Enter money</Form.Label>
                <Form.Control
                  type='amount'
                  placeholder='Please enter amount in Rupees here'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Button type='submit' variant='primary'>
                DEPOSIT
              </Button>
            </Form>

            <hr/>
          <h3>Balance : ₹ {balance}</h3>
            </div>
          )}
        </Col>
       
      
      </Container> 
    )
  }


export default ATM
