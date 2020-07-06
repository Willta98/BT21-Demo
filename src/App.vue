<template>
  <div id="app">
     <!-- <Navbar></Navbar> -->
     <Alert></Alert>
     <router-view></router-view>
  </div>
</template>

<script>
import Alert from "./components/AlertMessage";
import $ from "jquery";

export default {
 components: {
    Alert,
  },
};
</script>

<style lang="scss">
@import "~@/assets/all.scss"
</style>
