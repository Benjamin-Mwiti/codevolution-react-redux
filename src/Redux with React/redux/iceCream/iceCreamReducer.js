import { ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer;