import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
// REDUX STUFF:
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { deleteLog, setCurrent } from "../../actions/logActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  // action when delete button is clicked
  const onDelete = (e) => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted!", classes: "red" });
  };

  // fills the current log info to the current state
  const onCurrent = (e) => {
    setCurrent(log);
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={onCurrent}
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id} </span>
          last updated by:
          <span className="black-text"> {log.tech} </span>
          on <Moment format="DD.MM.YYYY, hh:mm:ss">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete_forever</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
