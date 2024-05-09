import React from "react";
import { Outlet, Link } from "react-router-dom";

function Upper() {
  return (
    <div>
      All available upper.
      <Link to="shirts">Shirts</Link>
      <Outlet />
    </div>
  );
}

export default Upper;
