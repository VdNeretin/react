import { addCardSuccess, failureAction  } from '../actions'

const initialState = {
  addCardSuccess: addCardSuccess,
  failureAction: failureAction
}

export default function (state = initialState, action) {
  switch(action.type) {
    case addCardSuccess: {
      return {cardIsExist: true}
    }
    case failureAction: {
      return {cardIsExist: false}
    }
    default:
      return state
  }
}