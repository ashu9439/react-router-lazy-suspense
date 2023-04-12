import React from "react";
import { Link, Outlet } from "react-router-dom";
const Users = () => {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Users;
