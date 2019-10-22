import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/feature";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature();
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature();
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
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
