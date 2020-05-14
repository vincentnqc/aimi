import { combineReducers } from "redux";

const user = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        login: action.value,
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        login: action.value,
      });
    default:
      return state;
  }
};

const teachers = (state = [], action) => {
  console.log(state, "addTeacher");

  switch (action.type) {
    case "ADDTEACHER":
      return [...state, action.value];
    default:
      return state;
  }
};

const instruments = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ user, teachers, instruments });
