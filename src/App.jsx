import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./routing";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routing>App</Routing>
      </div>
    </div>
  );
};

export default App;
