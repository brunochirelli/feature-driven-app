import React from "react";
import CnhStatusCard from "../features/cnh/components/CnhStatusCard";
import CrlvStatusCard from "../features/crlv/components/CrlvStatusCard";
import DebitsCard from "../features/debit/components/DebitsCard";
import VehicleStatusCard from "../features/vehicle/components/VehicleStatusCard";
import styles from "../styles/Home.module.css";

import { useCnh } from "../features/cnh/provider/CnhProvider";
import { useVehicle } from "../features/vehicle/provider/VehicleProvider";

export default function Home() {
  const { vehicle, loading } = useVehicle();

  return (
    <div className={styles.container}>
      {console.log(vehicle)}

      <VehicleStatusCard data={vehicle} loading={loading} />
      {/* <DebitsCard /> */}
      {/* <CnhStatusCard /> */}
      {/* <CrlvStatusCard /> */}
    </div>
  );
}
