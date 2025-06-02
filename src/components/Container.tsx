import { View } from "react-native";
import { IReactProps } from "types/IReactpProps";
import {styles} from "@styles/index"


export default function Container({children}: IReactProps){
    return(
    <View style={styles.container}>
        {children}
    </View>
    )
}