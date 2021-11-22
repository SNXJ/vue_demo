<template>

  <div class="nav">
    <Header/>
    <LeftNav/>
  </div>


</template>

<script>
import LeftNav from "./LeftNav.vue";
import Header from "./Header.vue";

export default {
  name: "NavView",
  components: {Header, LeftNav}
}
</script>

<style lang="scss">

.nav {
  direction: ltr;
}

</style>
