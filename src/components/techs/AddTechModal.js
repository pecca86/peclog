import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // when form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname);

    // present a toast if there is info missing
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please enter all information" });
    } else {
      M.toast({ html: "Log added!", classes: "green" });
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
  width: '40%',
}

export default AddTechModal;
