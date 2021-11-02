<template>
  <div>{{ result }}</div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({result: "这是异步耗时的结果"})
      }, 2000)

    })
  }
})
</script>

<style scoped>

</style>
