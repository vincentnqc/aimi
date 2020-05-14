import { connect } from 'react-redux'
import Lesson from '../Components/Lesson'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    instruments: state.instruments,
    teachers: state.teachers
  

  }
}

export default connect(mapStateToProps)(Lesson)