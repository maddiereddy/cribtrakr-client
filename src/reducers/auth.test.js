import authReducer from './auth';

describe('authReducer', () => {
    it('should return initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual({
            authToken: null, 
            currentUser: null, 
            loading: false,
            error: null
        })
    })
    it('should return the current state on an unknown action', () => {
       let currentState = {};
       const state = authReducer(currentState, {type: '_UNKNOWN'});
       expect(state).toEqual(currentState);
    })
    it('should return state with loading true and error null', () => {
        let currentState = {
            loading: false,
            error: null
        };
        const state = authReducer(currentState, { type: 'AUTH_REQUEST' });
        expect(state).toEqual({
            loading: true, 
            error: null
        })
    })
    it('should return state with loading false and error true', () => {
        let error = 'error';
        let currentState = {
            loading: false,
            error: null
        };
        const state = authReducer(currentState, { type: 'AUTH_ERROR' , error: error});
        expect(state).toEqual({
            loading: false,
            error: error
        })
    })
})