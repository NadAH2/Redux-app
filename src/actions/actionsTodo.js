import {
  ADD,
  DELETE_TS,
  EDIT,
  FILTER,
  CURRENT_TS,
  TOGGLE_COMPLETED,
} from "./constantsTodo";

export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const edit = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
export const deleteTs = (payload) => {
  return {
    type: DELETE_TS,
    payload,
  };
};

export const currentTs = (payload) => {
  return {
    type: CURRENT_TS,
    payload,
  };
};
export const filter = (payload) => {
  return {
    type: FILTER,
    payload,
  };
};

export const toggleCompleted = (payload) => {
  return {
    type: TOGGLE_COMPLETED,
    payload,
  };
};
