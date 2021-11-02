<script lang="ts">

import {ref, reactive} from "vue";
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked} from "vue";
import {nowTime, getNowTime} from "/src/hooks/useNowTime";
import {useUrlAxios} from "/src/hooks/useURL";
import modal from "/src/components/Modal.vue";
import AsyncShow from "/src/components/AsyncShow.vue";
import AsyncShow from "../AsyncShow.vue";
import NetShow from "../NetShow.vue";


const vue2 = {
  name: "MyV3",
  components: {
    AsyncShow,
    NetShow,
  },
  setup() {
    return {}

  },
};
export default vue2;

</script>

<template>
  <title>Suspense包裹</title>
  <div>异步方式</div>
  <Suspense>
    <template #default>
      <async-show></async-show>
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <!--      <async-show></async-show>-->
      <net-show></net-show>
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>


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
