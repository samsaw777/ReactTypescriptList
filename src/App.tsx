import React, { useEffect, useState } from "react";
// import Page from "./components/Page";
import "./App.css";

import PageTable from "./components/Pagetable";
import HeaderTab from "./components/Header";
function App() {
  return (
    <div>
      {/* <Page /> */}
      <HeaderTab />
      <PageTable />
    </div>
  );
}

export default App;
