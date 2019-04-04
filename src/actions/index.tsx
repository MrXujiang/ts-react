import * as Actions from './actionTypes'

// 增加total
export interface IncrementTotal {
	type: Actions.NUM_INCREMENT
}

export const increment = (): IncrementTotal => {
	return {
		type: Actions.NUM_INCREMENT
	}
}

export const incrementAsync = () => {
	return (dispatch:any, getState: object) => {
		setTimeout(() => {
			dispatch(increment());
		}, 1000)
	}
}

// 减少total
export interface DecrementTotal {
	type: Actions.NUM_DECREMENT
}

export const decrement = (): DecrementTotal => {
	return {
		type: Actions.NUM_DECREMENT
	}
}

export const decrementAsync = () => {
	return (dispatch: any, getState: object) => {
		setTimeout(() => {
			dispatch(decrement());
		}, 1000)
	}
}

export type TotalAction = IncrementTotal | DecrementTotal