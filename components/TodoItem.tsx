import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function TodoItem() {
    return (
        <View style={styles.card}>
            <Text style={styles.titleButton}>Comprar Arroz</Text>
            <Text style={styles.description}>Subtitle</Text>

           <View style={styles.checkbox}>
            <Ionicons name="checkmark" size={30} color="white" />
           </View>
        </View>
    );
}