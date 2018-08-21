import React from "react";
import { Progress } from "reactstrap";
import "./asset-allocation.scss";
import convertToPercentage from "../../../../helpers/TransformNumber";

const AssetAllocation = ({ assetAllocation }) => {
  const { asset } = assetAllocation;
  return (
    <section className="pt-5">
      <h5>Asset Allocation</h5>
      <table className="table mt-5">
        <thead>
          <tr className="asset-table-header font-weight-light">
            <th>ASSET NAME</th>
            <th>TICKET</th>
            <th>WEIGHT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>US EQUITIES</td>
            <td />
            <td />
          </tr>
          {asset.usa.map(value => (
            <tr key={value.id}>
              <td key={value.label}> {value.label}</td>
              <td key={value.ticker}>{value.ticker}</td>
              <td key={value.weight}>
                <Progress value={value.weight * 100}>{convertToPercentage(value.weight,0)}</Progress>
              </td>
            </tr>
          ))}
          <tr className="table-active">
            <td>INTERNATIONAL EQUITIES</td>
            <td />
            <td />
          </tr>
          {asset.international.map(value => (
            <tr key={value.id}>
              <td key={value.label}> {value.label}</td>
              <td key={value.ticker}>{value.ticker}</td>
              <td key={value.weight}>
                <Progress value={value.weight * 100}>{convertToPercentage(value.weight,0)}</Progress>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AssetAllocation;
