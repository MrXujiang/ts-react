import { TotalAction } from '../actions';
import { NUM_INCREMENT, NUM_DECREMENT } from '../actions/actionTypes';
import { StoreState } from '../store';

const initState: StoreState = {
	total: 1,
	name: 'xujiang'
}

const total = (state= initState, action: TotalAction): StoreState => {
	switch(action.type){
		case NUM_INCREMENT:
			return {...state, total: state.total + 1};
		case NUM_DECREMENT: 
			return {...state, total: state.total - 1};
		default:
			return state;
	}
}

export default total