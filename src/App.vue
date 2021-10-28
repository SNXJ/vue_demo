<template>

  <button @click="testAxios">github排行榜</button>
  <ul>
    <li v-for="data in imgLists" :key="data.id">
      <h3>{{ data.login }}</h3>
      <img :src="data.avatar_url"/>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      imgLists: []
    }

  },
  methods: {
    testAxios () {
      axios.get('https://api.github.com/users')
        .then(response => {
          this.imgLists = response.data
          console.log('请求成功')
          // }
        }).catch(err => {
        alert('请求失败')
      })
    }
  }
}

</script>

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
