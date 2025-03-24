<template>
  <div class="task">
    <div class="task-description">
      <h2>Task 3</h2>
      This page should display the time provided by the server. The time should update every second.
      <div>
        <p>For example, the page might display:</p>
        <pre>
                The current time is: 12:34:56
            </pre>
      </div>
    </div>
    <div id="solution-3">
      <p>The current time is: {{ serverTime }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      serverTime: 'Loading...'
    }
  },
  methods: {
    async fetchTime() {
      try {
        const response = await axios.get('http://localhost:8080/time')
        this.serverTime = response.data.time
      } catch (error) {
        console.error('Error fetching time:', error)
      }
    }
  },
  mounted() {
    this.fetchTime() // Initial fetchUpdate every second
    setInterval(this.fetchTime, 1000) //
  }
}
</script>
