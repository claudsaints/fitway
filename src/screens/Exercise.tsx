import Container from "@components/Container/Container";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNestedRoutes } from "@routes/app.routes";
import { View, Text, Pressable,Image, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@styles/index";
import {FontAwesome} from "@expo/vector-icons"
import Button from "@components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView } from "moti";

export function Exercise() {
  const navigation = useNavigation<AppNestedRoutes>();

  const {width} = useWindowDimensions();
  const imageSize = width - 50;


  const handlerReturn = () => {
    navigation.navigate("home_main");
  };

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
            <Text style={styles.geralText}>Nome exercicio</Text>
            <Text style={styles.geralText}>Tipo</Text>
          </View>
        </View>
      </ScreenHeader>
      <Container>
      <ScrollView showsVerticalScrollIndicator={false}>


          <View style={styles.vstack}>
                            <Image
                                src="https://static1.minhavida.com.br/articles/73/86/d3/46/lio-putrashutterstock-orig-1.jpg"
                                alt="remada unilateral"
                                height={imageSize}
                                width={imageSize}
                                style={{  borderRadius: 12, marginBottom: 30, marginTop: 32 }}
                            />
                            <View style={[{backgroundColor: "white", height: 180, width: imageSize, borderRadius: 10 }, styles.justifyAlign]}>
                              <View style={[{flex:0.5, flexDirection: "row", gap: 30, justifyContent: "space-between", alignItems: "center", padding: 10}]} >
                                <View style={[{ flexDirection: "row", gap: 10}, styles.justifyAlign]}>
                                  <FontAwesome6 name="dumbbell" size={20} color="black" />
                                  <Text>6 series</Text>

                                </View>
                                <View style={[{ flexDirection: "row", gap: 6}, styles.justifyAlign]}>
                                  <AntDesign name="retweet" color={"black"} size={22}/>
                                  <Text>12 repetições</Text>
                                </View>
                              </View>

                              <Button  textStyle={{color: "white", fontSize: 12}}>
                                Marcar como Realizado
                              </Button>

                            </View>
                            
        </View>
      </ScrollView>
      </Container>
    </>
  );
}
