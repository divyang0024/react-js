import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const UserInfo = useParams();

  console.log("invoked");
  return <div>this is user detail.{UserInfo.id}</div>;
}

export default UserDetail;
