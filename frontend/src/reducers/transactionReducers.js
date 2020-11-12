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
  
  export const newTransactionReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_TRANSACTION_REQUEST:
        return {
          loading: true,
        }
      case NEW_TRANSACTION_SUCCESS:
        return {
          loading: false,
          success: true,
          transaction: action.payload,
        }
      case NEW_TRANSACTION_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case NEW_TRANSACTION_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const transactionDetailsReducer = (
    state = { loading: true, transactionItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case TRANSACTION_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case TRANSACTION_DETAILS_SUCCESS:
        return {
          loading: false,
          transaction: action.payload,
        }
      case TRANSACTION_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  
  export const transactionListMyReducer = (state = { transactions: [] }, action) => {
    switch (action.type) {
      case TRANSACTION_LIST_MY_REQUEST:
        return {
          loading: true,
        }
      case TRANSACTION_LIST_MY_SUCCESS:
        return {
          loading: false,
          transactions: action.payload,
        }
      case TRANSACTION_LIST_MY_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case TRANSACTION_LIST_MY_RESET:
        return { transactions: [] }
      default:
        return state
    }
  }
  
  export const transactionListReducer = (state = { transactions: [] }, action) => {
    switch (action.type) {
      case TRANSACTION_LIST_REQUEST:
        return {
          loading: true,
        }
      case TRANSACTION_LIST_SUCCESS:
        return {
          loading: false,
          transactions: action.payload,
        }
      case TRANSACTION_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }