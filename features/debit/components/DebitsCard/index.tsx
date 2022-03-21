import React from "react";

const DebitsCard = ({ data, loading }) => {
  const { name, terrain } = data;

  if (loading) return null;

  return (
    <div>
      <h2>Debits</h2>
      <p>{name}</p>
      <p>{terrain}</p>
    </div>
  );
};

export default DebitsCard;
