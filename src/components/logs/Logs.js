import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  // since we make requests, we set if the request is still loading or not
  const [loading, setLoading] = useState(false);

  // this will load every time the page is loaded
  // empty brackets in the end makes it load just once
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // get all logs
  const getLogs = async () => {
    setLoading(true);
    // fetches data with fetchAPI
    const res = await fetch("/logs");
    // formats the data in the response to json
    const data = await res.json();

    // put the data inside the logs state
    setLogs(data);
    // loading back to false
    setLoading(false);
  };

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
        <p className="collection">Log array is empty.</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
