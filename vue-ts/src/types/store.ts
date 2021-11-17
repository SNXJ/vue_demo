// 用户信息
export interface UserState {
    user: string;
    password: string;
}

export interface ItemState {
    text: string;
    key: string;
    time: string;
}

export interface RootState {
    count: number
    userInfo: UserState;
    todoList: Array<ItemState>;
    todoListMap: object;
}

