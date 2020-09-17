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
      </div>

      <div class="flex flex-col items-center w-full mt-4">
        <ValidationObserver v-slot="{ handleSubmit, invalid }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider name="Username" rules="required|max:20" v-slot="{errors}">
              <input type="text" placeholder="Username" v-model="formData.username" class="matcha-input">
              <span class="matcha-input-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider name="Password" rules="required|max:100" v-slot="{errors}">
              <input type="password" placeholder="Password" v-model="formData.password" class="matcha-input">
              <span class="matcha-input-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <input type="submit" :disabled="invalid" value="Sign In" v-bind:class="{'bg-purple-matcha':true, 'w-full': true, 'rounded-md': true, 'text-white-matcha': true, 'py-2': true, 'mt-4': true, 'opacity-50': invalid, 'cursor-pointer': !invalid}">
          </form>
        </ValidationObserver>
      </div>
      <hr class="bg-gray-300 w-full my-4">
      <div class="flex flex-col items-center">
        <span class="text-sm text-blue-500"><router-link to="forgotpassword">Forgot password?</router-link></span>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm mt-4">
      <h1 class="text-sm">Don't have an account? <span class="text-blue-500"><router-link to="signup">Sign up</router-link></span></h1>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    formData: {
      username: '',
      password: '',
    },
  }),
  methods: {
    onSubmit() {
      console.log('nice');
    },
  },
  components: {
  },
};
</script>

<style>
</style>
