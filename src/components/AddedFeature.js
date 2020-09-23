import React from "react";
import { connect } from "react-redux";
import { removeFeature, updatePrice } from "../actions/feature";

const AddedFeature = props => {
  // const removeFeature = e => {
  //   // dispatch an action here to remove an item
  //   e.preventDefault();
  //   props.removeFeature(e.target.value);
  //   console.log(props.car.features);
  // };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature.id);
          props.updatePrice();
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
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
  removeFeature,
  updatePrice
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddedFeature);
