import {rentalReducer} from './rentals';
import{
  createRental, createRentalSuccess, createRentalError, 
  fetchRentalData, fetchRentalSuccess, fetchRentalError,
  fetchRentalsData, fetchRentalsSuccess, fetchRentalsError,
  updateRentalRequest, updateRentalSuccess, updateRentalError,
  deleteRentalRequest, deleteRentalSuccess, deleteRentalError
} from '../actions/rentals';
  
describe('rentalReducer', () => {
  // dummy data
  const rental1 = {
    street: '1 Some Dr',
    city: 'Some1 City',
    state: 'CA',
    zip: '11111'
  };
  const rental2 = {
    street: '2 Some Dr',
    city: 'Some2 City',
    state: 'CA',
    zip: '22222'
  };


  it('Should set the initial state when nothing is passed in', () => {
    const state = rentalReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      currentRental: null, 
      error: null, 
      loading: false, 
      rentals: []
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = rentalReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  // post new rental
  describe('Add new rental', () => {
    it('handle request action', () => {
      let state;
      state = rentalReducer(state, createRental());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = rentalReducer(state, createRentalSuccess(rental1));
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = rentalReducer(state, createRentalError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //fetch rental by id
  describe('Get rental', () => {
    it('handle request action', () => {
      let state;
      state = rentalReducer(state, fetchRentalData());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = rentalReducer(state, fetchRentalSuccess(rental1));
      expect(state.currentRental).toEqual(rental1);
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = rentalReducer(state, fetchRentalError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //fetch all rental
  describe('Get all rentals', () => {
    it('handle request action', () => {
      let state;
      state = rentalReducer(state, fetchRentalsData());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      let rentals = [rental1, rental2];
      state = rentalReducer(state, fetchRentalsSuccess(rentals));
      expect(state.rentals).toEqual(rentals);
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = rentalReducer(state, fetchRentalsError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //update rental
  describe('Update rental', () => {
    it('handle request action', () => {
      let state;
      state = rentalReducer(state, updateRentalRequest());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      state = rentalReducer(state, updateRentalSuccess(rental2));
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = rentalReducer(state, updateRentalError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });

  //delete rental
  describe('Delete rental', () => {
    it('handle request action', () => {
      let state;
      state = rentalReducer(state, deleteRentalRequest());
      expect(state.loading).toEqual(true);
    });
    it('handle success action', () => {
      let state;
      
      state = rentalReducer(state, deleteRentalSuccess());
      expect(state.error).toEqual(null);
      expect(state.loading).toEqual(false);
    });
    it('handle error action', () => {
      let state;
      state = rentalReducer(state, deleteRentalError('err'));
      expect(state.error).toEqual('err');
      expect(state.loading).toEqual(false);
    });
  });
});
    