import { connect } from "react-redux";
import Addbusiness from "../Components/Addbusiness";
import { addbusiness } from "../Redux/actions";

const mapStateToProps = state => {
  return {
    businesses: state.businesses,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addbusiness: payLoad => dispatch(addbusiness(payLoad))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addbusiness);
