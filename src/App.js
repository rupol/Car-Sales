import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/feature";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
}

const mapDispatchToProps = {
  addFeature,
  removeFeature
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
