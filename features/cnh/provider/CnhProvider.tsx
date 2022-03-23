import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useApp } from "../../common/provider/AppProvider";

interface CnhContextProps {
  vehicle: any;
}

const CnhContext = createContext<CnhContextProps | null>(null);

const CnhProvider = ({ children }) => {
  const { setLoading } = useApp();
  const [vehicle, setVehicle] = useState({ manufacturer: "", model: "" });

  const getVehicle = () => {
    setLoading(true);

    fetch("https://swapi.dev/api/vehicles/4/")
      .then((data) => data.json())
      .then(setVehicle)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const data = { vehicle };

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
