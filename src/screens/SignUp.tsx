import Container from "@components/Container/Container";
import { styles } from "@styles/index";
import { View, Text, useWindowDimensions, Alert, ToastAndroid } from "react-native";
import LogoSvg from "@assets/logo.svg";
import React from "react";
import Title from "@components/Title";
import { AuthNavigationRoutes } from "@routes/auth.routes";
import Input from "@components/Input";
import Button from "@components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@services/index";
import axios from "axios";
import { AppError } from "@utils/AppError";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export default function SignUp() {
  const validateSchema = yup.object({
    name: yup.string().required("Informe o nome"),
    email: yup.string().required("Informe o email").email("E-mail inválido"),
    password: yup.string().required("Informe a senha").min(6,"A senha deve ter té 6 digitos"),
    password_confirm: yup.string().required("Informe a confirmação de senha").oneOf([yup.ref('password')],"As senhas devem ser iguais!"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    resolver: yupResolver(validateSchema),
  });

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const logoSize = Math.max(400, Math.min(width * 0.5, 220));

  const navigation = useNavigation<AuthNavigationRoutes>();
  
  function handleBackToLogin() {
    navigation.navigate("signIn");
  }
  
  const handlerSignUp = async ({email,name,password}: FormData) => {
 
    try
    {
      const {data} = await api.post("/users", {name, email,password})
      console.log(data)  
    }
    catch(error)
    {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message: "Não foi possivel cadastrar. Tente novamente mais tarde" 

      Alert.alert("Erro", title);

      
    }
    

  };

  const handlerError = (error: any) => console.log("Form Errors:", error);

  return (
    <Container>
      <View
        style={[
          styles.container,
          {
            flexDirection: isLandscape ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <LogoSvg style={{ marginTop: 40 }} width={logoSize} height={logoSize} />
      </View>

      <View
        style={[
          styles.vstack,
          { width: isLandscape ? "50%" : "100%", alignSelf: "center" },
        ]}
      >
        <Title variant="h2" style={{ marginBottom: 20 }}>
          Crie sua conta
        </Title>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handlerSignUp)}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handlerSignUp)}
            />
          )}
        />

        <Button
          onPress={handleSubmit(handlerSignUp, handlerError)}
          style={{ marginTop: 16 }}
          textStyle={{ color: "#fff" }}
        >
          Cadastrar
        </Button>
      </View>

      <View
        style={[
          styles.vstack,
          { width: isLandscape ? "50%" : "100%", alignSelf: "center" },
        ]}
      >
        <Button
          style={{
            marginTop: 16,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "black",
          }}
          textStyle={{ color: "black", fontWeight: "bold" }}
          onPress={handleBackToLogin}
        >
          Voltar para o login
        </Button>
      </View>
      
    </Container>
  );
}
