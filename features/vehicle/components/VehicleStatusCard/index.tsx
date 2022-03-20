import React from "react";

const VehicleStatusCard = ({ data, loading }) => {
  const { model, manufacturer } = data;

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <div>
        <p>{model}</p>
        <p>{manufacturer}</p>
      </div>
    </div>
  );
};

export default VehicleStatusCard;
