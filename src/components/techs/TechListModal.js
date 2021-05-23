import React, { useEffect } from "react";
import TechItem from "./TechItem";
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { getTechs } from "../../actions/techAction";
import PropTypes from "prop-types";


const TechListModal = ({getTechs, tech}) => {
  const { techs, loading } = tech

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);


  return (
    <div id="tech-list-modal" className="modal" style={techModal}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>All technicians</h4>
        </li>

        {!loading && techs.length === 0 ? (
          <p className="collection-item">No technicians at the moment.</p>
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

TechListModal.propTypes = {
  getTechs: PropTypes.func,
  tech: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
