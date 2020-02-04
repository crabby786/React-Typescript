import { combineReducers } from "redux";
//"LOADING", "SUCCESS", "FAILED"
const initialState = { isLoading: null, err: null, data: [] };
const userList = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "FAILED":
      return { ...state, isLoading: false, err: "there is an error" };

    case "SUCCESS":
      return { ...state, data: payload.data, isLoading: false, err: null };
  }
  return state;
};

const rootReducer = combineReducers({
  userList
});

export default rootReducer;
