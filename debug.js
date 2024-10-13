import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DebugStateComponent = () => {
  const currentState = useSelector((state) => state);

  useEffect(() => {
    console.log(
      "Current Redux State:\n",
      JSON.stringify(currentState, null, 2)
    );
  }, [currentState]);

  return null; // You can replace this with actual UI
};

export default DebugStateComponent;
