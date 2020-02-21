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
        case action:            
            return state;    
        default:
            return state;
    }
}

export default playerReducer;