const redux = require('redux');
console.log(redux)
const { createStore, combineReducers, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger')

// Actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// buyCake action creator function
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// buyIceCream action creator function
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

// cakeInitialState initial state
const cakeInitialState = {
    numOfCakes: 10,
}

// iceCreamInitialState initial state
const iceCreamInitialState = {
    numOfIceCreams: 20
}

// Main reducer function
/* const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            break;

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            break;

        default:
            return state
    }
} */

// cakeReducer function
const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

// iceCreamReducer function
const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState())

// Subscribe to store changes and store the function returned to a variable
// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// Unsubscribe from the store changes
unsubscribe()
console.log("State changed", store.getState())
    // console.log(state.cake.numOfCakes)