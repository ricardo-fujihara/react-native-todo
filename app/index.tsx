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
    if (newItem.length < 4) return;

    const item: ITodoItem = {
      id: Date.now().toString(),
      title: newItem,
      completed: false,
    };

    //todos.push(newItem); imutavel não permitido
    setTodos([item, ...todos]);

    //limpa campo
    setNewItem("");

  }
  const updateItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo?.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Lista de Compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((todo) => {
        //tudo que é mapeado no react precisa de uma key
        return <TodoItem key={todo?.id} todo={todo} updateItem={updateItem} />
      })}
    </ScrollView>
  );
}