import React, { Component } from "react";
import Header from "./header/header";
import Overview from "./overview/overview";
import UserPortfolio from "./user-portfolio/user-portfolio";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="p-5 container">
          <Overview />
          <UserPortfolio />
        </div>
      </div>
    );
  }
}

export default Dashboard;
