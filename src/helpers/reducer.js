import INIT_STATE from "../constants/INIT_STATE";
import ACTIONS from "../constants/ACTIONS";
import PIXEL_AMOUNT from "../constants/PIXEL_AMOUNT";


function reducer(state, payload) {
    const newState = { ...state }
    const { type, amount } = payload
    switch (type) {
        case ACTIONS.INC: {
            console.log(newState)
            const propertyKey = Object.keys(newState.levelArray[newState.levelIndex].userShape[newState.propertyIndex])[0]
             newState.levelArray[newState.levelIndex].userShape[newState.propertyIndex][propertyKey] += PIXEL_AMOUNT
             console.log(newState)
            return newState
        }
        case ACTIONS.DEC: {
           const propertyKey = Object.keys(newState.levelArray[newState.levelIndex].userShape[newState.propertyIndex])[0]
             newState.levelArray[newState.levelIndex].userShape[newState.propertyIndex][propertyKey] -= PIXEL_AMOUNT
            return newState

        }
        case ACTIONS.CHANGE_PROPERTY_INDEX: {
            
            newState.propertyIndex += amount
            console.log(amount)

            return newState
        }
        case ACTIONS.CHANGE_LEVEL_INDEX: {
            if (amount > 0) {
                newState.levelIndex + amount === newState.levelArray.length ? newState.levelIndex = 0 : newState.levelIndex += amount;
                return newState
            } else {
                newState.levelIndex + amount < 0 ? newState.levelIndex = newState.levelArray.length - 1 : newState.levelIndex += amount;
                return newState;
            }
        }

        default: {
            return newState
        }

    }

}
export default reducer