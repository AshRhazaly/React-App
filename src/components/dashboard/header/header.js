import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="headerContent">
      <section className="container">
        <section className="row">
          <div className="col pt-1">
            <div className="row">
              <img
                className="stashaway-logo"
                src={require("../../../assets/images/stashaway-logo-transparent.png")}
              />
              <p className="brand-name pt-1">StashAway</p>
            </div>
          </div>
          <div className="col pt-2">
            <span className="row float-right logout-container">
              <p className="px-4">Support</p>
              <p className="px-4">Log Out</p>
            </span>
          </div>
        </section>
      </section>
      <section className="headerOverview d-flex flex-column">
        <section className="align-items-end">
          <p className="previewText text-center">Preview your Portfolio</p>
          <p className="changeText text-center headerTitle">
            You can always change this later.
          </p>
        </section>
      </section>
    </header>
  );
};

export default Header;
