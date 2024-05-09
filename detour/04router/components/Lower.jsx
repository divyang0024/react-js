import React from "react";
import { Outlet, Link } from "react-router-dom";

function Lower() {
  return (
    <div>
      All available lower.
      <Link to="jeans">Jeans</Link>
      <Outlet />
    </div>
  );
}

export default Lower;
