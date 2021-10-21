<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <HelloMyVue msg="Welcome to demo"/>
</template>

<script>
import HelloMyVue from './components/HelloMyVue.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloMyVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
