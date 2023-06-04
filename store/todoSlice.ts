import {
  CaseReducer,
  PayloadAction,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
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

type DoneTodoItemState = {
  id: number;
};

type DeleteTodoItemState = {
  id: number;
};

type State = TodoItem[];

type Actions = {
  addTodoItem: CaseReducer<State, PayloadAction<AddTodoItemState>>;
  doneTodoItem: CaseReducer<State, PayloadAction<DoneTodoItemState>>;
  deleteTodoItem: CaseReducer<State, PayloadAction<DeleteTodoItemState>>;
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

    doneTodoItem: (state, action): State => {
      const idToDone = action.payload.id;
      const todoItem = state.find(({ id }) => id === idToDone);

      if (todoItem) {
        const todoItemDone = {
          ...todoItem,
          done_at: new Date().getTime(),
        };

        return state.map(todoItem =>
          todoItem.id === idToDone ? todoItemDone : todoItem
        );
      }

      return state;
    },

    deleteTodoItem: (state, action): State => {
      const idToDelete = action.payload.id;
      const todoItem = state.find(({ id }) => id === idToDelete);

      if (todoItem) {
        const todoItemDone = {
          ...todoItem,
          deleted_at: new Date().getTime(),
        };

        return state.map(todoItem =>
          todoItem.id === idToDelete ? todoItemDone : todoItem
        );
      }

      return state;
    },
  },
});

export const { addTodoItem, doneTodoItem, deleteTodoItem } = todoSlice.actions;

export const selectTodoItems = (state: AppState) => state.todos;

export const selectSordtedTodoItems = (state: AppState) => {
  const clonedTodoItems = [...state.todos];
  return clonedTodoItems.sort((todoA, todoB) =>
    todoA.added_at < todoB.added_at ? 1 : -1
  );
};

export const selectNotDeletedTodoItems = createSelector(
  selectSordtedTodoItems,
  state => state.filter(({ deleted_at }) => !deleted_at)
);

export default todoSlice.reducer;
