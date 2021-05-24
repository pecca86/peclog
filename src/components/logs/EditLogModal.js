import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { updateLog } from "../../actions/logActions";
// Own components
import TechSelectItem from '../techs/TechSelectItem'


const EditLogModal = ({ log, updateLog }) => {
  const { current } = log;

  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setMessage(current.message);
      setTech(current.tech);
    }
    // [current] means the useEffect gets triggered on each change to current
  }, [current]);

  // sets the message for our message field
  const onMessage = (e) => {
    setMessage(e.target.value);
  };

  // When tech value is changed
  const onTech = (e) => {
    setTech(e.target.value);
  };

  // attention is changed in form
  const onAttention = (e) => {
    setAttention(!attention);
  };

  // when form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message, tech, attention);

    // present a toast if there is info missing
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter all information" });
    } else {
      const formData = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(formData);

      M.toast({ html: "Log updated!", classes: "green" });
      // clear fields
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Update log entry</h4>
        <div className="input-field">
          <input
            type="text"
            name="message"
            value={message}
            onChange={onMessage}
          />
          {!message && (
            <label htmlFor="message" className="active">
              Log message
            </label>
          )}
        </div>
      </div>
      <div className="row modal-content">
        <select
          name="tech"
          value={tech}
          onChange={onTech}
          className="browser-default"
        >
          <option value="" disabled>
            Select Tech
          </option>
            <TechSelectItem />
        </select>
      </div>
      <div className="modal-content">
        <div className="input-field">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              checked={attention}
              value={attention}
              onChange={onAttention}
            />
            <span>Urgent matter</span>
          </label>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

// Values for our inline style
const modalStyle = {
  width: "50%",
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  log: PropTypes.object,
};

// for brining in app level state to this component as a prop
const mapStateToProps = (state) => ({
  //propname: reducerStateName
  log: state.log,
});

// in order to connect the component with redux
// all functions etc. that are not mapped comes from props
export default connect(mapStateToProps, { updateLog })(EditLogModal);
