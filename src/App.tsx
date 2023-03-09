import React, { useState } from "react";
import BasicTaskList from "./components/BasicTaskList";
import AggridList from "./components/AggridList";
import { Loguin } from "./components/Loguin";

function App() {
  return (
    <div className="App">
      {/*<BasicTaskList />*/}
      <Loguin />
    </div>
  );
}

export default App;
