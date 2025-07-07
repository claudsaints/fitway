import Container from "@components/Container/Container";
import { styles } from "@styles/index";
import { Alert, View, useWindowDimensions } from "react-native";
import LogoSvg from "@assets/logo.svg";
import React, { use } from "react";
import Title from "@components/Title";
import Paragraph from "@components/Paragraph";
import Input from "@components/Input";
import Button from "@components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutes } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validadeSchemaSignIn } from "validations/AuthValidation";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import Loading from "@components/Loading";

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const logoSize = Math.max(400, Math.min(width * 0.4, 220));
  const navigation = useNavigation<AuthNavigationRoutes>();

  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validadeSchemaSignIn),
  });

  async function handleSignIn({ email, password }: FormData) {
    setIsLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi fazer login. Tente novamente mais tarde";

      Alert.alert("Erro", title);
    } finally {
      setIsLoading(false);
    }
  }

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
      <Paragraph style={{ textTransform: "uppercase", fontSize: 10 , color: "black"}}>
        O melhor caminho para ser saudável
      </Paragraph>
      <View
        style={[
          styles.vstack,
          { width: isLandscape ? "50%" : "100%", alignSelf: "center" },
        ]}
      >
        <Title variant="h2" style={{ marginBottom: 20 }}>
          Acesse sua conta
        </Title>
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
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSignIn)}
            />
          )}
        />

        <Button
          onPress={handleSubmit(handleSignIn)}
          style={{ marginTop: 16 }}
          textStyle={{ color: "#fff" }}
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : "Entrar"}
        </Button>
      </View>
      <View style={[styles.vstack]}>
        <Button
          style={{
            marginTop: 16,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "black",
          }}
          textStyle={{ color: "black", fontWeight: "bold" }}
          onPress={() => {
            navigation.navigate("signUp");
          }}
        >
          Criar conta
        </Button>
      </View>
    </Container>
  );
}
