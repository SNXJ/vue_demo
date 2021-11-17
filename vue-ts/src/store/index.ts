import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'
import type {App} from 'vue'
import {RootState, UserState, ItemState} from "../types/store";

// InjectionKey 将store安装到Vue应用程序时提供类型,将类型传递InjectionKey给useStore方法
// 手动声明 state 类型
// export interface State {
//     count: number
// }

// 定义注入类型
const key: InjectionKey<Store<RootState>> = Symbol()

// @ts-ignore
const store = createStore<State>({
    state() {
        return {
            count: 0,
            userInfo: {
                user: '',
                password: '',
            },
            todoList: [] as Array<ItemState>,
            todoListMap: {},
        }
    },
    mutations: {
        increment(state: RootState) {
            state.count++
        },
        updateUserInfo(state: RootState, payload: UserState) {
            state.userInfo = payload;
        },

        addItem(state: RootState, payload: ItemState) {
            console.log("========add====")
            const {key} = payload
            state.todoList.push(payload);
            JSON.stringify(key)
            state.todoListMap[JSON.stringify(key)] = payload
        },
        removeItem(state: RootState, index: Number) {
            console.log("========remove====")
            const {key} = state.todoList[index]
            state.todoListMap[JSON.stringify(key)] = null
            state.todoList.splice(index, 1)

        },

    }
})

// 将类型注入useStore，似乎无效
export function useStore() {
    return baseUseStore(key)
}

export function setupStore(app: App<Element>) {
    app.use(store, key)
}

export default store
