import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      {tech.lastname}, {tech.firstname}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete_forever</i>
      </a>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">edit</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
  };

export default TechItem;
