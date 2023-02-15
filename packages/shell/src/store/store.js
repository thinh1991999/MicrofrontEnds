import { createStore } from "redux";

const initialState = {
  user: {
    name: "Đỗ Duy Thịnh",
    age: 24,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
