<script>
import Alert from '../components/Alert.vue'

export default {
  components: {
    Alert
  },
  data() {
    return {
      newTodo: '',
      todos: [],
      showAlert: false
    }
  },
  methods: {
    addItem() {
      if (this.newTodo === '') {
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000)
        return
      }

      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<template>
  <main>
    <div>
      <Alert msg="TODO item can't be blank" v-if="showAlert"/>

      <div>
        <input
        v-model="newTodo">
        <br>
        <button @click="addItem()">
          Add to list
        </button>
      </div>

      <div>
        <ul>
          <li v-for="(todo) in todos">
            {{ todo }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
