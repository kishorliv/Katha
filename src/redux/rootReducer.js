import { combineReducers } from 'redux';

import { editorReducer } from './reducers/editorReducer';

export const rootReducer = combineReducers({
  editor: editorReducer
});