<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Signed in user");
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
      <div v-if="errorMessage.length !== 0" class="text-2xl font-medium text-center mb-4">{{ errorMessage }}</div>
      <h1 class="text-2xl font-medium text-center mb-4">Sign In</h1>
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email Address:</label>
          <input type="email" id="email" class="block w-full rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" v-model="email" required>
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
          <input type="password" id="password" class="block w-full rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" v-model="password" required>
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white rounded-md transition duration-300 focus:outline-none hover:bg-blue-600">Sign In</button>
      </form>
      <div class="flex items-center justify-between mt-6">
        <RouterLink to="/register">Register</RouterLink>
      </div>
    </div>
  </div>
</template>