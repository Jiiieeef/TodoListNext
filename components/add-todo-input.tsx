import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

import { addTodoItem } from "@/store/todoSlice";
import { useAppDispatch } from "@/store/store";

type FormData = {
  text: string;
};

const AddTodoInput = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(values => {
    dispatch(addTodoItem({ text: values.text }));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl isInvalid={!!errors.text}>
        <FormLabel>Add an item todo</FormLabel>
        <Input
          id="text"
          placeholder="Type your todo here"
          {...register("text", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.text && errors.text.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddTodoInput;
