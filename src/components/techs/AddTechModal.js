import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// REDUX STUFF:
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { addTech } from "../../actions/techAction";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // when form is submitted
  const onSubmit = (e) => {
    e.preventDefault();

    // present a toast if there is info missing
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please enter all information" });
    } else {
      const formData = {
        firstname,
        lastname,
      };
      addTech(formData);

      M.toast({ html: "Technician added!", classes: "green" });
      
      // clear fields
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal" style={techModal}>
      <div className="modal-content">
        <h4>Add a new Technician</h4>
        <div className="input-field">
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="firstname" className="active">
            First name
          </label>
        </div>

        <div className="input-field">
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="lastname" className="active">
            Last name
          </label>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green green btn-flat"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const techModal = {
  width: "40%",
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
