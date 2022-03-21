import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AppContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | null>(null);

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const data = { loading, setLoading };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
};

export { AppProvider, useApp };
