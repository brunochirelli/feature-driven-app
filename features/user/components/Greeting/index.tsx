import React from "react";

type GreetingProps = {
  name: string;
  loading: boolean;
};

const Greeting = ({ name, loading }: GreetingProps) => {
  if (loading) return null;

  return <p>Bem-vindo {name}!</p>;
};

export default Greeting;
