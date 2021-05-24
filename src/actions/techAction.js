import { setLoading } from "./logActions";
import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  CURRENT_TECH,
  CLEAR_CURRENT_TECH,
  UPDATE_TECH,
} from "./types";

// Get all techs from backend
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      data: error.response.data,
    });
  }
};

// Add a new technician
export const addTech = (formData) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

// Delete a technician based on techID
// Delete log according to log id
export const deleteTech = (techID) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${techID}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: techID,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

// Set a tech into current state
export const setCurrent = (tech) => {
  return {
    type: CURRENT_TECH,
    payload: tech,
  };
};

// Clear current from state
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_TECH,
  };
};

// Update selected tech
export const updateTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/techs/${tech.id}`, {
      method: "PUT",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};
