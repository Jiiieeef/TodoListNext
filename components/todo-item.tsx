import { Box, Flex, Text } from "@chakra-ui/layout";
import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

import { TodoItem, doneTodoItem } from "@/store/todoSlice";
import { useAppDispatch } from "@/store/store";

type TodoItemProps = {
  todoItem: TodoItem;
};
const TodoItem = ({ todoItem }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const isDone = !!todoItem.done_at;

  return (
    <Flex
      border="1px solid"
      borderColor={isDone ? "gray.300" : "gray.500"}
      color={isDone ? "gray.300" : undefined}
      padding={2}
      borderRadius={4}
      justifyContent="space-between"
      alignItems="center"
      transition="all ease 300ms"
      _hover={{
        "& > .actions": { visibility: "visible" },
      }}
    >
      <Text title={todoItem.text} noOfLines={1}>
        {todoItem.text}
      </Text>

      {!todoItem.done_at && (
        <Box className="actions" visibility="hidden">
          <IconButton
            aria-label="Done"
            icon={<CheckIcon />}
            size="xs"
            colorScheme="teal"
            onClick={() => dispatch(doneTodoItem({ id: todoItem.id }))}
          />
        </Box>
      )}
    </Flex>
  );
};

export default TodoItem;
