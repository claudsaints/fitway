import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

const theme = DefaultTheme;

theme.colors.background = "white"; 

export function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}