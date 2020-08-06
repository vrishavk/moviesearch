import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form action="" onSubmit={props.handelSubmit}>
      <div className="search">
        <input type="text" placeholder="search" onChange={props.handelChange} />
      </div>
    </form>
  );
};

export default Search;
