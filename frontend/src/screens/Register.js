import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { register } from '../actions/userActions.js'


  
const Register = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
   
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
  
    const redirect = location.search ? location.search.split('=')[1] : '/'
  
    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if (password !== confirmPassword) {
        setMessage('Passwords do not match')
      } else {
        dispatch(register(name, email, phone, account, password))
      }
    }
    return (
        <FormContainer>

        <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
             </Form.Group>

            <Form.Group controlId='phone'>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type='phone'
              placeholder='Enter phone no.'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='account'>
            <Form.Label>Bank Account No.</Form.Label>
            <Form.Control
              type='account'
              placeholder='Enter Account no.'
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='password'>
            <Form.Label>Secret PIN</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter secret PIN'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm secret PIN </Form.Label>
            <Form.Control
              type='password'
              placeholder='Re-enter PIN'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='primary'>
            Register
          </Button>
        </Form>
  
        <Row className='py-3'>
          <Col>
            Have an Account?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    )
}

export default Register
