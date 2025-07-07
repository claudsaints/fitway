import Container from "@components/Container/Container";
import { HistoryCard } from "@components/Cards/HistoryCard";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SectionList,
  useWindowDimensions,
  Alert,
} from "react-native";
import { HistoryByDayDTO } from "@types";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { api } from "@services/index";
import { AppError } from "@utils/AppError";
import { styles } from "@styles/index";

type RouteParamsProps = {
  createWeekExercisesAmount?: boolean;
};

export function History() {
  const { width } = useWindowDimensions();
  const [exercicios, setExercicios] = useState<HistoryByDayDTO[]>([]);
  const route = useRoute();

  const params = route.params as RouteParamsProps;

  const fetchHistory = async () => {
    try {
      const res = await api.get("/history");

      setExercicios(res.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os grupos, tente novamente mais tarde";

      Alert.alert("Erro", title);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  useEffect(() => {
    if (params?.createWeekExercisesAmount && exercicios) {
      const amount = exercicios.flatMap((day) => {
        const days = day.data.filter(
          (exercise) =>
            new Date(exercise.created_at).getMonth() === new Date().getMonth()
        );
        return days;
      }).length;
    }
  }, [exercicios, params]);

  return (
    <>
      <ScreenHeader>
        <View style={{flex:1, flexDirection: "row", alignItems: "center",  }}>

        <Text style={[styles.h1, {color: "#fff", paddingTop: 30}]}>Historico</Text>
        </View>
      </ScreenHeader>

      <Container>
        <SectionList
          contentContainerStyle={{ paddingBottom: 30 }}
          sections={exercicios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
          renderSectionHeader={({ section }) => (
            <Text style={{ marginBottom: 10, marginTop: 5 }}>
              {section.title}
            </Text>
          )}
          style={{ padding: 20, flex: 1, width: width }}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: "auto" }}>Você ainda não fez nenhum exercício hoje.</Text>
          )}
        />
      </Container>
    </>
  );
}
