import React, { useState, createContext, useContext, useEffect } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isLoginModalOpen, toggleLoginModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
