import React from "react";
import "./user-portfolio.scss";
import CurrencyExposure from "./currency-exposure/currency-exposure";
import AssetAllocation from "./asset-allocation/asset-allocation";

const UserPortfolio = () => {
  return (
    <section className="user-portfolio-card card p-5 shadow p-3 mb-5 bg-white rounded">
      <h5 className="portfolio-header card-title text-center">
        Portfolio Composition
      </h5>

      <section className="card-body pt-5">
        <CurrencyExposure />
        <AssetAllocation />
      </section>
    </section>
  );
};

export default UserPortfolio;
