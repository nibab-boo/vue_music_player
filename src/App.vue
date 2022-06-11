<template>
  <nav-bar :navigation="navigation" />
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <p><font-awesome-icon icon="trash" />This a trash.</p>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NavBar from "./components/NavBar";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
export default {
  name: "App",
  data() {
    return {
      navigation: navigation,
    };
  },
  components: {
    FontAwesomeIcon,
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
