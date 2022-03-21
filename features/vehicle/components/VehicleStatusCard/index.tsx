import React from "react";

const VehicleStatusCard = ({ data }) => {
  const { model, manufacturer } = data;

  if (!model) return <p>Ops, não foi possível carregar seu veículo</p>;

  return (
    <div>
      <h2>Vehicle</h2>
      <p>{model}</p>
      <p>{manufacturer}</p>
    </div>
  );
};

export default VehicleStatusCard;
