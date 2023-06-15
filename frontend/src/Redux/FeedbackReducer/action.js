import axios from "axios"
import { FEEDBACK_FAIL, FEEDBACK_REQUEST, POST_FEEDBACK_SUCCESS } from "./actionType"



export const feedbackpost=(data)=>(dispatch)=>{
    dispatch({type:FEEDBACK_REQUEST})
    axios.post("http://localhost:4500/feedback/add",data)
    .then((res)=>{
        console.log(res)
        dispatch({type:POST_FEEDBACK_SUCCESS})
    })
    .catch(()=>{
        dispatch({type:FEEDBACK_FAIL})
    })
}