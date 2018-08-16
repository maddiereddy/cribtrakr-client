import { 
  createRental, CREATE_RENTAL, 
  createRentalSuccess, CREATE_RENTAL_SUCCESS, 
  createRentalError, CREATE_RENTAL_ERROR,
  fetchRentalData, FETCH_RENTAL_DATA, 
  fetchRentalSuccess, FETCH_RENTAL_SUCCESS,
  fetchRentalError, FETCH_RENTAL_ERROR,
  fetchRentalsData, FETCH_RENTALS_DATA, 
  fetchRentalsSuccess, FETCH_RENTALS_SUCCESS,
  fetchRentalsError, FETCH_RENTALS_ERROR,
  updateRentalRequest, UPDATE_RENTAL_REQUEST, 
  updateRentalSuccess, UPDATE_RENTAL_SUCCESS,
  updateRentalError, UPDATE_RENTAL_ERROR,
  deleteRentalRequest, DELETE_RENTAL_REQUEST, 
  deleteRentalSuccess, DELETE_RENTAL_SUCCESS,
  deleteRentalError, DELETE_RENTAL_ERROR
} from "./rentals";

describe('Rentals Actions', () => {
  // Create rental actions
  it('should return the createRentalRequest() action', () => {
    const action = createRental()
    expect(action.type).toEqual(CREATE_RENTAL)
  })
  it('should return the createRentalSuccess action', () => {
    const rentalSample = 'newRental'
    const action = createRentalSuccess(rentalSample)
    expect(action.type).toEqual(CREATE_RENTAL_SUCCESS)
    expect(action.newRental).toEqual(rentalSample)
  })
  it('should return the createRentalError action', () => {
    const err = 'oops'
    const action = createRentalError(err)
    expect(action.type).toEqual(CREATE_RENTAL_ERROR)
    expect(action.error).toEqual(err)
  })
  // Fetch rental by id actions
  it('should return the fetchRentalRequest() action', () => {
    const action = fetchRentalData()
    expect(action.type).toEqual(FETCH_RENTAL_DATA)
  })
  it('should return the fetchRentalSuccess action', () => {
    const data = {}
    const action = fetchRentalSuccess(data)
    expect(action.type).toEqual(FETCH_RENTAL_SUCCESS)
    expect(action.rental).toEqual(data)
  })
  it('should return the fetchRentalError action', () => {
    const err = 'oops'
    const action = fetchRentalError(err)
    expect(action.type).toEqual(FETCH_RENTAL_ERROR)
    expect(action.error).toEqual(err)
  })
  // Fetch rentals actions
  it('should return the fetchRentalsRequest() action', () => {
    const action = fetchRentalsData()
    expect(action.type).toEqual(FETCH_RENTALS_DATA)
  })
  it('should return the fetchRentalsSuccess action', () => {
    const data = {}
    const action = fetchRentalsSuccess(data)
    expect(action.type).toEqual(FETCH_RENTALS_SUCCESS)
    expect(action.rentals).toEqual(data)
  })
  it('should return the fetchRentalsError action', () => {
    const err = 'oops'
    const action = fetchRentalsError(err)
    expect(action.type).toEqual(FETCH_RENTALS_ERROR)
    expect(action.error).toEqual(err)
  })
  // Update rental by id actions
  it('should return the updateRentalRequest() action', () => {
    const action = updateRentalRequest()
    expect(action.type).toEqual(UPDATE_RENTAL_REQUEST)
  })
  it('should return the updateRentalSuccess action', () => {
    const data = {}
    const action = updateRentalSuccess(data)
    expect(action.type).toEqual(UPDATE_RENTAL_SUCCESS)
    expect(action.newRental).toEqual(data)
  })
  it('should return the updateRentalError action', () => {
    const err = 'oops'
    const action = updateRentalError(err)
    expect(action.type).toEqual(UPDATE_RENTAL_ERROR)
    expect(action.error).toEqual(err)
  })
  // Delete rental by id actions
  it('should return the deleteRentalRequest() action', () => {
    const action = deleteRentalRequest()
    expect(action.type).toEqual(DELETE_RENTAL_REQUEST)
  })
  it('should return the updateRentalSuccess action', () => {
    const data = {}
    const action = deleteRentalSuccess(data)
    expect(action.type).toEqual(DELETE_RENTAL_SUCCESS)
    expect(action.rental).toEqual(data)
  })
  it('should return the updateRentalError action', () => {
    const err = 'oops'
    const action = deleteRentalError(err)
    expect(action.type).toEqual(DELETE_RENTAL_ERROR)
    expect(action.error).toEqual(err)
  })
})