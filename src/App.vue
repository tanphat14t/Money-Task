<template>
  <header-nav />
  <router-view />
</template>

<script>
import headerNav from "./components/headerNav.vue";
export default {
  name: "App",
  components: {
    headerNav: headerNav,
  },
  // created() {
  //   console.log(document.querySelector("h1"));
  // },
  // mounted() {
  //   console.log(document.querySelector("h1"));
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
