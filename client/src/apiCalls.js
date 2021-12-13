import axios from "axios"

export const loginCall = async (userCredential,dispatch){
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("auth/login",userCredential)
    } catch (error) {
        
    }
}