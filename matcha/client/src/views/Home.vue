<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable no-trailing-spaces -->
  <section class="shadow-lg md:shadow-2xl mb-4 md:mb-0 home mx-4 flex justify-center md:justify-start">
    <div class="intro text-center bg-white-matcha rounded-lg w-full max-w-lg
flex flex-col justify-center md:rounded-tr-none md:rounded-br-none">
      <h1 class="text-5xl sm:text-6xl font-semibold text-gray-matcha">Someone<br>
        is waiting<br>
        for you</h1>
      <h1 class="text-2xl text-gray-matcha py-8">Matcha is a free dating<br>
        app to find you a lover</h1>
      <button class="button-purple">Sign up</button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>

<style scoped>
.home {
  height: calc(100% - 4rem - 2rem);
}
@responsive {
  @screen md {
    .home {
      background-image: url('../assets/home/couple.jpeg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-position-x: 200px;
      @apply rounded-lg;
    }
  }
}
</style>
