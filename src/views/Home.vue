<template>
  <v-row class="text-center">
    <v-col>
      <h1>Welcome to ROGCQ</h1>
      <v-row>
        <v-col>
          <v-img height="400" width="400" :src="require('../assets/under-construction.gif')" />
        </v-col>
        <v-col>
          <v-img height="400" width="400" :src="require('../assets/under-construction.gif')" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="flex justify-center align-center">
          <v-img height="400" width="400" :src="require('../assets/baby.gif')" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>
