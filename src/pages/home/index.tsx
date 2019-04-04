import { connect } from 'react-redux';
import { StoreState } from '../../store';
import * as actions from "../../actions";
import View from './view';
import _handle from './_handle';


const mapStateToProps = (state:StoreState) => {
    return {
        total: state.total
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add() {
            dispatch(actions.increment())
        },
        addAsync() {
            dispatch(actions.incrementAsync())
        },
        minus() {
            dispatch(actions.decrement())
        },
        minusAsync() {
            dispatch(actions.decrementAsync())
        },
        ..._handle
    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default ConnectedApp;

