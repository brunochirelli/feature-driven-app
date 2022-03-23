import React from "react";
import { useUser } from "../../provider/UserProvider";

const AddButton = () => {
  const { setCount } = useUser();
  return <button onClick={() => setCount((count) => count + 1)}>add</button>;
};

export default AddButton;
