import React from "react";
// REDUX STUFF:
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import PropTypes from "prop-types";

const TechSelectItem = ({ tech }) => {
  const { techs } = tech;
  return techs.map((techItem) => (
    <option value={techItem.lastname}>
      {techItem.firstname} {techItem.lastname}
    </option>
  ));
};

TechSelectItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps)(TechSelectItem);
