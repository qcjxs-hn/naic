import Vue from "vue"
import Vuex from 'vuex'
import { loginByMobile } from '@/api/login.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: new String(),
    userId: new String(),
    userInfo: new Object(),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
  },
  actions: {
    // 登录
    Login({ commit }, { userInfo }) {
		console.log(1);
		console.log(userInfo);
      // 微信手机号登录
      userInfo.type = 'WX_MP'
      delete userInfo.errMsg
      return new Promise((resolve, reject) => {
        loginByMobile(userInfo).then(response => {
          if (response.code == 200) {
            uni.setStorageSync('USER_ID', response.data.userId)
            uni.setStorageSync('ACCESS_TOKEN', response.data.token)
            uni.setStorageSync('userxx', response.data.data.data)
            commit('SET_USERID', response.data.userId)
            commit('SET_TOKEN', response.data.token)
            commit('SET_USER', response.data)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_USERID', new String())
        commit('SET_TOKEN', new String())
        commit('SET_USER', new Object())
        uni.removeStorageSync('USER_ID')
        uni.removeStorageSync('ACCESS_TOKEN')
        uni.removeStorageSync('userxx')
        resolve('200')
      })
    },
  },
})

export default store
