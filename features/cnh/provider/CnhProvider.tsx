import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface CnhContextProps {
  vehicle: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const CnhContext = createContext<CnhContextProps | null>(null);

const CnhProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState({ manufacturer: "", model: "" });

  const getVehicle = () => {
    fetch("https://swapi.dev/api/vehicles/4/")
      .then((data) => data.json())
      .then(setVehicle)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const data = { vehicle, loading, setLoading };

  return <CnhContext.Provider value={data}>{children}</CnhContext.Provider>;
};

const useCnh = () => {
  const context = useContext(CnhContext);

  if (context === undefined) {
    throw new Error("useCnh must be used within a CnhProvider");
  }

  return context;
};

export { CnhProvider, useCnh };
