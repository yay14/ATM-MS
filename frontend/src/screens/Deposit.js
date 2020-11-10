import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Container} from 'react-bootstrap'

import {Link} from 'react-router-bootstrap'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { userRegisterReducer } from '../reducers/userReducers'

const Deposit= ({ location, history }) => {
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
    const { loading,  user } = userDetails
  
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success , error } = userUpdateProfile
  
  
    useEffect(() => {
      if (!userInfo) {
        history.push('/login')
      } else {
        if (!user || !user.name ) {
         
          dispatch(getUserDetails('profile'))
         
        } else {
          setName(user.name)
          setEmail(user.email)
          setPhone(user.phone)
          setBalance(user.balance)
        }
 
      }
    }, [dispatch, history, userInfo, user, success])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if (parseInt(amount)>10000) {
        setMessage('Maximum Limit Reached')
      }  else
       if(balance === user.balance){
        setBalance((parseInt(user.balance)+parseInt(amount)))
        console.log(balance)
      }
      else
      {
        dispatch(updateUserProfile({ id: user._id,balance,name, email, phone, password }))
      }
    }
  
    return (
     <Container>
         <h1>Deposit cash to ATM</h1>
      <hr/>
        <Col lg={4}>
          {message && <Message variant='danger'>{message}</Message>}
          
          {error && <Message variant='danger'>{error}</Message>}
          {console.log(balance)}
          {success && <Message variant='success'>Cash deposited Successfully!</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <div id="container">
            <Form className="justify-content-center" onSubmit={submitHandler}>
  
              <Form.Group controlId='amount'>
                <Form.Label>Enter money</Form.Label>
                <Form.Control
                  type='amount'
                  placeholder='Please enter amount in Rupees here'
                  value={amount}
                  required
                  onChange={(e) => setAmount(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='password'>
              <Form.Label>Confirm Secret PIN</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter PIN'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
  
              <Button type='submit' variant='primary'>
                DEPOSIT
              </Button>
            </Form>

            <hr/>
          
            </div>
          )}
        </Col>
       
      
      </Container> 
    )
  }


export default Deposit
