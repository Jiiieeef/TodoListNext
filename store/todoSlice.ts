import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

let todoItemId = 1;

export type TodoItem = {
  id: number;
  text: string;
  added_at: number;
  done_at?: number;
  deleted_at?: number;
};

type AddTodoItemState = {
  text: string;
};

type State = TodoItem[];

type Actions = {
  addTodoItem: CaseReducer<State, PayloadAction<AddTodoItemState>>;
};

export const todoSlice = createSlice<State, Actions>({
  name: "todos",
  initialState: [],
  reducers: {
    addTodoItem: (state, action) => {
      const { text } = action.payload;
      const added_at = new Date().getTime();

      state.push({ id: todoItemId, text, added_at });

      todoItemId++;
    },
  },
});

export const { addTodoItem } = todoSlice.actions;

export const selectTodoItems = (state: AppState) => state.todos;

export const selectSordtedTodoItems = (state: AppState) => {
  const clonedTodoItems = [...state.todos];
  return clonedTodoItems.sort((todoA, todoB) =>
    todoA.added_at < todoB.added_at ? 1 : -1
  );
};

export default todoSlice.reducer;
