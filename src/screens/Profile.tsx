import Container from "@components/Container/Container";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { View, Text, Pressable, useWindowDimensions, Alert } from "react-native";
import { Skeleton } from "moti/skeleton";
import { MotiView, ScrollView } from "moti";
import { useState } from "react";
import Input from "@components/Input";
import { styles } from "@styles/index";
import Button from "@components/Button";
import * as imagePicker from "expo-image-picker";

export function Profile() {
  const SIZE = 150;

  const inputHeight = 60;

  const [imageLoading, setImageLoading] = useState(false);

  const [userPhoto, setUserPhoto] = useState<string>(
    "https://github.com/claudsaints.png"
  );

  const { width } = useWindowDimensions();

  const handlerUserPhotoSelect = async () => {
    setImageLoading(true);

    try {
      const photoSelected = await imagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "livePhotos"],
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });


      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri){

        if(photoSelected.assets[0].fileSize && (photoSelected.assets[0].fileSize / 1024 / 1024) > 5  ){
          Alert.alert("Sua imagem é muito grande", "Escolha uma imagem até 5 Mb");
          return;
        }

        setUserPhoto(photoSelected.assets[0].uri);
      
      }
    } catch (error) {
      console.log(error);
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <>
      <ScreenHeader>
        <Text>perfil</Text>
      </ScreenHeader>

      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <View style={{ flex: 1, paddingTop: 50 }}>
            {imageLoading ? (
              <MotiView
                transition={{
                  type: "timing",
                }}
                style={styles.vstack}
                animate={{ backgroundColor: "transparent" }}
              >
                <Skeleton height={SIZE} width={SIZE} radius={123} />
              </MotiView>
            ) : (
              <View style={styles.vstack}>
                <UserPhoto
                  src={userPhoto}
                  radius={80}
                  size={SIZE}
                  alt="profile_image"
                />
              </View>
            )}
          </View>
          <Pressable onPress={handlerUserPhotoSelect} style={{ margin: 5 }}>
            <Text style={{ textAlign: "center", marginVertical: 5 }}>
              Alterar foto
            </Text>
          </Pressable>
          <View style={[styles.vstack, { marginTop: 10, width: width }]}>
            <Input placeholder="Nome" style={{ height: inputHeight }} />

            <Input
              placeholder="E-mail"
              style={{ height: inputHeight }}
              editable={false}
            />
          </View>

          <View style={[styles.vstack, { marginTop: 10, width: width }]}>
            <Text
              style={{
                textAlign: "center",
                alignSelf: "flex-start",
                marginVertical: 10,
                paddingLeft: 20,
              }}
            >
              Alterar Senha
            </Text>
            <Input
              placeholder="Senha antiga"
              style={{ height: inputHeight }}
              secureTextEntry={true}
            />
            <Input
              placeholder="Nova Senha"
              style={{ height: inputHeight }}
              secureTextEntry={true}
            />

            <Input
              placeholder="Confirme a nova senha"
              style={{ height: inputHeight }}
              secureTextEntry={true}
            />

            <Button textStyle={{ color: "#fff" }}>Atualizar</Button>
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
