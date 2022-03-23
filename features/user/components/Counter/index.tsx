import React from "react";
import { useUser } from "../../provider/UserProvider";

const Counter = () => {
  const { count } = useUser();

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
