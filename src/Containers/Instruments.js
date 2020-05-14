import { connect } from 'react-redux'
import Instruments from '../Components/Instruments'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
    instruments: state.instruments
  

  }
}

export default connect(mapStateToProps)(Instruments)