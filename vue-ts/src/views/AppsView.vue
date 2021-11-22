<template>
  <div class="contain">

    <ul class="app-ul">
      <li class="apps li" v-for="(item,index) of this.appList"
          @click="this.appCheck(index)"
          :key="'app-${index}'">
        <a>
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="app-child" v-if="this.hasChild">
      <div v-for="(itemchild,index) of this.childAppList"
           @click="ItemChildClick(item)"
           :key="'app-child-${index}'">
        <div class="app-child-item">{{ itemchild }}</div>
      </div>
    </div>
    <div v-else>
      <h3 class="app-child">没有子APP</h3>
    </div>
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
  name: "Apps"
  ,
  components: {},
  data: () => ({
    inputValue: '',
    placeholder: '请输入内容，回车添加',
    emptyText: '暂时没有内容',
    appPoint: 0,
    hasChild: false,
    childAppList: [],
    appList: [
      {
        name: "app01",
        childList: [
          "app11",
          "app12",
          "app13",
          "app14",
          "app15",
        ]
      },
      {
        name: "app02",
        childList: [
          "app21",
          "app22",
          "app23",
          "app24",
          "app25",
        ]
      },
      {
        name: "app03",
        childList: [
          "app31",
          "app32",
          "app33",
          "app34",
          "app35",
        ]
      },
      {
        name: "app04",
      },
    ]
  }),
  mounted() {
    this.appPoint = 0
  },
  computed: {
    // hasChild(): boolean {
    //   return (this.childAppList && this.childAppList.length)
    // },
  },
  methods: {
    appCheck(p: number) {
      this.appPoint = p
      this.childAppList = this.appList[p].childList
      this.hasChild = !!(this.childAppList && this.childAppList.length)
    }
  },
  setup() {
    const router = useRouter();
    const store = useStore();
  }
})
</script>

<style lang="scss">

.contain {
  display: flex;
  flex: 1;
  flex-direction: column;

}


.app-ul {
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style-type: none;
  background-color: #42b983;
  margin: 0;
  padding: 0;
}

li a {
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

.app-child {
  text-align: center;
  color: white;
  display: block;

  &-item {
    height: 60px;
  }
}

</style>
