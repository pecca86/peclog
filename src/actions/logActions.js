/* Log related actions that gets put into the reducer */

import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS,
} from "./types";

// since we will be using async calls we use thunk
// since it is async, we need to return a function instead of an object
// instead of typing 'retrun async dispatch => {} we shorten it to 'async (dispatch) => {}
// this is a function that returns a function
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Action for adding a new log entry
export const addLog = (formData) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Delete log according to log id
export const deleteLog = (logID) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${logID}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: logID,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// implement log search
// The backend answers to queries like q=searchTerm
export const searchLog = (searchTerm) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${searchTerm}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// set reducer loading value to true
// Our reducer will then catch this and perform any task set in it
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
