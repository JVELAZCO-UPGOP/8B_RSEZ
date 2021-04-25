import React from "react";
import "./Search.css";

function Search (props){
    return(
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
}

export default Search;