<template>
  <div class="header">
    <div class="logo cp" @click="route2home">SNXJ</div>
    <div class="nav-wrapper">
      <router-link
          class="nav cp"
          v-for="(item,index) of navs"
          :key="'nav-${index}'"
          :to="item.path"
      >{{ item.name }}
      </router-link>

      <span class="nav-user">
      <span
          v-if="userInfo.user"
          class="nav-user"
      >Hello, {{ userInfo.user }}</span>
        <!-- 登录按钮 -->
    <button
        v-else
        class="button nav-button"
        @click="() => { visible = true }"
    >登陆</button>
      </span>

      <modal
          v-model="visible"
          width="400px">
        <!--弹窗插入内容-->
        <template v-slot:header>
          <div class="sign-in-heaer">
            <div class="sign-in-heaer_title">
              ——<span>登 录</span>——
            </div>
            <p class="sign-in-header_sub">Let's begin</p>
          </div>
        </template>
        <sign-in-form ref="signInForm"/>
        <template v-slot:footer>
          <div class="sign-in-footer">
            <button class="button primary" @click="handleSubmit">确认</button>
            <button class="button" @click="closeModal">取消</button>
          </div>
        </template>

      </modal>

    </div>
    <div>


    </div>
  </div>


</template>

<script lang="ts">

import {defineComponent} from 'vue';

import {mapState, mapMutations} from 'vuex';
import router from "../router";
import Modal from "./Modal.vue";
import SignInForm from "./SignInForm.vue";

export default defineComponent({
  name: "Header",
  components: {Modal, SignInForm},
  data: () => ({
    navs: [
      {name: '首页', path: '/'},
      {name: '应用', path: '/apps'},
      {name: '关于', path: '/about/{}'},
    ],
    // 是否显示注册弹窗
    visible: false,
  }),
  methods: {
    route2home() {
      // alert("tohome")
      this.$router.push("/")
    },
    loginClick() {
      this.visible = true
      console.log("visible===>" + this.visible)
    },
    handleSubmit() {
      const inputData = (this.$refs.signInForm as any).getValue()
      console.log('input：===>' + inputData.user + "<======>" + inputData.password)
      this.updateUserInfo({...inputData});
      this.closeModal();
    },
    closeModal() {
      this.visible = false
    },
    ...mapMutations([
      'updateUserInfo',
    ]),

  },
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },

})
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  background: #2c3e50;

  .logo,
  .nav-wrapper {
    padding: 0 16px;
    height: 48px;
    line-height: 48px;
    color: white;
  }

  .nav-wrapper {
    flex: 1;
    width: 100%;
  }

  .nav {
    display: inline-block;
    padding: 0 8px;
    overflow: auto;
    color: white;
    /*下划线样式*/
    text-decoration: none;
    transition: all 300ms;

    &:hover {

      background-color: #4CAF50;
      color: white;
    }

    &-button {
      position: absolute;
      width: 80px;
      right: 0px;
      border-color: transparent;
      padding: 8px 16px;
      color: #42b983;
      flex: 3;
      margin-right: 16px;

      &:hover {
        background-color: white;
        border-color: transparent;
      }
    }

    &-user {
      position: absolute;
      right: 0px;
      padding: 8px 16px;
      color: white;
      font-weight: 300;
    }
  }
}

.sign-in {
  &-heaer {
    text-align: center;
    width: 100%;

    &_title {
      font-size: 14px;
      color: gray;

      span {
        font-size: 20px;
        font-weight: 500;
        color: #2c3e50;
        margin: 0 12px;
      }
    }

    &_sub {
      font-size: 14px;
      color: gray;
      margin: 4px 0;
    }
  }

  &-footer {
    text-align: center;
  }

  .primary {
    color: #304455;
  }
}

</style>
