import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import TodoItem, { Todo } from "@/components/TodoItem";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addItem = () => {
    if (newItem.length < 4) return;

    const item: Todo = {
      id: Date.now().toString(),
      title: newItem,
      completed: false,
    };

    //todos.push(newItem); imutavel não permitido
    setTodos([item, ...todos]);

    //limpa campo
    setNewItem("");

  }
  const updateItem = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setTodos((todos) => 
      todos.filter((todo) => todo.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Lista de Compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((todo) => {
        //tudo que é mapeado no react precisa de uma key
        return ( 
          <TodoItem 
            key={todo?.id} 
            todo={todo} 
            updateItem={updateItem} 
            deleteItem={deleteItem} 
          /> 
        );
      })}
    </ScrollView>
  );
}