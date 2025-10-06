import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false); // for ticket modal
  const [loginOpen, setLoginOpen] = useState(false); // for login modal

  return (
    <ModalContext.Provider value={{ open, setOpen, loginOpen, setLoginOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
