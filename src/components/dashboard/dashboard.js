import React, { Component } from "react";
import Header from "./header/header";
import Overview from "./overview/overview";
import UserPortfolio from "./user-portfolio/user-portfolio";
import { connect } from "react-redux";
import { getPortfolioData } from "../../actions";

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.getPortfolioData();
  };

  render() {
    const { loading } = this.props;
    const {
      overview,
      currencyExposure,
      assetAllocation
    } = this.props.portfolioData;
    if (!loading) {
      return (
        <div>
          <Header />
          <div className="p-5 container">
            <Overview overviewData={overview} />
            <UserPortfolio
              currencyExposureData={currencyExposure}
              assetAllocationData={assetAllocation}
            />
          </div>
        </div>
      );
    } else {
      return <div>i will build a loading screen</div>;
    }
  }
}

const mapStateToProps = ({ portfolio }) => {
  const { loading, portfolioData, error } = portfolio;

  return { loading, portfolioData, error };
};

export default connect(
  mapStateToProps,
  { getPortfolioData }
)(Dashboard);
