const TransferPageReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TRANSFER":
      return {
        ...state,
        transferText: action.data,
        loading: true,
        apiUrl: `${state.apiBaseUrl}${action.data}?status='${state.statusText}'&search='${state.searchText}'`,
      };
    case "SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.data,
      };
    case "SEARCH_TRANSFER":
      return {
        ...state,
        searchText: state.searchInput,
        loading: state.searchInput !== state.searchText ? true : false,
        apiUrl: `${state.apiBaseUrl}${state.transferText}?status='${state.statusText}'&search='${state.searchInput}'`,
      };
    case "FILTER_STATUS":
      return {
        ...state,
        statusText: action.data,
        loading: true,
        apiUrl: `${state.apiBaseUrl}${state.transferText}?status='${action.data}'&search='${state.searchText}'`,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        tableBody: action.payload,
        loading: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        tableBody: [],
        loading: false,
        errMsg: action.errMsg,
      };
    default:
      return state;
  }
};

export default TransferPageReducer;
