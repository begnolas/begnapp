import React, { createContext, useContext, useState } from "react";

import { isLogged, profileData } from "./loginUtils";



const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("useAppContext must be used in AppContextProvider");
  }

  return context;
};


function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged());
  const [profileObj, setProfileObj] = useState(profileData());


  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileObj, setProfileObj }} >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
