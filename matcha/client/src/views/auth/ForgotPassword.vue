<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
  <!-- eslint-disable no-trailing-spaces -->
  <div id="signup" class="mx-4 h-screen flex flex-col justify-center items-center">

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-8 w-full max-w-sm">
      <div v-if="!resetPasswordEmailSent">
        <div class="flex flex-col items-center text-center">
          <div>
            <img src="../../assets/auth/lock.png" class="h-12">
          </div>
          <div>
            <h1 class="text-md sm:text-2xl font-bold my-2 text-gray-matcha">Forgot password?</h1>
          </div>
          <div>
            <h1 class="text-sm text-gray-matcha">Enter your email and we will send you a link, so you can log in again</h1>
          </div>
        </div>
        <div class="flex flex-col items-center w-full mt-4">
          <ValidationObserver v-slot="{ handleSubmit, invalid }">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider name="Email" rules="required|email|max:50" v-slot="{errors}">
                <input type="email" placeholder="Email" v-model="formData.email" class="matcha-input">
                <span class="matcha-input-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <input type="submit" :disabled="invalid" value="Reset password" v-bind:class="{'bg-purple-matcha':true, 'w-full': true, 'rounded-md': true, 'text-white-matcha': true, 'py-2': true, 'mt-4': true, 'opacity-50': invalid, 'cursor-pointer': !invalid}">
            </form>
          </ValidationObserver>
        </div>
      </div>
      <div v-if="resetPasswordEmailSent">
        <div class="flex flex-col items-center text-center">
          <div>
            <img src="../../assets/auth/email.png" class="h-12">
          </div>
          <div>
            <h1 class="text-md sm:text-2xl font-bold my-8 text-gray-matcha">Check your email</h1>
          </div>
          <div>
            <h1 class="text-sm text-gray-matcha">Reset password link sent to {{formData.email}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm mt-4">
      <h1 class="text-sm"><span class="text-blue-500"><router-link to="signin">Back to signing in</router-link></span></h1>
    </div>
  </div>

</template>

<script>

export default {
  data: () => ({
    formData: {
      email: '',
    },
    resetPasswordEmailSent: false,
  }),
  methods: {
    onSubmit() {
      this.resetPasswordEmailSent = true;
    },
  },
  components: {
  },
};
</script>

<style>
</style>
