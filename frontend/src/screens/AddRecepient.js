import React from 'react'
import { Form, Button} from 'react-bootstrap'

import FormContainer from '../components/FormContainer.js'

const AddRecepient = () => {
    return (
        
            
            <FormContainer>
            <h1>Add recepients for money transfer</h1>
                     <Form >
            <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name of beneficiary'
              
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              
            ></Form.Control>
             </Form.Group>

            <Form.Group controlId='phone'>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type='phone'
              placeholder='Enter phone no.'
              
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='account'>
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type='account'
              placeholder='Enter Account no of recepient'
              
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='description'
              placeholder='Write about the  recepient here'
              
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='primary'>
            Add Recepient
          </Button>
        </Form>
            </FormContainer>
       
    
    )
}

export default AddRecepient
