import React from "react";

const DebitsCard = ({ data }) => {
  const { name, terrain } = data;

  return (
    <div>
      <h2>Debits</h2>
      <p>{name}</p>
      <p>{terrain}</p>
    </div>
  );
};

export default DebitsCard;
