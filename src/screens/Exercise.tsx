import Container from "@components/Container/Container";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNestedRoutes } from "@routes/app.routes";
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@styles/index";
import Button from "@components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ScrollView } from "moti";
import { ExerciseDTO } from "@types";
import { useEffect, useState } from "react";
import { api } from "@services/index";
import { AppError } from "@utils/AppError";
import Loading from "@components/Loading";
import { Image as ExpoImage } from "expo-image";

export function Exercise() {
  const { width } = useWindowDimensions();

  const imageSize = width - 50;

  const navigation = useNavigation<AppNestedRoutes>();

  const route = useRoute();

  const { exerciseId } = route.params as { exerciseId: string };

  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [sendingRegister, setSendingRegister] = useState(false);

  const fetchExerciseDetails = async () => {
    try {
      setSendingRegister(true);
      const res = await api.get(`/exercises/${exerciseId}`);
      setExercise(res.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possivel carregar o exercicio";
      Alert.alert("Erro", title);
    } finally {
      setSendingRegister(false);
    }
  };

  const handlerReturn = () => {
    navigation.navigate("home_main");
  };

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <>
      <ScreenHeader>
        <View style={styles.vstack}>
          <Pressable
            onPress={handlerReturn}
            style={{
              alignSelf: "flex-start",
              paddingTop: 10,
              paddingBottom: 0,
            }}
          >
            <Feather name="arrow-left" color={"white"} size={30} />
          </Pressable>
          <View
            style={[
              styles.fRow,
              { justifyContent: "space-between", paddingTop: 10 },
            ]}
          >
            <Text style={styles.geralText}>{exercise.name}</Text>
            <Text style={styles.geralText}>{exercise.group}</Text>
          </View>
        </View>
      </ScreenHeader>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.vstack}>
            <ExpoImage
              source={
                exercise.demo
                  ? `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`
                  : "https://static1.minhavida.com.br/articles/73/86/d3/46/lio-putrashutterstock-orig-1.jpg"
              }
              style={{
                borderRadius: 12,
                marginBottom: 30,
                marginTop: 32,
                height: imageSize,
                width: imageSize,
              }}
              contentFit="contain"
              alt="remada unilateral"
            />
            <View
              style={[
                {
                  backgroundColor: "white",
                  height: 180,
                  width: imageSize,
                  borderRadius: 10,
                },
                styles.justifyAlign,
              ]}
            >
              <View
                style={[
                  {
                    flex: 0.5,
                    flexDirection: "row",
                    gap: 30,
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                  },
                ]}
              >
                <View
                  style={[
                    { flexDirection: "row", gap: 10 },
                    styles.justifyAlign,
                  ]}
                >
                  <FontAwesome6 name="dumbbell" size={20} color="black" />
                  <Text>{exercise.series} series</Text>
                </View>
                <View
                  style={[
                    { flexDirection: "row", gap: 6 },
                    styles.justifyAlign,
                  ]}
                >
                  <AntDesign name="retweet" color={"black"} size={22} />
                  <Text>{exercise.repetitions} repetições</Text>
                </View>
              </View>

              <Button
                textStyle={{ color: "white", fontSize: 12 }}
                disabled={sendingRegister}
              >
                {sendingRegister ? <Loading /> : "Marcar como Realizado"}
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
