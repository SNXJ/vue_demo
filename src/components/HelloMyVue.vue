<template>
  <HelloMyVue></HelloMyVue>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import { createApp } from 'vue'
// import { createApp } from 'vue'

export default {
  name: 'HelloMyVue'
}

createApp(HelloWorld).mount('HelloMyVue')
// Vue.createApp(HelloWorld).mount('#HelloMyVue')
</script>

<style scoped>

</style>
