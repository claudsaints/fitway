import { View, Text } from "react-native";
import Button from "./Button";

// Adicionando prop themeColors para receber as cores do tema
export type IGroup = {
  name: string;
  isActive: boolean;
  onPress?: () => void;
  themeColors?: any;
};

export function Group({ name, isActive, onPress, themeColors }: IGroup) {
  return (
    <Button
      style={{
        backgroundColor: isActive ? (themeColors?.primary || "midnightblue") : (themeColors?.card || "midnightblue"),
        borderWidth: isActive ? 2 : 0,
        borderColor: themeColors?.buttonText || "white",
        marginRight: 8,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: themeColors?.buttonText || "#fff" }}>{name}</Text>
    </Button>
  );
}