import axios from 'axios'
import {
    NEW_TRANSACTION_REQUEST,
    NEW_TRANSACTION_SUCCESS,
    NEW_TRANSACTION_FAIL,
    NEW_TRANSACTION_RESET,

    TRANSACTION_DETAILS_REQUEST,
    TRANSACTION_DETAILS_SUCCESS,
    TRANSACTION_DETAILS_FAIL,

    TRANSACTION_LIST_MY_REQUEST,
    TRANSACTION_LIST_MY_SUCCESS,
    TRANSACTION_LIST_MY_FAIL,
    TRANSACTION_LIST_MY_RESET,
    
    TRANSACTION_LIST_FAIL,
    TRANSACTION_LIST_SUCCESS,
    TRANSACTION_LIST_REQUEST,
  } from '../constants/transactionConstants'

import { logout } from './userActions'

export const newTransaction = (transaction) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEW_TRANSACTION_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/transactions`, transaction, config)

    dispatch({
      type: NEW_TRANSACTION_SUCCESS,
      payload: data,
    })
    
    localStorage.removeItem('cartItems')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: NEW_TRANSACTION_FAIL,
      payload: message,
    })
  }
}

export const getTransactionDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRANSACTION_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/transactions/${id}`, config)

    dispatch({
      type: TRANSACTION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TRANSACTION_DETAILS_FAIL,
      payload: message,
    })
  }
}


export const listMyTransactions = () => async (dispatch, getState) => { 
  try {
    dispatch({
      type: TRANSACTION_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/transactions/myTransactions`, config)

    dispatch({
      type: TRANSACTION_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TRANSACTION_LIST_MY_FAIL,
      payload: message,
    })
  }
}

export const listTransactions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRANSACTION_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/transactions`, config)

    dispatch({
      type: TRANSACTION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TRANSACTION_LIST_FAIL,
      payload: message,
    })
  }
}