import React from "react";
import "./currency-exposure.scss";

const CurrencyExposure = ({ currencyExposure }) => {
  return (
    <section className="pt-5">
      <h5>Global Currency Exposure</h5>
      <div className="col-12 pt-3 currency-exposure">
        <ul className="row list-unstyled">
          <li className="col-6 list-item">
            <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
              <div className="square usd" />
              <div className="col">USD</div>
              <span className="col">{currencyExposure.USD}</span>
            </section>
          </li>
          <li className="col-6 list-item">
            <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
              <div className="square jpy" />
              <div className="col">JPY</div>
              <span className="col">{currencyExposure.JPY}</span>
            </section>
          </li>
          <li className="col-6 list-item">
            <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
              <div className="square sgd" />
              <div className="col">SGD</div>
              <span className="col">{currencyExposure.SGD}</span>
            </section>
          </li>
          <li className="col-6 list-item">
            <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
              <div className="square others" />
              <div className="col">Others</div>
              <span className="col">{currencyExposure.Others}</span>
            </section>
          </li>
          <li className="col-6 list-item">
            <section className="shadow-sm p-3 mr-1 mb-3 bg-white rounded row">
              <div className="square eur" />
              <div className="col">EUR</div>
              <span className="col">{currencyExposure.EUR}</span>
            </section>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CurrencyExposure;
