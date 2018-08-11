import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

//post
export const CREATE_RENTAL = 'CREATE_RENTAL'
export const createRental = (rental) => ({
    type: CREATE_RENTAL,
    newRental: rental
})

export const CREATE_RENTAL_SUCCESS = 'CREATE_RENTAL_SUCCESS'
export const createRentalSuccess = (rental) => ({
    type: CREATE_RENTAL_SUCCESS,
    newRental: rental
})

export const CREATE_RENTAL_ERROR = 'CREATE_RENTAL_ERROR'
export const createRentalError = (error) => ({
    type:CREATE_RENTAL_ERROR,
    error: error
})

//get by id
export const FETCH_RENTAL_DATA = 'FETCH_RENTAL_DATA'
export const fetchRentalData = () => ({
    type: FETCH_RENTAL_DATA,
})

export const FETCH_RENTAL_SUCCESS = 'FETCH_RENTAL_SUCCESS'
export const fetchRentalSuccess = (rental) => ({
    type: FETCH_RENTAL_SUCCESS,
    rental: rental
})

export const FETCH_RENTAL_ERROR= 'FETCH_RENTAL_ERROR'
export const fetchRentalError = (error) => dispatch => ({
    type: FETCH_RENTAL_ERROR,
    error: error
})

//get all
export const FETCH_RENTALS_DATA = 'FETCH_RENTALS_DATA'
export const fetchRentalsData = () => ({
    type: FETCH_RENTALS_DATA,
})

export const FETCH_RENTALS_SUCCESS = 'FETCH_RENTALS_SUCCESS'
export const fetchRentalsSuccess = (rentals) => ({
    type: FETCH_RENTALS_SUCCESS,
    rentals: rentals
})

export const FETCH_RENTALS_ERROR= 'FETCH_RENTALS_ERROR'
export const fetchRentalsError = (error) => dispatch => ({
    type: FETCH_RENTALS_ERROR,
    error: error
})

//put by id
export const UPDATE_RENTAL_REQUEST = 'UPDATE_RENTAL'
export const updateRentalRequest = (rental) => ({
    type: UPDATE_RENTAL_REQUEST,
    newRental: rental,
    redirectToRental: true
})

export const UPDATE_RENTAL_SUCCESS = 'UPDATE_RENTAL_SUCCESS'
export const updateRentalSuccess = (rental) => ({
    type: UPDATE_RENTAL_SUCCESS,
    newRental: rental,
    redirectToRental: true
})

export const UPDATE_RENTAL_ERROR = 'UPDATE_RENTAL_ERROR'
export const updateRentalError = (error) => ({
    type: UPDATE_RENTAL_ERROR,
    error: error
})

//delete by id
export const DELETE_RENTAL_REQUEST = 'DELETE_RENTAL'
export const deleteRentalRequest = (rental) => ({
    type: DELETE_RENTAL_REQUEST,
    
})

export const DELETE_RENTAL_SUCCESS = 'DELETE_RENTAL_SUCCESS'
export const deleteRentalSuccess = (rental) => ({
    type: DELETE_RENTAL_SUCCESS,
    rental: rental
    
})

export const DELETE_RENTAL_ERROR = 'DELETE_RENTAL_ERROR'
export const deleteRentalError = (error) => ({
    type: DELETE_RENTAL_ERROR,
    error: error
})


export const newRental = (rental) => dispatch => {
    //create a new rental
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/rentals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(rental)
    
    })
        .then(res => res.json())
				.then(response=> {
					window.location = `/dashboard`; 
					return dispatch(createRentalSuccess(response));
        })
        .catch(err => {   
            dispatch(createRentalError(err))
        });
};

export const fetchRental =(id)=>(dispatch)=>{
    //fetch a specific rental with its id
    dispatch(fetchRentalData());
    const authToken = loadAuthToken();
    fetch(`${API_BASE_URL}/rentals/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(rental => dispatch(fetchRentalSuccess(rental)))
        .catch(err => dispatch(fetchRentalError(err))) 
}

export const fetchRentals = () => (dispatch) => {
    //retrieve user's rentals
    dispatch(fetchRentalsData());
    const authToken = loadAuthToken();

    fetch(`${API_BASE_URL}/rentals`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(rentals => dispatch(fetchRentalsSuccess(rentals)))
        .catch(err=> dispatch(fetchRentalsError(err)))
}

export const updateRental = (rental) => dispatch => {
    //edit a rental with updateRental
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/rentals/${rental.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(rental)
         
    
    })
        .then(res => res.json())
            .then(response=> {
            return dispatch(updateRentalRequest(response));
        })
        .catch(err => {
            dispatch(updateRentalError(err))
        });
};

export const deleteRental = (rental) => dispatch => {
  //delete a rental with deleteRental
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/rentals/${rental.id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify(rental)
  
  })
	.then(()=> {
		return dispatch(deleteRentalSuccess(rental.id))
	})
	.catch(err=> dispatch(deleteRentalError(err))) 
};