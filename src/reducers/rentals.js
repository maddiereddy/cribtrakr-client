import{
  CREATE_RENTAL_SUCCESS,
  CREATE_RENTAL,
  CREATE_RENTAL_ERROR,
  FETCH_RENTAL_DATA,
  FETCH_RENTAL_SUCCESS,
  FETCH_RENTAL_ERROR,
  FETCH_RENTALS_DATA,
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTALS_ERROR,
  UPDATE_RENTAL_REQUEST,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_ERROR,
  DELETE_RENTAL_REQUEST,
  DELETE_RENTAL_SUCCESS,
  DELETE_RENTAL_ERROR
  } from '../actions/rentals';
  
  
  const initialState = {
      rentals: [],
      currentRental: null,
      error: null,
      loading: false
  }
  
  export const rentalReducer = (state = initialState, action) => {
      if(action.type === CREATE_RENTAL_SUCCESS) {
          return Object.assign({}, state, {
              rentals: [...state.rentals, action.rental]
          })
      }
      else if(action.type === CREATE_RENTAL) {
          return Object.assign({}, state, {
              loading: true 
          })
      }
      else if(action.type === CREATE_RENTAL_ERROR) {
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }
      else if(action.type === FETCH_RENTAL_DATA) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === FETCH_RENTAL_SUCCESS){
          return Object.assign({}, state,{
              currentRental: action.rental,
              loading: false
         }) 
      }   
      else if(action.type === FETCH_RENTAL_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }  
      else if(action.type === FETCH_RENTALS_DATA) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === FETCH_RENTALS_SUCCESS){
          return Object.assign({}, state,{
              rentals: action.rentals,
              loading: false
         }) 
      }   
      else if(action.type === FETCH_RENTALS_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }   
      else if(action.type === UPDATE_RENTAL_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === UPDATE_RENTAL_SUCCESS){
          return Object.assign({}, state,{
              rentals: action.rentals,
              loading: false
         }) 
      }   
      else if(action.type === UPDATE_RENTAL_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }  
      else if(action.type === DELETE_RENTAL_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
      }
      else if(action.type === DELETE_RENTAL_SUCCESS){
          return Object.assign({}, state,{
              rentals: state.rentals.filter(rental => rental.id !== action.id),
              loading: false
        }) 
      }   
      else if(action.type === DELETE_RENTAL_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }  

      return state
  
  }