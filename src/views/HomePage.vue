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
    <div class="row">
      <Alert msg="TODO item can't be blank" v-if="showAlert"/>

      <div class="column text-center">
        <input type="text" class="form-control" placeholder="New item" aria-label="Username" aria-describedby="basic-addon1"
        v-model="newTodo">
        <br>
        <button type="button" class="btn btn-light" @click="addItem()">
          Add to list
        </button>
      </div>

      <div class="column">
        <ul class="list-group">
          <li class="list-group-item text-center" v-for="(todo) in todos">
            {{ todo }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
