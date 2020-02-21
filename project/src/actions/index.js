import axios from 'axios';


export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchPlayer = () => dispatch => {
    dispatch({ type: FETCH_DATA})

    axios
        .get(`http://localhost:8888/players`)
        .then(res => {
            console.log('res',res.data)
            dispatch({ type: FETCH_SUCCESS ,payLoad: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FAIL ,payLoad: err })
        })
}


export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postPlayer = () => dispatch => {
    dispatch({ type: POST_DATA})
    axios
        .post(`http://localhost:8888/players`)
        .then(res => {
            console.log('res',res.data)
            dispatch({ type: POST_SUCCESS ,payLoad: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_FAIL ,payLoad: err })
        })
}

// export const GET_DATA = "GET_DATA";
// export const GET_ERROR = "GET_ERROR";

// export const getPlayer = () => dispatch => {
//     dispatch({ type: GET_DATA})
//     axios
//         .get(`http://localhost:8888/players`)
//         .then(res => {
//             console.log('res', res.data)

//         })
//         .catch(err => {
//             console.log('error in get', err)
//             dispatch({ type: GET_DATA ,payLoad: err })

//         })
// }