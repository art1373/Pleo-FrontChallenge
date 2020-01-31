import React, { useReducer, createContext } from "react";

const ModalContext = createContext();
const ModalDispatch = createContext();

function ModalReducer(state, action) {
  switch (action.type) {
    case "ShowModal":
      return { ...state, modalVisible: true, id: action.payload };
    case "HideModal":
      return { ...state, modalVisible: false, id: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(ModalReducer, {
    modalVisible: false,
    id: ""
  });
  return (
    <ModalContext.Provider value={state}>
      <ModalDispatch.Provider value={dispatch}>
        {children}
      </ModalDispatch.Provider>
    </ModalContext.Provider>
  );
}
function useModalState() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a ModalProvider");
  }
  return context;
}

function useModalDisptach() {
  const context = React.useContext(ModalDispatch);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModalState, useModalDisptach };
