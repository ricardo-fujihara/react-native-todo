import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import { SuperTitle } from "@/components/SuperTitle";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <SuperTitle title="Lista de Compras"></SuperTitle>
      <SuperButton title="novo item" />
    </View>
  );
}
