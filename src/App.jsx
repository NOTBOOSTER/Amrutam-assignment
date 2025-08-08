import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./routing";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 gap-7 w-full overflow-hidden">
        <div className="flex-shrink-0 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex-shrink-0">
            <Breadcrumb />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Routing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;