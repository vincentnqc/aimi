import { connect } from "react-redux";
import List from "../Components/List";
import { login } from "../Redux/actions";
import { removeBusiness } from "../Redux/actions";

const mapStateToProps = state => {
  return {
    user: state.user,
    businesses: state.businesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    removeBusiness: id => dispatch(removeBusiness(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
