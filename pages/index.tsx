import React from "react";
import CnhStatusCard from "../features/cnh/components/CnhStatusCard";
import CrlvStatusCard from "../features/crlv/components/CrlvStatusCard";
import DebitsCard from "../features/debit/components/DebitsCard";
import VehicleStatusCard from "../features/vehicle/components/VehicleStatusCard";
import styles from "../styles/Home.module.css";

import { useCnh } from "../features/cnh/provider/CnhProvider";
import { useVehicle } from "../features/vehicle/provider/VehicleProvider";
import { useUser } from "../features/user/provider/UserProvider";
import Greeting from "../features/user/components/Greeting";
import { useDebit } from "../features/debit/provider/DebitProvider";
import { useApp } from "../features/common/provider/AppProvider";

export default function Home() {
  const { loading } = useApp();
  const { vehicle } = useVehicle();
  const { user } = useUser();
  const { debit } = useDebit();

  if (loading) return <div>Carregando...</div>;

  return (
    <div className={styles.container}>
      <Greeting name={user.name} />
      <VehicleStatusCard data={vehicle} />
      <DebitsCard data={debit} />
      {/* <CnhStatusCard /> */}
      {/* <CrlvStatusCard /> */}
    </div>
  );
}
