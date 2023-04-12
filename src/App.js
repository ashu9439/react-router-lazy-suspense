import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const About = React.lazy(() => import("./about"));
const Users = React.lazy(() => import("./users"));
const User = React.lazy(() => import("./user"));

const App = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          width: "20%"
        }}
      >
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route
              path=":user"
              element={
                <React.Suspense fallback={<h1>Loading User Route</h1>}>
                  <User />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
