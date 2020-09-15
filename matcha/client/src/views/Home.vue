<template>
  <!-- eslint-disable max-len -->
  <!-- eslint-disable no-trailing-spaces -->
  <div class="home mx-4">
  <section class="shadow-lg mb-8 h-full flex rounded-lg">
    <div class="intro text-center bg-white-matcha rounded-lg w-full md:w-2/3
flex flex-col justify-center md:rounded-tr-none md:rounded-br-none">
      <h1 class="text-5xl sm:text-6xl font-semibold text-gray-matcha">Someone<br>
        is waiting<br>
        for you</h1>
      <h1 class="text-2xl text-gray-matcha pb-10 pt-6">Matcha is a free dating<br>
        app to find you a lover</h1>
      <button class="button-purple">Get started</button>
    </div>

    <div class="image hidden md:inline-block overflow-hidden md:w-1/3">
      <img src="../assets/home/couple.jpeg" class="w-full h-full object-cover rounded-tr-lg rounded-br-lg">
    </div>
  </section>

    <div class="pitch shadow-lg rounded-lg py-8 px-8 mb-8 w-full flex flex-col justify-center lg:px-16">
      <h1 class="text-4xl md:text-6xl py-8 text-white-matcha text-center font-bold">Set up dates effortlessly</h1>
      <h1 class="text-2xl py-4 text-white-matcha text-center">No more awkward approaches</h1>
      <h1 class="text-2xl py-4 text-white-matcha text-center">No more lonely Friday nights</h1>
    </div>

    <div class="w-full mb-8 rounded-lg shadow-lg">
      <div class="relative rounded-lg" style="padding-bottom: 70%">
        <img src="../assets/home/couple2.jpg" class="absolute object-cover h-full w-full rounded-lg">
        <h1 class="text-gray-matcha text-2xl sm:text-5xl lg:text-6xl font-bold absolute bottom-0 w-full p-8"><span class="bg-white-matcha">"I met Lauris via Matcha, and he
          is cooler than Brad Pitt fo sure" - Mary</span></h1>
      </div>
    </div>

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

.pitch {
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
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
