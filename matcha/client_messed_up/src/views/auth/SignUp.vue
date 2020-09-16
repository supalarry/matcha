<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
  <!-- eslint-disable no-trailing-spaces -->
  <div id="signup" class="mx-4 h-screen flex flex-col justify-center items-center">

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm">
      <div class="flex flex-col items-center">
        <div class="flex">
          <img src="../../assets/logo.png" class="h-12">
          <h1 class="text-purple-matcha text-4xl font-bold ml-2">Matcha</h1>
        </div>
        <div>
          <h1 class="text-md sm:text-2xl font-bold opacity-75 text-gray-matcha">Find your significant other</h1>
        </div>
      </div>

      <div class="flex flex-col items-center w-full mt-4">
        <input type="text" placeholder="First Name" required class="matcha-input">
        <input type="text" placeholder="Last Name" required class="matcha-input">
        <input type="text" placeholder="Email" required class="matcha-input">
        <input type="text" placeholder="Username" required class="matcha-input">
        <input type="password" placeholder="Password" required class="matcha-input">
        <button class="bg-purple-matcha w-full rounded-md text-white-matcha py-2 mt-4 opacity-50">Sign Up</button>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm mt-4">
      <h1 class="text-sm">Have an account? <span class="text-blue-500"><router-link to="signin">Sign in</router-link></span></h1>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style>
</style>
