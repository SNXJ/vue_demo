<template>

  <li class="item-li">
    <input type="checkbox" v-model="checked">
    <span class="item-text">
    <slot></slot>
    </span>
    <span class="item action">
      <button class="btn-btn01" @click="handleDetail">
        详情
      </button>
      <button class="btn-btn02" @click="handleRemove">
        删除
      </button>
    </span>
  </li>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapMutations} from 'vuex'
import {useStore} from '../store'

export default defineComponent({
  name: "ItemList",
  data: () => ({
    checked: false
  })
  ,
  props: {
    itemId: {
      type: String,
      required: true
    }
  },
  methods: {
    handleDetail() {
      console.log("======>detail")
      this.$emit("detail", this.itemId);
    },
    handleRemove() {
      console.log("======>remove")
      this.$emit("remove", this.itemId);
    },


  }
})
</script>

<style lang="scss">


.btn {
  color: white;
  font-size: 12px;

  &-btn01 {
    background-color: powderblue;
  }

  &-btn02 {
    margin-left: 10px;
    background-color: #42b983;
  }

}

</style>
