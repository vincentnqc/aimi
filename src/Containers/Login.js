import { connect } from "react-redux";
import Login from "../Components/Login";
import { login } from "../Redux/actions";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
