import { connect } from "react-redux";
import New from "../Components/New";
import { addTeacher } from "../Redux/actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
    teachers: state.teachers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { addTeacher: (teacher) => dispatch(addTeacher(teacher)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(New);
