import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import TodoItem, { ITodoItem } from "@/components/TodoItem";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addItem = () => {
    const item: ITodoItem = {
      id: new Date().toString(),
      title: newItem,
      completed: false,
    };

    //todos.push(newItem); imutavel não permitido
    setTodos([...todos, item]);

    //limpa campo
    setNewItem("");

  }

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Lista de Compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((todo) => {
        return <TodoItem title={todo.title} />
        })     
      }
    </ScrollView>
  );
}