import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [newItem, setNewItem] = useState("");

  return (
    <View style={styles.container}>
      <SuperTitle title="Lista de Compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" />

      <SuperTitle title={newItem}></SuperTitle>
    </View>
  );
}