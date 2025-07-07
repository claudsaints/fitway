import Container from "@components/Container/Container";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Alert,
} from "react-native";
import { Skeleton } from "moti/skeleton";
import { MotiView, ScrollView } from "moti";
import { useState } from "react";
import Input from "@components/Input";
import { styles } from "@styles/index";
import Button from "@components/Button";
import * as imagePicker from "expo-image-picker";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/index";
import { AppError } from "@utils/AppError";
import {
  ProfileFormDataProps,
  validateProfileSchema,
} from "validations/ProfileValidation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "@components/Loading";

export function Profile() {
  const SIZE = 150;
  const inputHeight = 60;

  const [imageLoading, setImageLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>(
    "https://github.com/claudsaints.png"
  );

  const { width } = useWindowDimensions();

  const { updateUserProfile, user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormDataProps>({
    defaultValues: {
      name: user?.name || "",
      old_password: "",
      password: "",
      confirm_password: ""
    },
    resolver: yupResolver(validateProfileSchema) as any // força tipagem para evitar erro do resolver
  });

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

      if (photoSelected.assets[0].uri) {
        if (
          photoSelected.assets[0].fileSize &&
          photoSelected.assets[0].fileSize / 1024 / 1024 > 5
        ) {
          Alert.alert(
            "Sua imagem é muito grande",
            "Escolha uma imagem até 5 Mb"
          );
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

  const handleProfileUpdate =   async (data: ProfileFormDataProps) => {
    try {
      setIsUpdating(true);

      const userUpdated = { ...user, name: data.name };

      await api.put("/users", data);
      await updateUserProfile(userUpdated);

      Alert.alert("Perfil Atualizado", "Seu perfil foi atualizado com sucesso");
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível atualizar o perfil";

      Alert.alert("Erro", title);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <>
      <ScreenHeader>
         <View style={{flex:1, flexDirection: "row", alignItems: "center",  }}>

        <Text style={[styles.h1, {color: "#fff", paddingTop: 30}]}>Perfil</Text>
        </View>
      </ScreenHeader>

      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <View style={{ flex: 1, paddingTop: 50 }}>
            {imageLoading ? (
              <MotiView
                transition={{ type: "timing" }}
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

          <View style={[styles.vstack, { marginTop: 10, width }]}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="Nome"
                  keyboardType="default"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={{ height: inputHeight }}
                  value={value}
                />
              )}
            />

            <Input
              placeholder="E-mail"
              style={{ height: inputHeight }}
              editable={false}
              value={user.email}
            />
          </View>

          <View style={[styles.vstack, { marginTop: 10, width }]}>
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

            <Controller
              control={control}
              name="old_password"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="Senha antiga"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ height: inputHeight }}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="Nova Senha"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ height: inputHeight }}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="Confirme a nova senha"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ height: inputHeight }}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleProfileUpdate)}
                />
              )}
            />

            <Button
              onPress={handleSubmit(handleProfileUpdate)}
              textStyle={{ color: "#fff" }}
              disabled={isUpdating}
            >
              {isUpdating ? <Loading /> : "Atualizar"}
            </Button>
          </View>
        </ScrollView>
      </Container>
    </>
  );
}