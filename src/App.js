import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen w-screen">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
