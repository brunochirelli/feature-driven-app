import { createContext, useContext, useEffect, useState } from "react";
import { useApp } from "../../common/provider/AppProvider";
import { getDebit } from "../service/debitApi";

interface DebitContextProps {
  debit: any;
}

const DebitContext = createContext<DebitContextProps | null>(null);

const DebitProvider = ({ children }) => {
  const { setLoading } = useApp();
  const [debit, setDebit] = useState({});

  const data = { debit, getDebit };

  useEffect(() => {
    (async () =>
      getDebit(1)
        .then(setDebit)
        .finally(() => setLoading(false)))();
  }, []);

  return <DebitContext.Provider value={data}>{children}</DebitContext.Provider>;
};

const useDebit = () => {
  const context = useContext(DebitContext);

  if (context === undefined) {
    throw new Error("useDebit must be used within a DebitProvider");
  }

  return context;
};

export { DebitProvider, useDebit };
