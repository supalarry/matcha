<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable no-trailing-spaces -->
  <div class="home mx-4">
  <section class="shadow-lg md:shadow-2xl mb-8 h-full flex rounded-lg">
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

  <section class="w-full md:flex mb-8">
    <div class="md:inline-block md:w-2/3 mb-8 md:mb-0">
      <div class="relative rounded-lg" style="padding-bottom: 100%">
        <img src="../assets/home/couple2.jpg" class="absolute object-cover h-full w-full rounded-lg md:rounded-tr-none md:rounded-br-none">
        <h1 class="text-gray-matcha text-2xl sm:text-5xl lg:text-6xl font-bold absolute bottom-0 w-full p-8"><span class="bg-white-matcha">"I met Lauris via Matcha, and he
          is cooler than Brad Pitt fo sure" - Mary</span></h1>
      </div>
    </div>
    <div class="bg-purple-matcha md:bg-white-matcha shadow-lg md:shadow-2xl rounded-lg py-8 px-8 md:w-1/3 flex flex-col justify-center
md:rounded-tl-none md:rounded-bl-none lg:px-16">
      <h1 class="text-4xl md:text-2xl md:font-normal md:text-gray-matcha py-4 text-white-matcha text-center font-bold">Set up dates effortlessly</h1>
      <h1 class="text-2xl py-4 text-white-matcha md:text-gray-matcha text-center">No awkward approaches</h1>
      <h1 class="text-2xl py-4 text-white-matcha md:text-gray-matcha text-center">No more lonely evenings</h1>
    </div>
  </section>
  </div>
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
