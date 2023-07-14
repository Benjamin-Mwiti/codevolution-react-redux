const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk')

// initialState
export const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}

// Async action creator
/* 
 * The thunk middleware is used here to give the action creator the ability to return a function instead of an action object
 * The function is not pure so it is allowed to have side effects such as async api calls
 * The function can also dispatch actions by receiving the dispatch method as its argument
 */
const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersError(error.message))
            })
    }
}

// Create store
export const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState())
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())