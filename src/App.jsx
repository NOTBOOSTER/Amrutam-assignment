import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./routing";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-7 w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Breadcrumb />
        <Routing>App</Routing>
        </div>
      </div>
    </div>
  );
};

export default App;
