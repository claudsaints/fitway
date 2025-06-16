import { View ,Text, useWindowDimensions} from "react-native";
import { UserPhoto } from "./UserPhoto";
import {MaterialIcons} from "@expo/vector-icons"

export function HomeHeader(){
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    return (
       <View style={{
            padding: 30,
            margin: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: '#004488',
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        }}>
            <View style={{marginTop: 20,alignContent:"space-between",
            flexDirection: "row",
            gap: 20,}}>
                <View>
                    <UserPhoto size={60}/>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around'}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', }}>
                        Olá,
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff' }}>
                        Claud
                    </Text>
                </View>
                <View style={{  flex: 1,alignItems: "flex-end", justifyContent: "center"}}>
                    <MaterialIcons name="logout" color={"#fff"} size={30}/>
                </View>
            </View>
       </View>
    );
}