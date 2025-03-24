<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/task-1">Task 1</RouterLink>
        <RouterLink to="/task-2">Task 2</RouterLink>
        <RouterLink to="/task-3">Task 3</RouterLink>
      </div>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
}
</style>