import {expenseReducer} from './expenses';
import{
  createExpense, createExpenseSuccess, createExpenseError, 
  fetchExpenseData, fetchExpenseSuccess, fetchExpenseError,
  fetchExpensesData, fetchExpensesSuccess, fetchExpensesError,
  updateExpenseRequest, updateExpenseSuccess, updateExpenseError,
  deleteExpenseRequest, deleteExpenseSuccess, deleteExpenseError
} from '../actions/expenses';
  
describe('expenseReducer', () => {
  // dummy data
  const expense1 = {
    propName: '1 Some Dr',
    category: 'Some Category 1',
    expense: '$100',
    vendor: "Acme",
    date: '2018/08/10',
    description: "Some description 1"
  };
  const expense2 = {
    propName: '2 Some Dr',
    category: 'Some Category 2',
    expense: '$200',
    vendor: "Acme",
    date: '2018/08/20',
    description: "Some description 2"
  };


  it('Should set the initial state when nothing is passed in', () => {
    const state = expenseReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      expenses: [],
      currentExpense: null,
      error: null,
      loading: false,
      rentals: []
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = expenseReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  // post new expense
  describe('Add new expense', () => {
    it('handle request action', () => {
      let state;
      state = expenseReducer(state, createExpense());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = expenseReducer(state, createExpenseSuccess(expense1));
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = expenseReducer(state, createExpenseError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //fetch expense by id
  describe('Get expense', () => {
    it('handle request action', () => {
      let state;
      state = expenseReducer(state, fetchExpenseData());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = expenseReducer(state, fetchExpenseSuccess(expense1));
      expect(state.currentExpense).toEqual(expense1);
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = expenseReducer(state, fetchExpenseError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //fetch all expense
  describe('Get all expenses', () => {
    it('handle request action', () => {
      let state;
      state = expenseReducer(state, fetchExpensesData());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      let expenses = [expense1, expense2];
      state = expenseReducer(state, fetchExpensesSuccess(expenses));
      expect(state.expenses).toEqual(expenses);
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = expenseReducer(state, fetchExpensesError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //update rental
  describe('Update expense', () => {
    it('handle request action', () => {
      let state;
      state = expenseReducer(state, updateExpenseRequest());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = expenseReducer(state, updateExpenseSuccess(expense2));
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = expenseReducer(state, updateExpenseError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //delete rental
  describe('Delete rental', () => {
    it('handle request action', () => {
      let state;
      state = expenseReducer(state, deleteExpenseRequest());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      
      state = expenseReducer(state, deleteExpenseSuccess());
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = expenseReducer(state, deleteExpenseError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });
});
    