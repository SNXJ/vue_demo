<script lang="ts">
// defineProps({
//   msg: String
// })
import {ref, reactive} from "vue";
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked} from "vue";
// export default defineProps({
//   msg:String
// });
// interface DataItems {
//   girls: string[];
//   selectGirl: string;
//   selectGirlFun: (index: number) => void;
// };

const vue2 = {
  name: "MyV2",
  setup() {
    console.log("1-开始创建组件-----setup()");
    const data = reactive({
      marks: ref(["记录01", "记录02", "记录03"]),
      checkItem: "",
      checkItemFun: (index: number) => {
        data.checkItem = data.marks[index];
      },
    });

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });
    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });
    // onRenderTracked((event) => {
    //   console.log("状态跟踪组件----------->");
    //   console.log(event);
    // });
    return {data}
  },
};
export default vue2;

</script>

<template>
  <title>生命周期,钩子函数</title>
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
