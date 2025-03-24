<template>
  <div class="task">
    <div class="task-description">
      <h2>Task 2</h2>
      Add styles to this page so that it looks like the following:

      <img src="../assets/task-2.png" alt="Task 2" style="max-width: 100%; margin-top: 20px;">

      <p>Apply styles to the content of #solution-2 div.</p>
    </div>
    <div id="solution-2">
      <div class="container">
        <div class="title">Title</div>
        <div class="grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#solution-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: fit-content;
}

.title {
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(3, 60px);
  gap: 10px;
}

.grid div {
  background: linear-gradient(135deg, #fc820a, #e93d5e);
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(255, 165, 0, 0.5);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.grid div:hover {
  transform: scale(1.1);
  box-shadow: 4px 4px 10px rgba(255, 165, 0, 0.8);
}
</style>
<script setup lang="ts">
</script>
