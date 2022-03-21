import React from "react";

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <p>Bem-vindo {name}!</p>;
};

export default Greeting;
