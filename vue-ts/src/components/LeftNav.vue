<template>

  <ul class="left ul">
    <li class="left li"
        v-for="(item,index) of leftNav"
        @click="leftItemClick(item)"
        :key="'left-${index}'">
      <a>
        {{ item }}
      </a>

    </li>
  </ul>

</template>

<script lang="ts">
export default {
  name: "LeftNav",
  data: () => ({
    leftNav: ["公司01", "公司02", "公司03", "公司04", "公司05"]
  })
  ,
  methods: {
    leftItemClick(str:string) {
      console.log("str:"+str)
    }
  }
}
</script>

<style lang="scss">
.ul {
  list-style-type: none;
  background-color: #42b983;
  margin: 0;
  padding: 0;
}

.li a {
  padding: 8px;
  display: block;
  color: #eeeeee;
  text-align: center;
}

/*鼠标*/
li a:hover {
  color: white;
  background-color: #555;
}

/*点击*/
li a:active {
  color: white;
  background-color: #555;
}


</style>
