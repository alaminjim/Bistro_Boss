import { createContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useAuth = () => {
  const auth = createContext(AuthContext);
  return auth;
};

export default useAuth;
