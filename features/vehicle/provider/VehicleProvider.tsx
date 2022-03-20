import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { getVehicle } from "../service/vehicleApi";

interface VehicleContextProps {
  vehicle: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: boolean;
}

const VehicleContext = createContext<VehicleContextProps | null>(null);

const VehicleProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState({ manufacturer: "", model: "" });

  useEffect(() => {
    (async () =>
      getVehicle(4)
        .then(setVehicle)
        .catch((err) => setError(err))
        .finally(() => setLoading(false)))();
  }, []);

  const data = { vehicle, loading, setLoading, error };

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
