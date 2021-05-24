import React, { useState, useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import {
  deleteTech,
  setCurrent,
  clearCurrent,
  updateTech,
  getTechs,
} from "../../actions/techAction";
import PropTypes from "prop-types";

const TechItem = ({
  tech,
  deleteTech,
  setCurrent,
  stateTech,
  clearCurrent,
  updateTech,
}) => {
  // current from state
  const { current } = stateTech;

  // component states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // componenet effects
  useEffect(() => {
    if (current) {
      setFirstname(current.firstname);
      setLastname(current.lastname);
    } else {
      setFirstname(tech.firstname);
      setLastname(tech.lastname);
    }
  }, [current, stateTech]);

  // component functions
  // Delete selected tech
  const onDelete = (e) => {
    e.preventDefault();
    deleteTech(tech.id);
    M.toast({ html: "Technician deleted!", classes: "red" });
  };

  // place the tech into tech.current state
  const onCurrent = (e) => {
    setCurrent(tech);
  };

  const onNameChange = (e) => {
    const fullname = e.target.value;
    // since we input the name as a single string
    const nameTable = fullname.split(" ");
    const first = nameTable[0];
    const last = nameTable.splice(1, nameTable.length).join(" ");
    setFirstname(first);
    setLastname(last);
  };

  const onUpdate = (e) => {
    const formData = {
      id: current.id,
      firstname,
      lastname,
    };
    updateTech(formData);
    clearCurrent();
  };

  return (
    <Fragment>
      <input
        type="text"
        value={current && (current.id === tech.id) ? `${firstname} ${lastname}` : `${tech.firstname} ${tech.lastname}`}
        onChange={onNameChange}
        disabled={current && (current.id === tech.id ) ? false : true}
        className="collection-item"
      />
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons grey-text secondary-content">
          delete_forever
        </i>
      </a>
      {current && (current.id === tech.id ) ? (
        <a href="#!" onClick={onUpdate} className="secondary-content">
          <i className="material-icons grey-text">done</i>
        </a>
      ) : (
        <a href="#!" onClick={onCurrent} className="secondary-content">
          <i className="material-icons grey-text">edit</i>
        </a>
      )}
    </Fragment>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  stateTech: PropTypes.object.isRequired,
  updateTech: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
};

// for brining in app level state to this component as a prop
const mapStateToProps = (state) => ({
  //propname: reducerStateName
  stateTech: state.tech,
});

export default connect(mapStateToProps, {
  deleteTech,
  setCurrent,
  clearCurrent,
  updateTech,
  getTechs,
})(TechItem);
