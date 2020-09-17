<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/no-unused-vars -->
  <!-- eslint-disable no-trailing-spaces -->
  <div id="signup" class="mx-4 h-screen flex flex-col justify-center items-center">

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm">
      <div v-if="!confirmationEmailSent">
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
          <ValidationObserver v-slot="{ handleSubmit, invalid }">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider name="First Name" rules="required|alpha|max:20" v-slot="{errors}">
                <input type="text" placeholder="First Name" v-model="formData.firstName" class="matcha-input">
                <span class="matcha-input-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="Last Name" rules="required|alpha|max:20" v-slot="{errors}">
                <input type="text" placeholder="Last Name" v-model="formData.lastName" class="matcha-input">
                <span class="matcha-input-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="Email" rules="required|email|max:50" v-slot="{errors}">
                <input type="email" placeholder="Email" v-model="formData.email" class="matcha-input">
                <span class="matcha-input-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="Username" rules="required|alpha_dash|max:20" v-slot="{errors}">
                <input type="text" placeholder="Username" v-model="formData.username" class="matcha-input">
                <span class="matcha-input-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="Password" rules="required|min:6|validPassword" v-slot="{errors}">
                <input type="password" placeholder="Password" v-model="formData.password" class="matcha-input">
                <span class="matcha-input-error">{{ passwordErrorHandler(errors[0]) }}</span>
              </ValidationProvider>
              <input type="submit" :disabled="invalid" value="Sign Up" v-bind:class="{'bg-purple-matcha':true, 'w-full': true, 'rounded-md': true, 'text-white-matcha': true, 'py-2': true, 'mt-4': true, 'opacity-50': invalid, 'cursor-pointer': !invalid}">
            </form>
          </ValidationObserver>
        </div>
      </div>
      <div v-if="confirmationEmailSent" class="py-8">
        <div class="flex flex-col items-center text-center">
          <div>
            <img src="../../assets/auth/email.png" class="h-12">
          </div>
          <div>
            <h1 class="text-md sm:text-2xl font-bold my-8 text-gray-matcha">Verify your email</h1>
          </div>
          <div>
            <h1 class="text-sm text-gray-matcha">Click confirmation link sent to {{formData.email}}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-md px-4 sm:px-8 py-4 w-full max-w-sm mt-4">
      <h1 class="text-sm">Have an account? <span class="text-blue-500"><router-link to="/accounts/signin">Sign in</router-link></span></h1>
    </div>
  </div>
</template>

<script>

/* eslint-disable */
export default {
  data: () => ({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    },
    confirmationEmailSent: false,
  }),
  methods: {
    passwordErrorHandler(error) {
      if (!error){
        return;
      }
      if (error === 'The Password field is required') {
        return error;
      }
      return 'This password is too easy to guess';
    },
    onSubmit() {
      // console.log(this.formData);
      this.confirmationEmailSent = true;
    },
  },
  computed: {
  },
  components: {
  },
};
</script>

<style>
</style>
