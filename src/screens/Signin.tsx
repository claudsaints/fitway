import Container from "@components/Container/Container";
import { styles } from "@styles/index";
import { View, useWindowDimensions } from "react-native";
import LogoSvg from "@assets/logo.svg";
import React from "react";
import Title from "@components/Title";
import Paragraph from "@components/Paragraph";
import Input from "@components/Input";
import Button from "@components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutes } from '@routes/auth.routes'
export default function SignIn() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const logoSize = Math.max(400, Math.min(width * 0.4, 220));
  const navigation = useNavigation<AuthNavigationRoutes>();

  function handleSignUp() {
    navigation.navigate("signUp");
  }

  return (
    <Container>
      <View style={[styles.container, {flexDirection: isLandscape ? 'row' : 'column', alignItems: 'center', justifyContent: 'center'}]}>
        <LogoSvg style={{ marginTop: 40 }} width={logoSize} height={logoSize} />
      </View>
      <Paragraph style={{ textTransform: "uppercase", fontSize: 10 }}>
        O melhor caminho para ser saudável
      </Paragraph>
      <View style={[styles.vstack, {width: isLandscape ? '50%' : '100%', alignSelf: 'center'}]}>
        <Title variant="h2" style={{ marginBottom: 20 }}>
          Acesse sua conta
        </Title>
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
        <Button style={{ marginTop: 16}} textStyle={{ color: "#fff"}}>Entrar</Button>
      </View>
      <View style={[styles.vstack]}>
        <Button 
          style={{ marginTop: 16, backgroundColor: "transparent", borderWidth: 2, borderColor: "black"}} textStyle={{ color: "black", fontWeight: "bold" }}
          onPress={handleSignUp}
        >
            Criar conta
        </Button>
      </View>
    </Container>
  );
}
