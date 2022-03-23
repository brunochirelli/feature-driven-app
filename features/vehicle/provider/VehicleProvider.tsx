import { createContext, useContext, useState, useEffect } from "react";
import { useApp } from "../../common/provider/AppProvider";
import { getVehicle } from "../service/vehicleApi";

interface VehicleContextProps {
  vehicle: any;
  error: boolean;
}

const VehicleContext = createContext<VehicleContextProps | null>(null);

const VehicleProvider = ({ children }) => {
  const { setLoading } = useApp();
  const [error, setError] = useState(null);
  const [vehicle, setVehicle] = useState({ manufacturer: "", model: "" });

  useEffect(() => {
    setLoading(true);

    (async () =>
      getVehicle(4)
        .then(setVehicle)
        .catch((err) => setError(err))
        .finally(() => setLoading(false)))();
  }, []);

  const data = { vehicle, error, getVehicle };

  return (
    <VehicleContext.Provider value={data}>{children}</VehicleContext.Provider>
  );
};

const useVehicle = () => {
  const context = useContext(VehicleContext);

  if (context === undefined) {
    throw new Error("useVehicle must be used within a VehicleProvider");
  }

  return context;
};

export { VehicleProvider, useVehicle };
