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
.task {
    display: flex;
    flex-direction: column;
}

.task-description {
    display: flex;
    flex-direction: column;
}
</style>