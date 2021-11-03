<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

import {computed, defineComponent} from 'vue'
import {useStore} from './store'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore()

    const count: any = computed({
      get() {
        return store.state.count
      },
      set(value) {
        store.commit('increment', value)
      }
    })

    function addCount() {
      count.value += 1
    }

    return {
      count,
      addCount
    }
  }
})

</script>

<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png"/>-->
  <!--  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
  <svg-icon icon-class="bug"></svg-icon>
  <br>
  <button @click="addCount">count is: {{ count }}</button>
  <br>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <br>




</template>

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
