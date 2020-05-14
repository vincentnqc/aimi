import { connect } from 'react-redux'
import Teachers from '../Components/Teachers'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    teachers: state.teachers

  }
}

export default connect(mapStateToProps)(Teachers)