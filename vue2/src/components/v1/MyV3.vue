<script lang="ts">

import {ref, reactive} from "vue";
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked} from "vue";
import {nowTime, getNowTime} from "/src/hooks/useNowTime";

const vue2 = {
  name: "MyV3",
  setup() {
    //或者引入useNowTime 某块
    // const nowTime = ref("00:00:00");
    // const getNowTime = () => {
    //   const now = new Date()
    //   const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    //   const minu = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    //   const sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    //   nowTime.value = hour + ":" + minu + ":" + sec
    //   //每秒刷新
    //   setTimeout(getNowTime, 1000)
    // }
    onMounted(() => {
      console.log("<=====onMounted====>")
      getNowTime()

    })
    //注意return
    return {
      nowTime,
      getNowTime
    }

  },
};
export default vue2;

</script>

<template>
  <title>模块化</title>
  <div>欢迎留下你的记录</div>

  <div>当前时间:{{ nowTime }}</div>

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
