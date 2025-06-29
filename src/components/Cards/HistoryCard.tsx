import { View,Text, useWindowDimensions } from "react-native";
import { Theme, ThemeProvider, useTheme } from "@react-navigation/native";
import { template } from "@babel/core";

export function HistoryCard(){
    const theme = useTheme();
    const {width, height}= useWindowDimensions();
    return(
        <View style={{  backgroundColor: "white", alignItems: "center", flexDirection: "row", padding: 3, gap: 16,height: 100, marginBottom: 10, borderRadius: 12 , width: "auto"}}>
            <View style={{ flex: 1,flexDirection: "column", gap: 10, padding: 10}}>
                <Text  style={{ textTransform: "uppercase"} }>Nome</Text>
                <Text style={{ textTransform: "uppercase"} }>Descricao</Text>
            </View>

            <View style={{}}>
                <Text style={{margin: 5}}> 8:00</Text>
            </View>
        </View>

    )
}