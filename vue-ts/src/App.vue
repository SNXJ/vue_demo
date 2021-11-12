<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

import {computed, defineComponent} from 'vue'
import {useStore} from './store'
import Header from "./components/Header.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
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
  <Header/>
  <!--  路由页面渲染在这里-->
  <div class="main">
    <router-view/>
  </div>

  <!--  <svg-icon icon-class="bug"></svg-icon>-->
  <!--  <br>-->

  <!--  <button @click="addCount">count is: {{ count }}</button>-->
  <!--  <br>-->
  <!--  <el-button type="primary" icon="el-icon-search">搜索</el-button>-->
  <!--  <br>-->

</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  flex: 1;
  padding: 12px 20px;
}

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 10px;*/
/*}*/
</style>
