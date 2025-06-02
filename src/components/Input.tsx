import { TextInput } from "react-native-gesture-handler";

interface InputProps{
    placeholder: string;
}

export default function Input({placeholder}:InputProps){
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={"black"}
        />
    )
}