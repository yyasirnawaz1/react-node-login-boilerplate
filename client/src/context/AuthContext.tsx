import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types/user";
import * as storage from "../utils/storage";

interface AccountContextInterface {
  user?: User;
  token?: string;
  setUser: (user: User | undefined) => void;
  setToken: (token: string | undefined) => void;
}

const DefaultProps = {
  user: (): User | undefined => {
    const value = storage?.get("user");
    return value ? (JSON.parse(value) as User) : undefined;
  },
  token: (): string | undefined => {
    const value = storage?.get("token");
    return value ? (value as string) : undefined;
  },
};

export const AuthContext = createContext<AccountContextInterface>({
  user: undefined,
  token: undefined,
  setUser: () => undefined,
  setToken: () => undefined,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(DefaultProps.user);
  const [token, setToken] = useState<string | undefined>(DefaultProps.token);

  return <AuthContext.Provider value={{ user, setUser, token, setToken }}>{children}</AuthContext.Provider>;
};

export const useAccount = () => useContext(AuthContext);
