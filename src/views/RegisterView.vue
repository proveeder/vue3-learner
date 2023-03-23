<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Registered user");
          router.push("/sports");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
  },
};
</script>

<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-md w-full py-8 px-6 bg-white rounded-md shadow-md">
      <h1 class="text-2xl font-medium text-center mb-6">Registration Page</h1>
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email Address:</label>
          <input type="email" id="email" class="block w-full rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" v-model="email" required>
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
          <input type="password" id="password" class="block w-full rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" v-model="password" required>
        </div>
        <button type="submit" @click=(register) class="w-full py-2 px-4 bg-blue-500 text-white rounded-md transition duration-300 focus:outline-none hover:bg-blue-600">Register</button>
      </form>
    </div>
  </div>
</template>
