import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface VehicleContextProps {
  vehicle: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const VehicleContext = createContext<VehicleContextProps | null>(null);

const VehicleProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState({ manufacturer: "", model: "" });

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/4/")
      .then((data) => data.json())
      .then(setVehicle)
      .finally(() => setLoading(false));
  }, []);

  const data = { vehicle, loading, setLoading };

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
