import axios from 'axios'

export const setHistory = (data) => {
    return {
        type: 'ADD_HISTORY',
        payload: data
    }
}

export const sentOtpFunction = (data) =>
    (dispatch) => {
        console.log("action" , data)
        let n = data
        let otp = "666777"
        dispatch({ type: 'SEND_OTP_REQUEST' })
        // axios.post(`https://2factor.in/API/V1/ec15425d-5b0f-11ea-9fa5-0200cd936042/SMS/${n}/${otp}`)
        axios.post(``)
            .then(res => {
                dispatch({ type: 'SEND_OTP_SUCCESS', payload: res.data })
            })
            .catch(() => {
                dispatch({ type: 'SEND_OTP_FAILED' })
            })
    }
