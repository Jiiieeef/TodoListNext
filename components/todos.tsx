import { Box } from "@chakra-ui/react";

import AddTodoInput from "./add-todo-input";
import TodosItems from "./todos-items";

const Todos = () => {
  return (
    <>
      <AddTodoInput />
      <Box marginTop={4}>
        <TodosItems />
      </Box>
    </>
  );
};

export default Todos;
