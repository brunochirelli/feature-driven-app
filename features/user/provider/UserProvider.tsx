import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useApp } from "../../common/provider/AppProvider";
import { getUser } from "../service/userApi";

interface UserContextProps {
  user: any;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }) => {
  const { setLoading } = useApp();

  const [user, setUser] = useState({ name: "", planet: "" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    (async () =>
      getUser(1)
        .then(setUser)
        .finally(() => setLoading(false)))();
  }, []);

  const data = { user, getUser, count, setCount };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
