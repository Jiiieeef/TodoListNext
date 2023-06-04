import { List, ListItem } from "@chakra-ui/react";

import { useAppSelector } from "@/store/store";
import { selectSordtedTodoItems } from "@/store/todoSlice";
import TodoItem from "./todo-item";

const TodosItems = () => {
  const todosItems = useAppSelector(selectSordtedTodoItems);

  return (
    <List spacing={4}>
      {todosItems.map(todoItem => (
        <ListItem key={todoItem.added_at}>
          <TodoItem todoItem={todoItem} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodosItems;