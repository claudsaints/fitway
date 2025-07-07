import Container from "@components/Container/Container";
import { ExerciseCard } from "@components/Cards/ExerciseCard";
import { Group } from "@components/Cards/Group";
import { HomeHeader } from "@components/Headers/HomeHeader";
import { useCallback, useEffect, useState } from "react";
import { View, FlatList, useWindowDimensions, Text, Alert } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AppNestedRoutes } from "@routes/app.routes";
import { api } from "@services/index";
import { AppError } from "@utils/AppError";
import { ExerciseDTO } from "@types";

export function Home() {
  const { colors } = useTheme();
  const [activeGroup, setActiveGroup] = useState<string | null>('antebraço');
  const [exercicios, setExercicios] = useState<ExerciseDTO[]>([]);

  const [group, setGroup] = useState<string[]>([]);

  const { width } = useWindowDimensions();

  const navigation = useNavigation<AppNestedRoutes>();

  const handlerExerciseDetails = (exerciseId: string) => {
    navigation.navigate("exercise", { exerciseId });
  };

  const fetchGroups = async () => {
    try {
      const res = await api.get("/groups");

      setGroup(res.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os grupos, tente novamente mais tarde";

      Alert.alert("Erro", title);
    }
  };

  const fetchExerciseByGroup = async () => {
    try {
      const res = await api.get(`/exercises/bygroup/${activeGroup}`);
      setExercicios(res.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os grupos, tente novamente mais tarde";

      Alert.alert("Erro", title);
    } finally {
    }
  };


  useEffect(() => {
    fetchGroups();
  }, [])



  useEffect(() => {

      fetchExerciseByGroup()
   
  },[activeGroup])

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
              onPress={() => handlerExerciseDetails(item.id)}
              key={index}
              item={item}
            />
          )}
        />
      </Container>
    </>
  );
}
