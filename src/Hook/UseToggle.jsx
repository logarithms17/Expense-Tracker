import { useState, useEffect } from "react";

const UseToggle = (initialState = false) => {

  const [showModal, setShowModal] = useState(initialState);

    const toggleModal = () => setShowModal((prev) => !prev);
    
  return {
    showModal,
    toggleModal,
  };
};

export default UseToggle;
