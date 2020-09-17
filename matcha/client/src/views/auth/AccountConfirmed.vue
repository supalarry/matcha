<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
  <!-- eslint-disable no-trailing-spaces -->
  <div id="accountConfirmed" class="mx-4 h-screen flex flex-col justify-center items-center">

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-8 w-full max-w-sm">
      <div class="flex flex-col items-center text-center">
        <div>
          <img src="../../assets/auth/face.png" class="h-12">
        </div>
        <div>
          <h1 class="text-md sm:text-2xl font-bold my-8 text-gray-matcha">You are now verified</h1>
        </div>
        <div class="w-full">
          <router-link to="/accounts/signin"><input type="button" :disabled="invalid" value="Sign In" class="bg-purple-matcha w-full rounded-md text-white-matcha py-2 cursor-pointer"></router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
};
</script>

<style>
</style>
