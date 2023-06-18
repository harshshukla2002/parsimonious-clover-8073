import axios from "axios";
import {
  FEEDBACK_FAIL,
  FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  POST_FEEDBACK_SUCCESS,
} from "./actionType";

export const feedbackget = (dispatch) => {
  dispatch({ type: FEEDBACK_REQUEST });
  axios
    .get("https://clear-gaiters-hen.cyclic.app/feedback")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_FEEDBACK_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: FEEDBACK_FAIL });
    });
};

export const feedbackpost = (data) => (dispatch) => {
  dispatch({ type: FEEDBACK_REQUEST });
  return axios
    .post("https://clear-gaiters-hen.cyclic.app/feedback/add", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_FEEDBACK_SUCCESS });
      dispatch(feedbackget);
    })
    .catch(() => {
      dispatch({ type: FEEDBACK_FAIL });
    });
};

export const feedbackpatch = (id, likes) => (dispatch) => {
  dispatch({ type: FEEDBACK_REQUEST });
  return axios
    .patch(`https://clear-gaiters-hen.cyclic.app/feedback/update/${id}`, {
      likes: likes + 1,
    })
    .then((res) => {
      console.log(res);
      dispatch(feedbackget);
    })
    .catch(() => {
      dispatch({ type: FEEDBACK_FAIL });
    });
};

export const feedbackpatchDislike = (id, likes) => (dispatch) => {
  dispatch({ type: FEEDBACK_REQUEST });
  return axios
    .patch(`https://clear-gaiters-hen.cyclic.app/feedback/update/${id}`, {
      likes: likes - 1,
    })
    .then((res) => {
      console.log(res);
      dispatch(feedbackget);
    })
    .catch(() => {
      dispatch({ type: FEEDBACK_FAIL });
    });
};
