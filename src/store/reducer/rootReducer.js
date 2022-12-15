import { TOGGLESIDEBAR } from "../actions/type";

const initialState = {
  ToggleSidebar: false,
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLESIDEBAR:
      console.log("toggle");
      return {
        ...state,
        ToggleSidebar: !state.ToggleSidebar,
      };
    default:
      return state;
  }
};
