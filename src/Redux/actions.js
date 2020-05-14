export const login = () => {
  return {
    type: "LOGIN",
    value: true
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    value: false
  };
};

export const removeBusiness = id => {
  return {
    type: "REMOVEBUSINESS",
    value: id
  };
};

export const addbusiness = business => {
  return {
    type: "ADDBUSINESS",
    value: business
  };
};

export const addTeacher = teacher => {
 
  return {
    type: "ADDTEACHER",
    value: teacher
  }
}