import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Container} from 'react-bootstrap'

import {Link} from 'react-router-bootstrap'
import { getUserDetails} from '../actions/userActions'

const Balance= ({ location, history }) => {

  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, user } = userDetails
  
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
          } else 
             {
                if(!user.name)
              dispatch(getUserDetails('profile'))
             else
             {
                 console.log(user)
             }
            } 
           
       
      }, [dispatch, history, userInfo, user])

    return (
     <Container>
                {loading && <Loader />}
                <h3> Account Summary</h3>
                  <hr/>
                <p>Name :  {user.name}</p>
                <p> Account Number :  {user.account} </p>
                <p>Balance : ₹ {user.balance}</p>
      </Container> 
    )
  }


export default Balance

/*<div class="card">
                <div class="card-header">
                 Account Summary
                </div>
                <div class="card-body">
                <h3>Name :  {user.name}</h3>
                <h3>Account Number :  {user.account}</h3> 
                <h3>Balance : ₹ {user.balance}</h3>
                <Link href="/home" class="btn btn-primary">Go Back</Link>
                </div>
                </div>*/
