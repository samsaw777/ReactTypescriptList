import React from "react";
// import Page from "./components/Page";
import "./App.css";

import PageTable from "./components/Pagetable";
import HeaderTab from "./components/Header";
function App() {
  return (
    <div>
      {/* <Page /> */}
      <div className='max-w'>
        <p className='font-bold text-center text-lg'>TypeScript List</p>
      </div>
      <PageTable />
    </div>
  );
}

export default App;
