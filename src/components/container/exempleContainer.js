import { connect } from 'react-redux'
import exempleUi from '../ui/exempleUi'
import { exempleAction } from '../../store/actions/exempleActions'

const mapStateToProps = state => ({
    exemple: state.exemple
})

const mapDispatchToProps = dispatch => {
    return {
        exempleFunction: (val) => {
            dispatch(
                exempleAction(val)
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(exempleUi)