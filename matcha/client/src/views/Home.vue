<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable no-trailing-spaces -->
  <section class="shadow-lg md:shadow-2xl mb-4 md:mb-0 home mx-4 flex rounded-lg">

    <div class="intro text-center bg-white-matcha rounded-lg w-full md:w-2/3
flex flex-col justify-center md:rounded-tr-none md:rounded-br-none">
      <h1 class="text-5xl sm:text-6xl font-semibold text-gray-matcha">Someone<br>
        is waiting<br>
        for you</h1>
      <h1 class="text-2xl text-gray-matcha pb-10 pt-6">Matcha is a free dating<br>
        app to find you a lover</h1>
      <button class="button-purple">Sign up</button>
    </div>

    <div class="image hidden md:inline-block overflow-hidden md:w-1/3">
      <img src="../assets/home/couple.jpeg" class="w-full h-full object-cover rounded-tr-lg rounded-br-lg">
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
      /*background-image: url('../assets/home/couple.jpeg');*/
      /*background-repeat: no-repeat;*/
      /*background-attachment: fixed;*/
      /*background-position: center;*/
      /*background-position-x: 200px;*/
      /*@apply rounded-lg;*/
    }
  }
}
</style>
