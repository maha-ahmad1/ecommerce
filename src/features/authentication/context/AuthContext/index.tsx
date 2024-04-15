import { createContext, useState, ReactNode } from "react";

interface AuthContextInterface {
  token: string | null;
  userData: any;
  isLoggedIn: boolean;
  login: (token: string) => void;
  user: (userData: any) => void;
}

const AuthContext = createContext<AuthContextInterface>({
  token: null,
  userData: null,
  isLoggedIn: false,
  login: (token: string) => {},
  user: (userData: any) => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("userData") || "{}");

  const [token, setToken] = useState<string | null>(storedToken);
  const [userData, setUserData] = useState<any>(storedUser);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const userHandler = (userData: any) => {
    setUserData(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const contextValue: AuthContextInterface = {
    userData: userData,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    user: userHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
