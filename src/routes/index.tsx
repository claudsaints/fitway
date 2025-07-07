import {NavigationContainer, } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { MyThemeLight } from "theme";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/index";


export function Routes() {
  const {user,isLoading} = useAuth();

  if(isLoading){
    return <Loading/>
  }
  return (
    <NavigationContainer theme={MyThemeLight as ReactNavigation.Theme}>
      <StatusBar style="light" />
      {user && user.id ?<AppRoutes/> :<AuthRoutes />}
    </NavigationContainer>
  );
}