import { SUBMIT_FORM } from './action';

export default function(state = [], action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return state.concat(action.value);
    default:
      return state;
  }
}
