import { useSelector } from "react-redux";
import React from "react";
import Temperature from "./Temperature";

const Convert = () => {
  const convertState = useSelector((state) => state.convert);

  return (
    <div>
      <h2>Conversion</h2>
      <h3>Température</h3>
      <Temperature convertState={convertState} />
    </div>
  );
};

export default Convert;
