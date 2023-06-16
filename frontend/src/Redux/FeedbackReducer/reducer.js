import { FEEDBACK_FAIL, FEEDBACK_REQUEST, GET_FEEDBACK_SUCCESS, POST_FEEDBACK_SUCCESS } from "./actionType"


const initState={
    isLoading:false,
    isError:false,
    feedback:[]
}


export const reducer= (state=initState,action)=>{
    switch(action.type){
        case FEEDBACK_REQUEST:
            return {...state , isLoading:true}
        case POST_FEEDBACK_SUCCESS:
            return {...state , isLoading:false}
        case GET_FEEDBACK_SUCCESS:
            return {...state , isLoading:false , feedback:action.payload}
        case FEEDBACK_FAIL:
            return {...state , isLoading:false , isError:true}
        default:
            return state
    }
}