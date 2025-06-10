import Container from "@components/Container";
import { styles } from "@styles/index";
import { View, Image, useWindowDimensions } from "react-native";
import LogoSvg from "@assets/logo.svg";

import React from "react";
import Title from "@components/Title";
import { AuthNavigationRoutes } from "@routes/auth.routes";
import Input from "@components/Input";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const logoSize = Math.max(400, Math.min(width * 0.5, 220));

  const navigaiton = useNavigation<AuthNavigationRoutes>();
  function handleBackToLogin() {
    navigaiton.navigate("signIn");
  }
  return (
    <Container>
      <View style={[styles.container, {flexDirection: isLandscape ? 'row' : 'column', alignItems: 'center', justifyContent: 'center'}]}>
        <LogoSvg 
          style={{ marginTop: 40 }} width={logoSize} height={logoSize} 
        />
      </View>

      <View style={[styles.vstack, {width: isLandscape ? '50%' : '100%', alignSelf: 'center'}]}>
        <Title variant="h2" style={{ marginBottom: 20 }}>
          Crie sua conta 
        </Title>
         <Input
          placeholder="Nome"
          keyboardType="default"
          autoCapitalize="none"
        />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          keyboardType="visible-password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button style={{ marginTop: 16}} textStyle={{ color: "#fff"}}>Cadastrar</Button>
      </View>
      <View style={[styles.vstack, {width: isLandscape ? '50%' : '100%', alignSelf: 'center'}]}>
     
        <Button 
          style={{ marginTop: 16, backgroundColor: "transparent", borderWidth: 2, borderColor: "black"}} textStyle={{ color: "black", fontWeight: "bold" }}
          onPress={handleBackToLogin}
        >
            Voltar para o login
        </Button>
      </View>
    </Container>
  );
}
