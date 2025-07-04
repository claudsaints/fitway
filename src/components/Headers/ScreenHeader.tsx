import { ThemeContext, useTheme } from "@react-navigation/native";
import { Children } from "react";
import { useWindowDimensions, View, Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

export function ScreenHeader({ children }: Props) {
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  return (
    <View
      style={{
        padding: 30,
        margin: 0,
        position: "relative",
        width: width,
        height: 142,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: theme.colors.primary,
        borderBottomWidth: 1,
        borderColor: "#e0e0e0",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
    >
      {children}
    </View>
  );
}
