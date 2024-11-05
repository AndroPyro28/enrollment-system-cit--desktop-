import React, { useEffect, useState } from "react";
import CreateYearLevelModal from "../modals/CreateYearLevelModal";
import CreateSectionModal from "../modals/CreateSectionModal";
import CreateTeacherModal from "../modals/CreateTeacherModal";

const ModalProvider = () => {
  return (
    <>
       <CreateYearLevelModal />
       <CreateSectionModal />
       <CreateTeacherModal />
    </>
  );
};

export default ModalProvider;
