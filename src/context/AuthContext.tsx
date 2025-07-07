import { api } from "@services/index";
import {
  getStorageUser,
  removeStorageUser,
  setStorageUser,
} from "@storage/storageUser";
import { getStorageToken, removeStorageToken, setStorageToken } from "@storage/storageToken";
import { UserDTO } from "@types";
import { createContext, ReactNode, useEffect, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  updateUserProfile: (userUpdated: UserDTO) => Promise<void>;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    id: "",
    avatar: "",
    email: "",
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const userAndTokenUpdate = async (userData: UserDTO, token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    setUser(userData);
  }


  const storageUserAndToken = async (userData: UserDTO, token: string, refresh_token: string) => {
    try {
      await setStorageUser(userData);
      await setStorageToken({ token, refresh_token});
    } catch (error) {
      throw error
    }finally {
      setIsLoading(false);
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token && data.refresh_token) {
        await storageUserAndToken(data.user, data.token,data.refresh_token);
        userAndTokenUpdate(data.user,data.token);
      }
    } catch (error) {
      throw error;
    }finally{
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      setUser({} as UserDTO)
      await removeStorageUser();
      await removeStorageToken();
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };


  const updateUserProfile = async (userUpdated: UserDTO) => {
    try {
      setUser(userUpdated)
    } catch (error) {
      throw error;
    }
  }

  const loadingUserData = async () => {
    setIsLoading(true);
    try {
      const userLogged = await getStorageUser();
      const {token} = await getStorageToken();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged,token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadingUserData();
  }, []);


  
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
