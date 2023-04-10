import React from "react";
import {Link} from "react-router-dom";
function Timeline() {
  return (
    <div>
      Timeline
      <Link to="home" className="btn btn-danger py-3">
        Home
      </Link>
    </div>
  );
}

export default Timeline;
