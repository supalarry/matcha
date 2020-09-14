<template>
  <div id="app" class="antialiased">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/shared/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  @apply bg-white-matcha;
}
html,
body,
#app {
  height: 100%;
}

</style>
