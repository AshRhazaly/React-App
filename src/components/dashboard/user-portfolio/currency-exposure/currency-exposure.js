import React from "react";
import "./currency-exposure.scss";
import convertToPercentage from "../../../../helpers/TransformNumber";

const CurrencyExposure = ({ currencyExposure }) => {
  const currencyExposureList = currencyExposure.map(data => {
    return (
      <li className="col-6 list-item" key={data.id}>
        <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
          <div className={`square ${data.label.toLowerCase()}`} />
          <div className="col">{data.label}</div>
          <span className="col">{convertToPercentage(data.value, 0)}</span>
        </section>
      </li>
    );
  });

  return (
    <section className="pt-5">
      <h5>Global Currency Exposure</h5>
      <div className="col-12 pt-3 currency-exposure">
        <ul className="row list-unstyled">{currencyExposureList}</ul>
      </div>
    </section>
  );
};

export default CurrencyExposure;
