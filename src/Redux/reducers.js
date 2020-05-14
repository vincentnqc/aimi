import { combineReducers } from "redux";

const user = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        login: action.value
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        login: action.value
      });
    default:
      return state;
  }
};

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADDBUSINESS":
      return [...state, action.value];
    case "REMOVEBUSINESS":
      const newState = [...state];
      let buz = newState.find(x => x.id === action.value);
      let index = newState.indexOf(buz);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

const teachers = (state = [], action) => {
  console.log(state, "addTeacher")
  


  switch (action.type)  {
    case "ADDTEACHER":
      return [...state,action.value]
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



export default combineReducers({ user, teachers, instruments});
