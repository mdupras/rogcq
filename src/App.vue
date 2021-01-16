<template>
  <v-app :style="{ backgroundImage: `url(${require('./assets/bg.jpg')})` }">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
