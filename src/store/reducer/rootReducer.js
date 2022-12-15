import { ABC } from "../actions/type";


const initialState = {
  data: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ABC:
      return {
        ...state,
      };
    default:
      return state;
  }
};
