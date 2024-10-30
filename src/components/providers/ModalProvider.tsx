import React, { useEffect, useState } from "react";
import CreateYearLevelModal from "../modals/CreateYearLevelModal";
import CreateSectionModal from "../modals/CreateSection";

const ModalProvider = () => {
  return (
    <>
       <CreateYearLevelModal />
       <CreateSectionModal />
    </>
  );
};

export default ModalProvider;
