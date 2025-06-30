import {NavigationContainer, } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { MyThemeLight } from "theme";
import { StatusBar } from "expo-status-bar";


export function Routes() {
  return (
    <NavigationContainer theme={MyThemeLight as ReactNavigation.Theme}>
      <StatusBar style="light" />
      <AppRoutes />
    </NavigationContainer>
  );
}