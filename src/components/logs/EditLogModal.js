import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

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
    console.log("clicked");
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
      M.toast({ html: "Log added!", classes: "green" });
      // clear fields
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter a log entry</h4>
        <div className="input-field">
          <input
            type="text"
            name="message"
            value={message}
            onChange={onMessage}
          />
          <label htmlFor="message" className="active">
            Log message
          </label>
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
          <option value="Pech T">Pech T</option>
          <option value="Titty F">Titty F"</option>
          <option value="Morning B">Morning B</option>
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
  width: "75%",
  height: "75%",
};

export default EditLogModal;
