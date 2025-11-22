"use client";

import React, { createContext, useState, useContext } from "react";
import Header from "./_components/Header";
import logo from "../../public/logo.svg";

// ---- keep context inside this file, DO NOT export it ----
const WebCamContext = createContext(null);

// custom hook (allowed)
export function useWebCam() {
  return useContext(WebCamContext);
}

export default function DashboardLayout({ children }) {
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  return (
    <div>
      <Header logo={logo} />
      <div className="mx-5 md:mx-20 lg:mx-36">
        <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
          {children}
        </WebCamContext.Provider>
      </div>
    </div>
  );
}
