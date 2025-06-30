import { View, Text, useWindowDimensions } from "react-native";
import { UserPhoto } from "@components/UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { ScreenHeader } from "./ScreenHeader";

export function HomeHeader() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const theme = useTheme();
  return (
    <ScreenHeader>
      <View
        style={{
          marginTop: 20,
          alignContent: "space-between",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View>
          <UserPhoto radius={30} size={60} />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              color: theme.colors.text,
            }}
          >
            Olá,
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center", color: "#fff" }}>
            Claud
          </Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <MaterialIcons name="logout" color={"#fff"} size={30} />
        </View>
      </View>
    </ScreenHeader>
  );
}
