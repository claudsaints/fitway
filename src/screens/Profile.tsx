import Container from "@components/Container/Container";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { View, Text, Pressable, useWindowDimensions } from "react-native";
import { Skeleton } from "moti/skeleton";
import { MotiView, ScrollView } from "moti";
import { useState } from "react";
import Input from "@components/Input";
import { styles } from "@styles/index";
import Button from "@components/Button";
export function Profile() {
  const SIZE = 150;

  const inputHeight = 60;

  const [imageLoading, setImageLoading] = useState(false);

  const {width} = useWindowDimensions();

  return (
    <>
      <ScreenHeader title="perfil" />

      <Container>
        <ScrollView contentContainerStyle={{paddingBottom: 120}} >
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
                  <UserPhoto radius={80} size={SIZE} alt="profile_image" />
                </View>
            )}
          </View>
          <Pressable style={{margin: 5}}>
            <Text style={{ textAlign: "center", marginVertical: 5 }}>
              Alterar foto
            </Text>
          </Pressable>
            <View style={ [styles.vstack,{marginTop: 10, width: width}]}>
              <Input placeholder="Nome" style={{backgroundColor:"#a1a1a1", height: inputHeight}} />

              <Input placeholder="E-mail" style={{backgroundColor:"#a1a1a1", height: inputHeight}}
                editable={false}
              />
            </View>

            <View style={ [styles.vstack,{marginTop: 10, width: width}]}>
              <Text style={{textAlign: "center", alignSelf:"flex-start", marginVertical: 10, paddingLeft: 20}}>
                Alterar Senha
              </Text>   
              <Input placeholder="Senha antiga" style={{backgroundColor:"#a1a1a1", height: inputHeight}} secureTextEntry={true}/>
              <Input placeholder="Nova Senha" style={{backgroundColor:"#a1a1a1", height: inputHeight}} secureTextEntry={true}/>

              <Input placeholder="Confirme a nova senha" style={{backgroundColor:"#a1a1a1", height: inputHeight}}
                secureTextEntry={true}
              />

              <Button textStyle={{color: "#fff"}}>
                Atualizar 
              </Button>
            </View>
        </ScrollView>
      </Container>
    </>
  );
}
