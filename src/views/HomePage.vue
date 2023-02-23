<script>
import Alert from '../components/Alert.vue'

let id = 0

export default {
  components: {
    Alert
  },
  data() {
    return {
      newTodo: '',
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
    addTodo() {
      if (this.newTodo === '') {
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 3000)
        return
      }
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <Alert msg="TODO item can't be blank" v-if="showAlert"/>

  <div class="grid">    
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button class="contrast">Add Todo</button>
    </form>
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
