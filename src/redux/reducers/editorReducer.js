import { LOAD_EDITOR_CONTENT } from '../actions/actionTypes';

const initialState = {
  content: null
};

function editorReducer (state=initialState, action){
  switch(action.type) {
    case LOAD_EDITOR_CONTENT:
      return {
        ...state,
        content: action.payload
      }
    default:
      return state;
  }
}

export { editorReducer };