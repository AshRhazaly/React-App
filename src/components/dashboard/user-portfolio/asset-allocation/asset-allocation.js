import React from "react";
import "./asset-allocation.scss";

const AssetAllocation = () => {
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
            <td></td>
            <td></td>
          </tr>
          <tr className="table-active">
            <td>INTERNATIONAL EQUITIES</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AssetAllocation;
