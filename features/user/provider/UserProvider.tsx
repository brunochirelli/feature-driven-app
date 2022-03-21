import { createContext, useContext, useEffect, useState } from "react";
import { useApp } from "../../common/provider/AppProvider";
import { getUser } from "../service/userApi";

interface UserContextProps {
  user: any;
}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }) => {
  const { setLoading } = useApp();

  const [user, setUser] = useState({ name: "", planet: "" });

  useEffect(() => {
    setLoading(true);

    (async () =>
      getUser(1)
        .then(setUser)
        .finally(() => setLoading(false)))();
  }, []);

  const data = { user, getUser };

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
