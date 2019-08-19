import C from '../actions/constants'

export const exemple = (state = {}, action) => {
    switch (action.type) {
        case C.EXEMPLE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}