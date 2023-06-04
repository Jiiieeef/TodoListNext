import { List, ListItem } from "@chakra-ui/react";

import { useAppSelector } from "@/store/store";
import { selectNotDeletedTodoItems } from "@/store/todoSlice";
import TodoItem from "./todo-item";

const TodosItems = () => {
  const todosItems = useAppSelector(selectNotDeletedTodoItems);

  return (
    <List spacing={4}>
      {todosItems.map(todoItem => (
        <ListItem key={todoItem.id}>
          <TodoItem todoItem={todoItem} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodosItems;
