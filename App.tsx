import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { MaterialIcons } from "@expo/vector-icons";

import { Loading, Container } from "@components/index";
import Signin from "@screens/Signin";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
   <Signin/>
  );
}
