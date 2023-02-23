<script>
import Alert from '../components/Alert.vue'

let id = 0

export default {
  components: {
    Alert
  },
  data() {
    return {
      todoId: 1,
      hideCompleted: false,
      todos: [],
      showAlert: false
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    async fetchTodo() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      const title = (await res.json()).title
      this.todos.push({ id: id++, text: title, done: false })
    },
    addTodo(text) {
      if (text) {
        this.todos.push({ id: id++, text: text, done: false })
        this.showAlert = false
      } else {
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 2000)
        this.showAlert = false
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  },
  watch: {
    todoId(newId) {
      this.fetchTodo()
    }
  }
}
</script>

<template>
  <Alert msg="TODO item can't be blank" v-if="showAlert"/>

  <div class="grid">    
    <div>
      <button class="contrast"
        @click="this.todoId += 1">
        Add Todo
      </button>
    </div>
    <div>
      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
  </div>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}&nbsp</span>
      <button class="secondary" @click="removeTodo(todo)">Delete</button>
    </li>
  </ul>
</template>

<style>
.done {
  text-decoration: line-through;
}
form {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
}
.secondary {
  display: inline;
  max-width: 150px;
  max-height: 60px;
}
</style>
