import { Action } from "redux";

// state constants
export const NAME_COUNT = 'count'

// initial state
export const initialState = {
  [NAME_COUNT]: 0
};

// action types
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const RESET = 'counter/reset';

// actions
export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const reset = () => ({
  type: RESET
})

// reducers
const counterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    default:
      return state
  }
}

export const reducers = {
  [NAME_COUNT]: counterReducer
}