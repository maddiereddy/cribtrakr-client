import{
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE,
  CREATE_EXPENSE_ERROR,
  FETCH_EXPENSE_DATA,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_ERROR,
  FETCH_EXPENSES_DATA,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_ERROR,
  FETCH_ALL_EXPENSES_DATA,
  FETCH_ALL_EXPENSES_SUCCESS,
  FETCH_ALL_EXPENSES_ERROR,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_ERROR,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_ERROR
  } from '../actions/expenses';
  
  
  const initialState = {
		expenses: [],
		currentExpense: null,
		error: null,
		loading: false
  }
  
  export const expenseReducer = (state = initialState, action) => {
		if(action.type === CREATE_EXPENSE_SUCCESS) {
			return Object.assign({}, state, {
					expenses: [...state.expenses, action.expense]
			})
		}
		else if(action.type === CREATE_EXPENSE) {
			return Object.assign({}, state, {
					loading: true 
			})
		}
		else if(action.type === CREATE_EXPENSE_ERROR) {
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
		}
		else if(action.type === FETCH_EXPENSE_DATA) {
			return Object.assign({}, state, {
					loading: true
			})
		}
		else if(action.type === FETCH_EXPENSE_SUCCESS){
			return Object.assign({}, state,{
					currentExpense: action.expense,
					loading: false
			}) 
		}   
		else if(action.type === FETCH_EXPENSE_ERROR){
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
		}  
		else if(action.type === FETCH_EXPENSES_DATA) {
			return Object.assign({}, state, {
					loading: true
			})
		}
		else if(action.type === FETCH_EXPENSES_SUCCESS){
			return Object.assign({}, state,{
					expenses: action.expenses,
					loading: false
			}) 
		}   
		else if(action.type === FETCH_EXPENSES_ERROR){
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
		}   
		else if(action.type === FETCH_ALL_EXPENSES_DATA) {
			return Object.assign({}, state, {
					loading: true
			})
    }
    else if(action.type === FETCH_ALL_EXPENSES_SUCCESS){
			return Object.assign({}, state,{
					expenses: action.expenses,
					loading: false
			}) 
    }   
    else if(action.type === FETCH_ALL_EXPENSES_ERROR){
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
    }  
		else if(action.type === UPDATE_EXPENSE_REQUEST) {
			return Object.assign({}, state, {
					loading: true
			})
		}
		else if(action.type === UPDATE_EXPENSE_SUCCESS){
			return Object.assign({}, state,{
					expenses: action.expenses,
					loading: false
			}) 
		}   
		else if(action.type === UPDATE_EXPENSE_ERROR){
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
		}  
		else if(action.type === DELETE_EXPENSE_REQUEST) {
			return Object.assign({}, state, {
					loading: true
			})
		}
		else if(action.type === DELETE_EXPENSE_SUCCESS){
			return Object.assign({}, state,{
					expenses: state.expenses.filter(expense => expense.id !== action.id),
					loading: false
			}) 
		}   
		else if(action.type === DELETE_EXPENSE_ERROR){
			return Object.assign({}, state,{
					loading: false,
					error: action.error
			})
		}  

    return state
  
  }