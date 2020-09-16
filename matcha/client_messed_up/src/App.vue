<template>
  <div id="app" class="antialiased">
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
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
