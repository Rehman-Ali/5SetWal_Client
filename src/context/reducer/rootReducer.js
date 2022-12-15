const initialState = {
  data: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
      };
    default:
      return state;
  }
};
