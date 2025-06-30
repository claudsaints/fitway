import Container from "@components/Container/Container";
import { ExerciseCard } from "@components/Cards/ExerciseCard";
import { Group } from "@components/Cards/Group";
import { HomeHeader } from "@components/Headers/HomeHeader";
import { styles } from "@styles/index";
import { useState } from "react";
import { View, FlatList, useWindowDimensions, Text } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AppNavigationRoutes, AppNestedRoutes } from "@routes/app.routes";

export function Home() {
  const { colors } = useTheme();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [exercicios, setExercicios] = useState([
    {
      name: "flexão",
      description: "exercicio calistenico",
    },
    {
      name: "remada",
      description: "exercicio calistenico",
    },
    {
      name: "flexãos",
      description: "exercicio calistenico",
    },
    {
      name: "flexãoss",
      description: "exercicio calistenico",
    },
    {
      name: "flexsãos",
      description: "exercicio calistenico",
    },
  ]);

  const [group, setGroup] = useState<string[]>([
    "costas",
    "ombro",
    "perna",
    "cabeça",
  ]);

  const { width } = useWindowDimensions();

  const navigation = useNavigation<AppNestedRoutes>();

  const handlerExerciseDetails = () => {
    navigation.navigate("exercise");
  };

  return (
    <>
      <HomeHeader />
      <Container>
        <FlatList
          horizontal
          data={group}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <Group
              name={item}
              key={index}
              isActive={activeGroup === item}
              onPress={() => setActiveGroup(item)}
              themeColors={colors}
            />
          )}
          style={{
            marginTop: 12,
            padding: 4,
            gap: 2,
            minHeight: 80,
            maxHeight: 80,
          }}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        />
        <View
          style={{
            height: 80,
            flexDirection: "row",
            paddingHorizontal: 22,
            backgroundColor: colors.background,
            justifyContent: "space-between",
            alignItems: "center",
            width: width,
          }}
        >
          <Text style={{ color: "black", fontWeight: "500" }}>Exercícios</Text>
          <Text style={{ color: "black", fontWeight: "500" }}>
            {exercicios.length}
          </Text>
        </View>
        <FlatList
          data={exercicios}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item, index }) => (
            <ExerciseCard
              onPress={handlerExerciseDetails}
              key={index}
              nome={item.name}
              descricao={item.description}
            />
          )}
        />
      </Container>
    </>
  );
}
