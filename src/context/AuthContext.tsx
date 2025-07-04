import { UserDTO } from "@types";
import { createContext, ReactNode, use, useState } from "react";

export type AuthContextDataProps ={
    user: UserDTO;
    setUser: (value: UserDTO) => void
   
}

export const AuthContext = createContext<AuthContextDataProps >( {} as AuthContextDataProps);

type AuthContextProviderProps = {
    children: ReactNode
}

export function AuthContextProvider({children}:AuthContextProviderProps){

        const [user,setUser] = useState<UserDTO>({

                 id: "",
                 avatar: "",
                 email: "",
                 name: ""
            
        });

    return (
        <AuthContext.Provider value={{user, setUser}} >
            {children}
        </AuthContext.Provider>
    )
}