<template>
  <div class="text">
    <h3 class="text">add list</h3>
    <div class="div">
      <input class="input"
             type="text"
             v-model="inputValue"
             :placeholder="placeholder"
             @keydown.enter="handleAdd">
      <button class="btn add" @click="handleAdd">添加</button>
      <button class="btn add" @click="handleRemove">删除</button>
    </div>

    <ul class="ul">
      <template v-if="showList">
        <item-list v-for="(item,index) of list"
                   :key="'li-${index}-${item.key}'"
                   :item-id="item.key"
                   @remove="this.removeItem(index)"
                   @detail="this.detailItem(JSON.stringify(item))"
        >{{ item.text }}
        </item-list>
      </template>
      <div v-else class="empty">{{ emptyText }}</div>
    </ul>


  </div>

</template>

<script lang="ts">

import ItemList from '../components/ItemList.vue';
import {defineComponent, computed, ref} from "vue"
import {mapMutations} from 'vuex'
import {useStore} from '../store'
import {getHash, dateFormat} from '../utils/utils';
import {useRouter} from "vue-router";
import {ItemState} from "../types/store";

export default ({
  name: "Home"
  ,
  components: {
    ItemList
  },
  data: () => ({
    inputValue: '',
    placeholder: '请输入内容，回车添加',
    emptyText: '暂时没有内容',
    // list: []
  }),
  setup() {
    const router = useRouter();
    const store = useStore();
    const {
      addItem,
      removeItem,
    } = mapMutations(['addItem', 'removeItem']);
    const detailItem = (id: string) => {
      router.push(`/about/${id}`);
    };
    return {
      list: computed(() => store.state.todoList),
      addItem: addItem,
      removeItem: removeItem,
      detailItem,
    };
  },
  methods: {
    handleAdd() {
      if (!this.inputValue) {
        console.log("输入内容为空")
        return
      }
      const item = {
        text: this.inputValue,
        key: getHash(8),
        time: dateFormat(new Date()),
      }
      this.addItem(item);
      this.inputValue = ""
    },
    handleRemove() {
      this.list.pop()
    }
  }
  ,
  computed: {
    showList(): boolean {
      console.log("showList=====")
      return !!(this.list && this.list.length);
    }
  }
})
</script>

<style scoped>

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  text-align: center;
}

.ul {
  color: #42b983;
}

.div {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;

}

.input {
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  height: 30px;
  width: 200px;
}

.btn {
  border-radius: 6px;
  margin-left: 10px;
  width: 60px;
  background-color: #42b983;
  color: white;
}

</style>
