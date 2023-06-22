<template>
  <div class="container flex justify-center items-center h-screen">
    <div class="form p-5 border-2 border-solid border-primary-100">
      <h1 class="text-lg font-bold">todo</h1>
      <!--  todo_input  -->
      <AddTodo />
      <!--  todo_filters  -->
      <FilterTodo />
      <!--  todo_action  -->
      <ActionTodo />
    </div>
  </div>
</template>

<script setup>
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";
import ActionTodo from "./components/TaskTodo.vue";
</script>
