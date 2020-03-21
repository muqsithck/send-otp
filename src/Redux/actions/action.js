import axios from 'axios'

export const setHistory = (data) => {
    console.log(data)
    return {
        type: 'ADD_HISTORY',
        payload: data
    }
}
export const setCurrentContact = (data) => {
    return {
        type: 'SET_CONTACT',
        payload: data
    }
}



export const sentOtpFunction = (data) =>
    (dispatch) => {
        let otp = Math.floor(100000 + Math.random() * 900000)
        dispatch({ type: 'SEND_OTP_REQUEST' })
        axios.post(`https://2factor.in/API/V1/ec15425d-5b0f-11ea-9fa5-0200cd936042/SMS/${data}/${otp}`)
        axios.post(``)
            .then(res => {
                console.log(res)
                dispatch({ type: 'SEND_OTP_SUCCESS', payload: res.data })
            })
            .catch(() => {
                dispatch({ type: 'SEND_OTP_FAILED' })
            })
    }
