import { View,Text, useWindowDimensions } from "react-native";
import { Theme, ThemeProvider, useTheme } from "@react-navigation/native";
import { template } from "@babel/core";
import { HistoryDTO } from "@types";


interface HistoryCardProps {
    data: HistoryDTO;
}

export function HistoryCard({data}: HistoryCardProps){
    const theme = useTheme();
    const {width, height}= useWindowDimensions();
    return(
        <View style={{  backgroundColor: "white", alignItems: "center", flexDirection: "row", padding: 3, gap: 16,height: 100, marginBottom: 10, borderRadius: 12 , width: "auto"}}>
            <View style={{ flex: 1,flexDirection: "column", gap: 10, padding: 10}}>
                <Text style={{ fontWeight: "500"}} >{data.name}</Text>
                <Text >{data.group}</Text>
            </View>

            <View style={{}}>
                <Text style={{margin: 5}}>
                  {data.hour
                    ? new Date(
                        new Date(data.created_at).getTime() - 3 * 60 * 60 * 1000
                      ).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
                    : ''}
                </Text>
            </View>
        </View>

    )
}