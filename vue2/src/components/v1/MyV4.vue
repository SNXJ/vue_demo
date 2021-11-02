<script lang="ts">

import {ref, reactive} from "vue";
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked} from "vue";
import {nowTime, getNowTime} from "/src/hooks/useNowTime";
import {useUrlAxios} from "/src/hooks/useURL";
import modal from "/src/components/Modal.vue";


const vue2 = {
  name: "MyV3",
  components: {
    modal,
  },
  setup() {

    const {result, loading, loaded, error} = useUrlAxios("https://dog.ceo/api/breeds/image/random");
    onMounted(() => {
      console.log("<=====onMounted====>")
      getNowTime()

    })
    //注意return
    return {
      nowTime,
      getNowTime,
      result,
      loaded,
      loading,
      error
    }

  },
};
export default vue2;

</script>

<template>
  <title>异步网络请求</title>
  <div>欢迎留下你的记录</div>
<!--  直接使用 都是在app内的-->
<modal></modal>
  <div>当前时间:{{ nowTime }}</div>
  <div v-if="loading">加载中...</div>
  <div v-if="error">出错：{{ error.msg }}</div>
  <img v-if="loaded" style="height: 100px" :src="result.message">
  <br>
  <button style="width:100px;height: 100px;background-color: #42b983" @click="getImg()">更换</button>


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
