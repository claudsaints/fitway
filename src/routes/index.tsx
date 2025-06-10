import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

const theme = DefaultTheme;

theme.colors.background = "white"; 

export function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}