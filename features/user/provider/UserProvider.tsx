import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../service/userApi";

interface UserContextProps {}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", planet: "" });

  useEffect(() => {
    async () => getUser(1).then(setUser);
  }, []);

  const data = { user, getUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
const useUser = () => {
  const context = useContext(UserContext);
};

export { UserProvider, useUser };
