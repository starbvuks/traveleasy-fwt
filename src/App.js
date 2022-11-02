import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Account from "./components/Account";
import Services from "./components/Services";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Landing />
              <Contact />
            </div>
          }
        />
        <Route path="services" element={<Services />}></Route>
        <Route
          path="account"
          element={
            <div className="bg-slate-700 h-full">
              <Navbar />
              <div class="flex justify-center">
                <Account />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </HashRouter>
    // <div>
    //   <Navbar />
    //   <Landing />
    //   <Contact />
    // </div>
  );
}

export default App;
