import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { user } = useParams();
  return <h2>User Page for {user}</h2>;
};
export default User;
