import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

//post
export const CREATE_EXPENSE = 'CREATE_EXPENSE'
export const createExpense = (expense) => ({
    type: CREATE_EXPENSE,
    newExpense: expense
})

export const CREATE_EXPENSE_SUCCESS = 'CREATE_EXPENSE_SUCCESS'
export const createExpenseSuccess = (expense) => ({
    type: CREATE_EXPENSE_SUCCESS,
    newExpense: expense
})

export const CREATE_EXPENSE_ERROR = 'CREATE_EXPENSE_ERROR'
export const createExpenseError = (error) => ({
    type:CREATE_EXPENSE_ERROR,
    error
})

//get by id
export const FETCH_EXPENSE_DATA = 'FETCH_EXPENSE_DATA'
export const fetchExpenseData = () => ({
    type: FETCH_EXPENSE_DATA,
})

export const FETCH_EXPENSE_SUCCESS = 'FETCH_EXPENSE_SUCCESS'
export const fetchExpenseSuccess = (expense) => ({
    type: FETCH_EXPENSE_SUCCESS,
    expense: expense
})

export const FETCH_EXPENSE_ERROR= 'FETCH_EXPENSE_ERROR'
export const fetchExpenseError = (error) => dispatch => ({
    type: FETCH_EXPENSE_ERROR,
    error
})

//get all by propid
export const FETCH_EXPENSES_DATA = 'FETCH_EXPENSES_DATA'
export const fetchExpensesData = () => ({
    type: FETCH_EXPENSES_DATA,
})

export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS'
export const fetchExpensesSuccess = (expenses) => ({
    type: FETCH_EXPENSES_SUCCESS,
    expenses: expenses
})

export const FETCH_EXPENSES_ERROR= 'FETCH_EXPENSES_ERROR'
export const fetchExpensesError = (error) => dispatch => ({
    type: FETCH_EXPENSES_ERROR,
    error
})

//get all for user
export const FETCH_ALL_EXPENSES_DATA = 'FETCH_ALL_EXPENSES_DATA'
export const fetchAllExpensesData = () => ({
    type: FETCH_ALL_EXPENSES_DATA,
})

export const FETCH_ALL_EXPENSES_SUCCESS = 'FETCH_ALL_EXPENSES_SUCCESS'
export const fetchAllExpensesSuccess = (expenses) => ({
    type: FETCH_ALL_EXPENSES_SUCCESS,
    expenses: expenses
})

export const FETCH_ALL_EXPENSES_ERROR= 'FETCH_ALL_EXPENSES_ERROR'
export const fetchAllExpensesError = (error) => dispatch => ({
    type: FETCH_ALL_EXPENSES_ERROR,
    error
})

//put by id
export const UPDATE_EXPENSE_REQUEST = 'UPDATE_EXPENSE'
export const updateExpenseRequest = (expense) => ({
    type: UPDATE_EXPENSE_REQUEST,
    newExpense: expense,
    redirectToExpense: true
})

export const UPDATE_EXPENSE_SUCCESS = 'UPDATE_EXPENSE_SUCCESS'
export const updateExpenseSuccess = (expense) => ({
    type: UPDATE_EXPENSE_SUCCESS,
    newExpense: expense,
    redirectToExpense: true
})

export const UPDATE_EXPENSE_ERROR = 'UPDATE_EXPENSE_ERROR'
export const updateExpenseError = (error) => ({
    type: UPDATE_EXPENSE_ERROR,
    error
})

//delete by id
export const DELETE_EXPENSE_REQUEST = 'DELETE_EXPENSE'
export const deleteExpenseRequest = (expense) => ({
    type: DELETE_EXPENSE_REQUEST,
    
})

export const DELETE_EXPENSE_SUCCESS = 'DELETE_EXPENSE_SUCCESS'
export const deleteExpenseSuccess = (expense) => ({
    type: DELETE_EXPENSE_SUCCESS,
    expense: expense
    
})

export const DELETE_EXPENSE_ERROR = 'DELETE_EXPENSE_ERROR'
export const deleteExpenseError = (error) => ({
    type: DELETE_EXPENSE_ERROR,
    error
})


//create a new expense
export const newExpense = (expense, propId) => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/expenses/${propId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(expense)
    
    })
        .then(res => res.json())
				.then(response=> {
					// const id = response.id;
					window.location = `/expenses`; //`/edit-expense/${id}`;
					return dispatch(createExpenseSuccess(response));
        })
        .catch(err => {   
            dispatch(createExpenseError(err))
        });
};

export const fetchExpense =(id, propId)=>(dispatch)=>{
    //fetch a specific expense with its id
    dispatch(fetchExpenseData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/expenses/${propId}/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(expense=> dispatch(fetchExpenseSuccess(expense)))
        .catch(err=> dispatch(fetchExpenseError(err))) 
}

export const fetchExpenses = (propId) => (dispatch) => {
    //retrieve user's expenses
    dispatch(fetchExpensesData());
    const authToken = localStorage.getItem('authToken');

    fetch(`${API_BASE_URL}/expenses/${propId}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(expenses => dispatch(fetchExpensesSuccess(expenses)))
        .catch(err=> dispatch(fetchExpensesError(err)))
}

export const fetchAllExpenses = () => (dispatch) => {
    //retrieve user's expenses
    dispatch(fetchExpensesData());
    const authToken = localStorage.getItem('authToken');

    fetch(`${API_BASE_URL}/expenses/`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(expenses => dispatch(fetchExpensesSuccess(expenses)))
        .catch(err=> dispatch(fetchExpensesError(err)))
}

export const updateExpense = (expense) => dispatch => {
    //edit a expense with updateExpense
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/expenses/${expense.propId}/${expense.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(expense)
         
    
    })
        .then(res => res.json())
            .then(response=> {
            return dispatch(updateExpenseRequest(response));
        })
        .catch(err => {
            dispatch(updateExpenseError(err))
        });
};

export const deleteExpense = (expense, propId) => dispatch => {
  //delete a expense with deleteExpense
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/expenses/${propId}/${expense.id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify(expense)
  
  })
	.then(()=> {
		return dispatch(deleteExpenseSuccess(expense.id))
	})
	.catch(err=> dispatch(deleteExpenseError(err))) 
};