import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { deleteTech } from "../../actions/techAction";
import PropTypes from "prop-types";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteTech(tech.id);
    M.toast({ html: "Technician deleted!", classes: "red" });
  };

  return (
    <li className="collection-item">
      {tech.lastname}, {tech.firstname}
      <a href="#!" onClick={onDelete} className="secondary-content">
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

export default connect(null, { deleteTech })(TechItem);
