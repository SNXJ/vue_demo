<template>
  <div class="text">
    <div>page about</div>
    <template v-if="detail">
      <h1>{{ detail.text }}</h1>
      <div>创建时间：{{ detail.time }}</div>
    </template>
    <div v-else class="empty">别看了这里啥也没有</div>
  </div>

</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from '../store'
import router from "../router";
import {ItemState} from "../types/store";
import {isEmpty} from "element-plus/es/utils/util";

export default defineComponent({
  name: "About",
  setup() {
    const route = useRoute()
    const store = useStore()
    const {item} = route.params;
    console.log('=====params=item=='+item)
    //JSON.parse()
    //JSON.stringify() 否则传递的参数是【object,object】
    if (item == "{}") {
      console.log('=====params=空==')
      return
    }
    const detail = JSON.parse(item)

    //state传递不成功
    // const detail = store.state.todoListMap[`${item}`];

    return {
      // const {item} = route.params;
      // detail: computed(() => store.state.todoListMap['${item}']),
      detail
    }
  },


})
</script>

<style scoped>

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  color: #304455;
  text-align: center;
  height: 200px;
}
</style>
