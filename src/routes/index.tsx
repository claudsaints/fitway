import {NavigationContainer, } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { MyThemeLight } from "theme";


export function Routes() {
  return (
    <NavigationContainer theme={MyThemeLight}>
      <AppRoutes />
    </NavigationContainer>
  );
}