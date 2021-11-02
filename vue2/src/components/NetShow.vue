<template>
  <img style="height: 100px" :src="result.imgUrl">

</template>

<script>
import {defineComponent} from "vue"
import axios from "axios"

export default defineComponent({
  async setup() {
    const rawData = await axios.get("https://apiblog.jspang.com/default/getGirl")
    return {
      result: rawData.data
    }
  }
})
//或者Promise方式
// export default defineComponent({
//   setup() {
//     return new Promise((resolve, reject) => {
//       axios.get("https://apiblog.jspang.com/default/getGirl").then(result => {
//         console.log("======>" + result.data.imgUrl)
//         return resolve({result: result.data})
//
//       })
//
//     })
//   }
// })

</script>

<style scoped>

</style>
