<template>
  <div class="header" style="background-image: url(image/headerPaper.jpg)">
    <v-layout align-center>
      <div class="logo" @click="goHome">문형곤의 포트폴리오</div>
      <v-spacer></v-spacer>
      <v-btn text @click="goProfil">Profil</v-btn>
      <v-btn text @click="goIntroduce">Introduce</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProfil() {
      this.$router.push("/profil");
    },
    goIntroduce() {
      this.$router.push("/introduce");
    },
  },
};
</script>

<style scoped>
.header {
  padding: 20px;
  box-shadow: 0px -3px 10px black inset;
  background-size: cover;
  background-position: center center;
}
.header .logo {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>