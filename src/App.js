import React from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar for filters */}
        <Filter />
        {/* Main content for results */}
        <Results />
      </div>
  );
}

export default App;
