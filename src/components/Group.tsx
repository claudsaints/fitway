import { View, Text } from "react-native";
import Button from "./Button";

type IGroup = {
  name: string;
  isActive: boolean;
  onPress?: () => void;
};

export function Group({ name, isActive, onPress }: IGroup) {
  return (
    <Button
      style={{
        backgroundColor: "midnightblue",
        borderWidth: isActive ? 2 : 0,
        borderColor: "black",
        marginRight: 8,
        width: 100, 
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff" }}>{name}</Text>
    </Button>
  );
}