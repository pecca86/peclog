import React, { useState, useEffect } from "react";
// REDUX STUFF:
// for connecting component to redux
import { connect } from "react-redux";
// import the reducer action so we can call it from this component
import { searchLog } from "../../actions/logActions";
import PropTypes from "prop-types";

const SearchBar = ({searchLog, log}) => {

  const [searchTerm, setSearchTerm ] = useState("")


  const onSearch = (e) => {
    setSearchTerm(e.target.value)
    searchLog(searchTerm)
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input onChange={onSearch} value={searchTerm} id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLog: PropTypes.func,
};

export default connect(null, { searchLog })(SearchBar);
