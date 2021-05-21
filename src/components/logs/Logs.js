import React, { useState, useEffect } from "react";

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

  // check if page is loading
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4>System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Log array is empty.</p>
      ) : (
        logs.map((log) => <li>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
