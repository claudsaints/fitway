import Container from "@components/Container";
import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { styles } from "@styles/index";
import { useState } from "react";
import { View, FlatList, useWindowDimensions, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export function Home() {
  const { colors } = useTheme();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [group, setGroup] = useState<string[]>([
    "costas",
    "ombro",
    "perna",
    "cabeça"
  ]);

  const { width } = useWindowDimensions();

  return (
    <>
      <HomeHeader />
      <Container>
        <FlatList
          horizontal
          data={group}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={activeGroup === item}
              onPress={() => setActiveGroup(item)}
              themeColors={colors}
            />
          )}
          style={{ marginTop: 12, padding: 4, gap: 2, minHeight: 80, maxHeight: 80 }}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        />
        <View style={{height: 80, flexDirection: "row", paddingHorizontal: 22, backgroundColor: colors.background, justifyContent: "space-between", alignItems: "center", width: width}}>
          <Text style={{ color: colors.text }}>Exercícios</Text>
          <Text style={{ color: colors.text }}>3</Text>
        </View>
        <View style={{flex: 1}}>
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </View>
      </Container>
    </>
  );
}