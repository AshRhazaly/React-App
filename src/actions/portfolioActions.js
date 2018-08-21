import {
  GET_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA_FAIL,
  GET_PORTFOLIO_DATA_SUCCESS
} from "../actions/types";

export const getPortfolioDataSuccess = portfolioData => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: portfolioData
  };
};

export const getPortfolioDataFail = error => {
  return {
    type: GET_PROFILE_FAIL,
    payload: error
  };
};
export const getPortfolioData = () => {
  return dispatch => {
    dispatch({ type: GET_PORTFOLIO_DATA })
  }
}