import Container from "@components/Container";
import { styles } from "@styles/index";
import { View,Text,Image } from "react-native";
import LogoSvg from "@assets/logo.svg"
import bgImage from "@assets/background_person.png"
export default function Signin(){
    return(
        <Container>
            <View style={styles.vstack}>
                <LogoSvg />
                <Text style={styles.p}>O melhor caminho para ser saudavel</Text>
            </View>
            <View style={styles.vstack}>
                <Image
                source={bgImage}
                style={{ flex: 1, position: 'absolute', width: 300, height: 300}}
                alt="treino"
                resizeMode="contain"
                />
            </View>

        </Container>
    );
}