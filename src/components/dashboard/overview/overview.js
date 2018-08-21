import React from "react";
import "./overview.scss";

const Overview = () => {
  return (
    <section className="overview-card card p-5 shadow p-3 mb-5 bg-white rounded">
      <h4 className="card-title text-center">
        StashAway's standard portfolios:
      </h4>

      <section className="card-body">
        <div className="overview-card-body row">
          <div className="col text-center">
            <p className="annual-returns">Expected annual returns:</p>
            <p className="annual-returns-value">1.1%</p>
          </div>
          <div className="col text-center">
            <p className="var">VaR:</p>
            <p className="var-value">2.5%</p>
          </div>
          <div className="col text-center">
            <p className="optimized">Optimised for:</p>
            <p className="optimized-value">USD</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Overview;
