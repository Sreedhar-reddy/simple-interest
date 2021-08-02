const TransferIntiationReducer = (state, action) => {
  if (action.data) {
    state[action.objKey][action.colKey][action.valKey] = action.data;
  }
  switch (action.type) {
    case "FILTER_TRANSFER":
      return {
        ...state,
      };
    case "SEARCH_INPUT":
      return {
        ...state,
      };
    case "SEARCH_EMPLOYEE":
      state[action.objKey][action.colKey][action.valKey] =
        state[action.objKey][action.colKey]["value"];
      return {
        ...state,
      };
    case "CHANGE_DEPT":
      return {
        ...state,
      };
    case "CHANGE_POSITION":
      return {
        ...state,
      };
    case "CHANGE_COST_CENTRE":
      return {
        ...state,
      };
    case "CHANGE_INITIATION_MANAGET":
      return {
        ...state,
      };
    case "CHANGE_LOCATION":
      return {
        ...state,
      };
    case "CHANGE_FIXED_GROSS":
      return {
        ...state,
      };
    case "CHANGE_CURRENT_PERCENT":
      return {
        ...state,
      };
    case "CHANGE_BONUS":
      return {
        ...state,
      };
    case "CHANGE_EFFECTIVE_DATE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default TransferIntiationReducer;
