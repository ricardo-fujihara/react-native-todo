import { styles } from "@/components/styles";
import { Text, TouchableOpacity } from "react-native";

interface ISuperButton {
    title: string;
    onPress?: () => void;
}

/**
 * Principal Botão do APP
 * @param title Titulo do botão
 * @param onPress Ação do botão Clicado
 * @returns Um super botão
 */

export default function SuperButton({title, onPress}: ISuperButton) {
    return (
        <TouchableOpacity onPress={onPress} style = {styles.containerButton}>
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    );
}

