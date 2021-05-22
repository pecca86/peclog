import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  // since we make requests, we set if the request is still loading or not
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal" style={techModal}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>All technicians</h4>
        </li>

        {!loading && techs.length === 0 ? (
          <p className="collection">No technicians at the moment.</p>
        ) : (
          techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
        )}
      </ul>
    </div>
  );
};

const techModal = {
    width: '40%',
}

export default TechListModal;
