import {
    FETCH_DATA,
     FETCH_SUCCESS, 
     FETCH_FAIL, 
     POST_DATA,
     POST_SUCCESS,
     POST_FAIL } from '../actions';

//setup initialState
const initialState = {
    players: [],
    isFetching: false,
    isPosting: false,
    errors: ""
}

//setup an empty reducer
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                player: [action.payload],
                isFetching: false,
            } 
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            } 
        case POST_DATA:
            return {                
                ...state,
                isPosting: true,
                players: [...state.players]
            }
        case POST_SUCCESS:
            return {
                ...state,
                players: [...state.players, action.payload],
                isPosting: false,
                
            }
        case POST_FAIL :
            return {
                ...state,
                isPosting: false,
                errors: action.payload
            }            
               
        default:
            return state;
    }
}

export default playerReducer;