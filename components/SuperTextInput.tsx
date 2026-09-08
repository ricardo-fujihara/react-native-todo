import { styles } from "@/components/styles";
import { TextInput } from "react-native";

interface ISuperTextInput {
    value: string;
    onChangeText: (text: string) => void;
}

export default function SuperTextInput({
    value, 
    onChangeText
}: ISuperTextInput) {
    return (
        <TextInput style={styles.textInputContainer}
            value={value} 
            onChangeText={onChangeText}
        />
    );
}