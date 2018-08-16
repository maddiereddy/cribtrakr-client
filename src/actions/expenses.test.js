import { 
  createExpense, CREATE_EXPENSE, 
  createExpenseSuccess, CREATE_EXPENSE_SUCCESS, 
  createExpenseError, CREATE_EXPENSE_ERROR,
  fetchExpenseData, FETCH_EXPENSE_DATA, 
  fetchExpenseSuccess, FETCH_EXPENSE_SUCCESS,
  fetchExpenseError, FETCH_EXPENSE_ERROR,
  fetchExpensesData, FETCH_EXPENSES_DATA, 
  fetchExpensesSuccess, FETCH_EXPENSES_SUCCESS,
  fetchExpensesError, FETCH_EXPENSES_ERROR,
  updateExpenseRequest, UPDATE_EXPENSE_REQUEST, 
  updateExpenseSuccess, UPDATE_EXPENSE_SUCCESS,
  updateExpenseError, UPDATE_EXPENSE_ERROR,
  deleteExpenseRequest, DELETE_EXPENSE_REQUEST, 
  deleteExpenseSuccess, DELETE_EXPENSE_SUCCESS,
  deleteExpenseError, DELETE_EXPENSE_ERROR,
  deleteAllExpensesRequest, DELETE_ALL_EXPENSES_REQUEST,
  deleteAllExpensesSuccess, DELETE_ALL_EXPENSES_SUCCESS,
  deleteAllExpensesError, DELETE_ALL_EXPENSES_ERROR
} from "./expenses";

describe('Expenses Actions', () => {
  // Create new expense actions
  it('should return the createExpenseRequest() action', () => {
    const action = createExpense()
    expect(action.type).toEqual(CREATE_EXPENSE)
  })
  it('should return the createExpenseSuccess action', () => {
    const expenseSample = 'newExpense'
    const action = createExpenseSuccess(expenseSample)
    expect(action.type).toEqual(CREATE_EXPENSE_SUCCESS)
    expect(action.newExpense).toEqual(expenseSample)
  })
  it('should return the createExpenseError action', () => {
    const err = 'oops'
    const action = createExpenseError(err)
    expect(action.type).toEqual(CREATE_EXPENSE_ERROR)
    expect(action.error).toEqual(err)
  })
  // Fetch Expense by id actions
  it('should return the fetchExpenseRequest() action', () => {
    const action = fetchExpenseData()
    expect(action.type).toEqual(FETCH_EXPENSE_DATA)
  })
  it('should return the fetchExpenseSuccess action', () => {
    const data = {}
    const action = fetchExpenseSuccess(data)
    expect(action.type).toEqual(FETCH_EXPENSE_SUCCESS)
    expect(action.expense).toEqual(data)
  })
  it('should return the fetchExpenseError action', () => {
    const err = 'oops'
    const action = fetchExpenseError(err)
    expect(action.type).toEqual(FETCH_EXPENSE_ERROR)
    expect(action.error).toEqual(err)
  })
  // Fetch rentals actions
  it('should return the fetchExpensesRequest() action', () => {
    const action = fetchExpensesData()
    expect(action.type).toEqual(FETCH_EXPENSES_DATA)
  })
  it('should return the fetchExpensesSuccess action', () => {
    const data = {}
    const action = fetchExpensesSuccess(data)
    expect(action.type).toEqual(FETCH_EXPENSES_SUCCESS)
    expect(action.expenses).toEqual(data)
  })
  it('should return the fetchExpensesError action', () => {
    const err = 'oops'
    const action = fetchExpensesError(err)
    expect(action.type).toEqual(FETCH_EXPENSES_ERROR)
    expect(action.error).toEqual(err)
  })
  // Update expenses by id actions
  it('should return the updateExpenseRequest() action', () => {
    const action = updateExpenseRequest()
    expect(action.type).toEqual(UPDATE_EXPENSE_REQUEST)
  })
  it('should return the updateExpenseSuccess action', () => {
    const data = {}
    const action = updateExpenseSuccess(data)
    expect(action.type).toEqual(UPDATE_EXPENSE_SUCCESS)
    expect(action.newExpense).toEqual(data)
  })
  it('should return the updateExpenseError action', () => {
    const err = 'oops'
    const action = updateExpenseError(err)
    expect(action.type).toEqual(UPDATE_EXPENSE_ERROR)
    expect(action.error).toEqual(err)
  })
  // Delete expense by id actions
  it('should return the deleteExpenseRequest() action', () => {
    const action = deleteExpenseRequest()
    expect(action.type).toEqual(DELETE_EXPENSE_REQUEST)
  })
  it('should return the updateExpenseSuccess action', () => {
    const data = {}
    const action = deleteExpenseSuccess(data)
    expect(action.type).toEqual(DELETE_EXPENSE_SUCCESS)
    expect(action.expense).toEqual(data)
  })
  it('should return the updateExpenseError action', () => {
    const err = 'oops'
    const action = deleteExpenseError(err)
    expect(action.type).toEqual(DELETE_EXPENSE_ERROR)
    expect(action.error).toEqual(err)
  })
  // Delete all expenses by rental id actions
  it('should return the deleteAllExpensesRequest() action', () => {
    const action = deleteAllExpensesRequest()
    expect(action.type).toEqual(DELETE_ALL_EXPENSES_REQUEST)
  })
  it('should return the deleteAllExpensesSuccess action', () => {
    const data = {}
    const action = deleteAllExpensesSuccess(data)
    expect(action.type).toEqual(DELETE_ALL_EXPENSES_SUCCESS)
    expect(action.rental).toEqual(data)
  })
  it('should return the deleteAllExpensesError action', () => {
    const err = 'oops'
    const action = deleteAllExpensesError(err)
    expect(action.type).toEqual(DELETE_ALL_EXPENSES_ERROR)
    expect(action.error).toEqual(err)
  })
})