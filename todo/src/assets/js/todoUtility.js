import { reactive, onMounted } from "vue";

export const state = reactive({
    todos: [],
    newTodo: "",
    filter: "all",
    editingTodoId: null,
});

const loadTodos = () => {
    if (localStorage.getItem("todos")) {
        state.todos = JSON.parse(localStorage.getItem("todos"));
    }
};

const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const updateTodos = () => {
    saveTodos();
};

onMounted(loadTodos);
