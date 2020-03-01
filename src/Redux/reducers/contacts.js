const initialState = {
    contacts:[],
    history: [],
    loader: false
}

const familyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SEND_OTP__REQUEST': {
            return {
                ...state, loader: true
            }
        }

        case 'SEND_OTP__SUCCESS': {
            return {
                ...state, loader: false, history: payload
            }
        }
        case 'SEND_OTP__FAILED': {
            return {
                ...state, loader: false,
            }
        }
    
        case 'ADD_HISTORY': {
            console.log("redu")
            return {
                ...state, history:  [...state.history, payload ],
            }
        }
    
       
        default:
            return state
    }
}

export default familyReducer
