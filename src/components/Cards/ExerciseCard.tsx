import { View, Image, Pressable, Text, PressableProps } from "react-native";
import Button from "../Button/Button";
import { styles } from "@styles/index";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface IExerciseCard{
    nome: string;
    descricao: string;
    onPress: () => void;
    
}

export function ExerciseCard({nome, descricao, onPress}:IExerciseCard) {
    const { colors } = useTheme();
    return (
        <Pressable
            onPress={onPress}
            style={{ backgroundColor: colors.card, height: 120, width: 350, marginBottom: 10, borderRadius: 12 }}
        >
            <View style={{ flex: 1, alignItems: "center", flexDirection: "row", padding: 12, gap: 16 }}>
                <View>
                    <Image
                        src="https://static1.minhavida.com.br/articles/73/86/d3/46/lio-putrashutterstock-orig-1.jpg"
                        alt="remada unilateral"
                        height={80}
                        width={80}
                        style={{ backgroundColor: colors.primary, borderRadius: 12 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textTransform: "uppercase", color: colors.text }}>
                        {nome}
                    </Text>
                    <Text numberOfLines={2} style={{ color: colors.text }}>
                        {descricao}
                    </Text>
                </View>
                <Entypo name="chevron-thin-right" color={colors.text} />
            </View>
        </Pressable>
    );
}