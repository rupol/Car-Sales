import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "../actions/feature";

const AdditionalFeature = props => {
  const buyItem = e => {
    // dipsatch an action here to add an item
    e.preventDefault();
    props.addFeature(e.target.value);
    console.log(e.target.value);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className="button" value={props.feature.id}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
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
)(AdditionalFeature);
