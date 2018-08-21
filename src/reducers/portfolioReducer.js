import {
  GET_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA_FAIL,
  GET_PORTFOLIO_DATA_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  error: "",
  portfolioData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_DATA:
      return { ...state, error: "", loading: true };
    case GET_PORTFOLIO_DATA_SUCCESS:
      return { ...state, error: "", portfolioData: action.payload, loading: false };
    case GET_PORTFOLIO_DATA_FAIL:
      return { ...state, error:action.payload, loading: false };
    default:
      return state;
  }
};