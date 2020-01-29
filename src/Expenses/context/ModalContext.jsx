import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{showModal,setShowModal}}>
      {props.children}
    </ModalContext.Provider>
  );
};
