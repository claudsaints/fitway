import Container from "@components/Container";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";

export function Home() {
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
            />
          )}
          style={{ marginTop: 12, padding: 4, backgroundColor: "red", gap: 2 }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </Container>
    </>
  );
}