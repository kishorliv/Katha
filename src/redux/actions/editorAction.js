import { LOAD_EDITOR_CONTENT } from './actionTypes';

export const loadEditorContent = () => {
  return ({
    type: LOAD_EDITOR_CONTENT,
    payload: localStorage.getItem('content')
  });
}