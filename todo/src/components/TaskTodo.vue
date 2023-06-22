<template>
  <span id="activeCount" class="text-primary-100"
    >{{ activeCount }} item{{ activeCount !== 1 ? "s" : "" }} left</span
  >
  <div class="flex mt-3 justify-between">
    <button
      class="action_btn"
      @click="toggleAll"
      :class="{ disabled: state.todos.length === 0 }"
    >
      {{ checkAllText }}
    </button>
    <button
      class="action_btn"
      @click="clearCompleted"
      :class="{
        disabled: completedCount === 0 || state.todos.length === 0,
      }"
    >
      Clear Completed
    </button>
  </div>
</template>

<script setup>
import { updateTodos, state } from "../assets/js/todoUtility";
import { computed } from "vue";

const toggleAll = () => {
  const allCompleted = state.todos.every((todo) => todo.completed);
  state.todos.forEach((todo) => {
    todo.completed = !allCompleted;
  });
};

const clearCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.completed);
  updateTodos();
};

const activeCount = computed(() => {
  return state.todos.filter((todo) => !todo.completed).length;
});

const completedCount = computed(() => {
  return state.todos.filter((todo) => todo.completed).length;
});

const checkAllText = computed(() => {
  return state.todos.every((todo) => todo.completed) ? "Uncheck All" : "Check All";
});
</script>
