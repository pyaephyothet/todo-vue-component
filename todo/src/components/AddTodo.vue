<template>
  <form class="mt-3 flex items-center justify-between" @submit.prevent="addTodo">
    <input
      v-model="state.newTodo"
      type="text"
      placeholder="Add todo..."
      class="w-96 p-3 border border-primary-100 focus:outline-none"
    />
    <button type="submit" class="bg-primary-100 text-white font-bold py-3 px-4">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
          fill="#fff"
        />
      </svg>
    </button>
  </form>
</template>

<script setup>
import { updateTodos, state } from "../assets/js/todoUtility";

const addTodo = () => {
  if (state.newTodo.trim() !== "") {
    const todo = {
      id: Date.now(),
      text: state.newTodo.trim(),
      completed: false,
    };
    state.todos.push(todo);
    state.newTodo = "";
  }
  updateTodos();
};
</script>
