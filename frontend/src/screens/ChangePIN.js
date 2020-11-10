import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-bootstrap'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ChangePIN = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user } = userDetails


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success, error } = userUpdateProfile


  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      
      if ( !user.name) {
        // dispatch({ type: USER_UPDATE_PROFILE_RESET })
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

      if (newPassword !== confirmNewPassword) 
      {
        setMessage('New PINs do not match')
      } else 
      {
        dispatch(updateUserProfile({ id: user._id, name, email, phone, password: newPassword }))
      }
    
  }

  return (
   <Container>
    <br/>
      <Col lg={4}>

        <h2>Change Your PIN </h2>
        {message && <Message variant='danger'>{message}</Message>}
        {success && <Message variant='success'>PIN Changed Successfully</Message>} 
         {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}

          <Form onSubmit={submitHandler}>

            <Form.Group controlId='password'>
              <Form.Label>Old Secret PIN</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter old PIN'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='newPassword'>
              <Form.Label>New Secret PIN</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter new PIN'
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmNewPassword'>
              <Form.Label>Confirm new PIN</Form.Label>
              <Form.Control
                type='password'
                placeholder='Re-enter new PIN'
                value={confirmNewPassword}
                required
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update 
            </Button>
          </Form>
      </Col>
     
    
    </Container> 
  )
}

export default ChangePIN