import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Hello there!!!</p>
      <p>Welcome here</p>
      <Outlet />
      <footer>Copyright</footer>
    </div>
  );
};

export default Dashboard;
