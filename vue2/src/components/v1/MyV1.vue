<script lang="ts">
// defineProps({
//   msg: String
// })
import {ref, reactive} from "vue";
// export default defineProps({
//   msg:String
// });
interface DataItems {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default {
  name: "MyV1",
  setup() {
    const data = reactive({

      marks: ref(["记录01", "记录02", "记录03"]),
      checkItem: "",
      checkItemFun: (index: number) => {
        data.checkItem = data.marks[index];
      }
    })
    return {data}
    // const marks = ref(["记录01", "记录02", "记录03"]);
    // const checkItem = ref("");
    // const checkItemFun = (index: number) => {
    //   checkItem.value = marks.value[index];
    // }

    // return {
    //   marks,
    //   checkItem,
    //   checkItemFun
    // };
  },
};


</script>

<template>
  <h1>{{ name }}</h1>
  <img alt="Vue logo" src="/src/assets/ic_foot.png"/>
  <div>欢迎留下你的记录</div>
  <button
      v-for="(mark,index) in data.marks"
      @click="data.checkItemFun(index)"
      v-bind:key="index"
  >{{ index }}---->名字：{{ mark }}
  </button>
  <div>你选择的是：{{ data.checkItem }}</div>

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
