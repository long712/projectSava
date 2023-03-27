import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTERS } from ".";
import './style.css'

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        {ROUTERS.map((item) => (
          <Route key={item.id} path={item.navigate} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default RootRouter;
