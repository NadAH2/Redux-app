import {
  ADD,
  DELETE_TS,
  EDIT,
  CURRENT_TS,
  TOGGLE_COMPLETED,
  FILTER,
} from "../actions/constantsTodo";

const initialState = {
  todos: [],
  current: null,
  filteredTodos: [],
};

const reducersTodo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case DELETE_TS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case CURRENT_TS:
      return {
        ...state,
        current: payload,
      };
    case FILTER:
      return {
        ...state,
        filteredTodos:
          payload === "Completed"
            ? state.todos.filter((todo) => todo.isDone)
            : payload === "Uncompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : [],
      };
    default:
      return state;
  }
};

export default reducersTodo;
