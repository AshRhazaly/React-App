import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="headerContent">
      <section className="container">
        <section className="row">
          <div className="col">
            <p className="brandName">StashAway</p>
          </div>
          <div className="col">
            <span className="row float-right">
              <p className="px-4">Support</p>
              <p className="px-4">Log Out</p>
            </span>
          </div>
        </section>
      </section>
      <section className="headerOverview d-flex flex-column">
        <section className="align-items-end">
          <p className="previewText text-center">Preview your Portfolio</p>
          <p className="changeText text-center headerTitle">You can always change this later.</p>
        </section>
      </section>
    </header>
  );
};

export default Header;
