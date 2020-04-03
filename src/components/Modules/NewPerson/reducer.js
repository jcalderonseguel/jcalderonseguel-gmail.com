import INITIAL_STATE from "./state";
import { createReducer } from "reduxsauce";
import produce from "immer";
import { SET_LOADING, SET_OPEN_MODAL_SUCCESSS } from "./action";

const setLoading = produce((state, { loading }) => {
  state.isLoading = loading;
});

const setOpenModalSuccess = produce((state, { open }) => {
  state.isOpenModalSuccess = open;
});

const personReducer = createReducer(INITIAL_STATE, {
  [SET_LOADING]: setLoading,
  [SET_OPEN_MODAL_SUCCESSS]: setOpenModalSuccess
});

export { INITIAL_STATE };
export default personReducer;
