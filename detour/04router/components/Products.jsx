import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>this is products page.</h1>
      <Link to="upper">Upper</Link>
      <Link to="lower">lower</Link>
      <Outlet />
    </div>
  );
}

export default Products;
