import { ThemeProvider } from "@react-navigation/native";
import { api } from "@services/index";
import { getStorageUser, removeStorageUser, setStorageUser} from "@storage/storageUser";
import { UserDTO } from "@types";
import { createContext, ReactNode,  use,  useEffect,  useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
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

  const signIn = async (email: string, password: string) => {
          console.log(`Chegou no signContext`);
    try{

      const {data} = await api.post("/sessions",{email,password});
      
      console.log(`DATA : ${data}`);

      if(data.user && data.token){
        setUser(data.user);
        setStorageUser(data.user);
      }

    }catch(error) {
      throw error;
    }
  }

  const signOut = async () => {
    setIsLoading(true);
    try {
      await removeStorageUser();
    } catch (error) {
      throw error;
    }finally {
      
      setIsLoading(false);
    }
  }


  const loadingUserData = async () => {
    setIsLoading(true);
    try {
      const userLogged = await getStorageUser();

      if(userLogged){
        setUser(userLogged);
      }
      
    } catch (error) {
      console.log(error);

    
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadingUserData();
  },[])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
