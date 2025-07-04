import {NavigationContainer, } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { MyThemeLight } from "theme";
import { StatusBar } from "expo-status-bar";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
  return (
    <NavigationContainer theme={MyThemeLight as ReactNavigation.Theme}>
      <StatusBar style="light" />
      <AuthRoutes />
    </NavigationContainer>
  );
}