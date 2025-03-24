<template>
  <div class="task">
    <div class="task-description">
      <h2>Task 1</h2>
      <p>This page displays a list of people in a table, fetched from the backend.</p>
    </div>

    <div id="solution-1">
      <table v-if="people.length" border="1">
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in people" :key="person.email">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.email }}</td>
        </tr>
        </tbody>
      </table>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      people: []
    }
  },
  methods: {
    async fetchPeople() {
      try {
        const response = await axios.get('http://localhost:8080/people')
        this.people = response.data
      } catch (error) {
        console.error('Error fetching people:', error)
      }
    }
  },
  mounted() {
    this.fetchPeople()
  }
}
</script>
