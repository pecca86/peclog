import React, { useEffect } from "react";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { getLogs } from "../../actions/logActions";

const Logs = ({ log, getLogs }) => {
  const { loading, logs } = log;
  // this will load every time the page is loaded
  // empty brackets in the end makes it load just once
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // check if page is loading and show our preloader component if so
  if (loading) {
    <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="collection-item">Log array is empty.</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// for brining in app level state to this component as a prop
const mapStateToProps = (state) => ({
  //propname: reducerStateName
  log: state.log,
});

// in order to connect the component with redux
// all functions etc. that are not mapped comes from props
export default connect(mapStateToProps, { getLogs })(Logs);
