import Container from "@components/Container";
import { HomeHeader } from "@components/HomeHeader";
import { View ,Text} from "react-native";

export function Home() {
  return (  
    <Container>
        <HomeHeader />
        <View>
            <Text>Home</Text>
        </View>
    </Container>
  );
}