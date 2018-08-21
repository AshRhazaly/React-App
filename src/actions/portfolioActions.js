import {
  GET_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA_FAIL,
  GET_PORTFOLIO_DATA_SUCCESS
} from "./types";
import PortfolioApi from "./services/portfolio.api";

export const getPortfolioDataSuccess = portfolioData => {
  return {
    type: GET_PORTFOLIO_DATA_SUCCESS,
    payload: portfolioData
  };
};

export const getPortfolioDataFail = error => {
  return {
    type: GET_PORTFOLIO_DATA_FAIL,
    payload: error
  };
};
export const getPortfolioData = () => {
  return dispatch => {
    dispatch({ type: GET_PORTFOLIO_DATA });
    return PortfolioApi.getData()
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(getPortfolioDataSuccess(response));
      })
      .catch(error => {
        dispatch(getPortfolioDataFail(error));
      });
  };
};
