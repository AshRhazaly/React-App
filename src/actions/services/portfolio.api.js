import { BASE_URL } from "./endpoint";

export default class PortfolioApi {
  static getData() {
    return fetch(`${BASE_URL}userPortfolio`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
  }
}