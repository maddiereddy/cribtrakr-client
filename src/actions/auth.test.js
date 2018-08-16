import { 
  authRequest, AUTH_REQUEST, 
  authSuccess, AUTH_SUCCESS, 
  authError, AUTH_ERROR, 
  setAuthToken, SET_AUTH_TOKEN, 
  clearAuth, CLEAR_AUTH } from "./auth";

describe('Auth Actions', () => {
  it('should return the authRequest() action', () => {
    const action = authRequest()
    expect(action.type).toEqual(AUTH_REQUEST)
  })
  it('should return the authSuccess action', () => {
    const newUser = 'newUser'
    const action = authSuccess(newUser)
    expect(action.type).toEqual(AUTH_SUCCESS)
    expect(action.currentUser).toEqual(newUser)
  })
  it('should return the authError action', () => {
    const err = 'oops'
    const action = authError(err)
    expect(action.type).toEqual(AUTH_ERROR)
    expect(action.error).toEqual(err)
  })
  it('should set the auth token', () => {
    const authToken = 123
    const action = setAuthToken(authToken)
    expect(action.type).toEqual(SET_AUTH_TOKEN)
    expect(action.authToken).toEqual(authToken)
  })
  it('should return the clearAuth() action', () => {
    const action = clearAuth()
    expect(action.type).toEqual(CLEAR_AUTH)
  })
})