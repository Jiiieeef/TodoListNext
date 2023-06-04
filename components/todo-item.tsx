import { TodoItem } from "@/store/todoSlice";
import { Box } from "@chakra-ui/layout";

type TodoItemProps = {
  todoItem: TodoItem;
};
const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <Box border="1px solid" borderColor="gray.500" padding={2} borderRadius={4}>
      {todoItem.text}
    </Box>
  );
};

export default TodoItem;
