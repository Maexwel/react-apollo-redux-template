import { connect } from 'react-redux';
import { exempleAction } from '../../store/actions/exempleActions';
import { withTheme } from 'emotion-theming';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ExempleUI = ({ theme, exemple, exempleFunction }) => {
    const exempleTheme = css({
        fontSize: theme.fontSize.SM,
        color: theme.colors.primary["100"],
        ":hover": {
            color: theme.colors.secondary["100"]
        },
        margin: theme.margin.box
    }); // theme exemple

    return (
        <div css={exempleTheme}>Exemple</div>
    )
}

/** REDUX CONNEXION */
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
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ExempleUI));