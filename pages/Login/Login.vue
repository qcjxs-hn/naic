<template>
  <view class="wx-login">

    <u-button type="primary" text="微信用户一键登录" open-type="getPhoneNumber" :plain="true" @getphonenumber="getUserPhoneNumber"></u-button>
  </view>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    async created() {
      this.code = await this.getAppCode()
    },
    data() {
      return {
        // 用户凭证
        code: new String(),
		
      }
    },
	
    methods: {
      ...mapActions(['Login']),
      // 微信用户手机号登录
      getUserPhoneNumber(event) {
        if(event.detail.errMsg !== 'getPhoneNumber:ok') return
        uni.showToast({
          title: '登录中',
          icon: 'loading',
          mask: true
        })
        event.detail.code = this.code
        this.Login({ userInfo: event.detail }).then(async ({ code, msg}) => {
          if (code == 200) { // 登录成功，跳转首页
		  console.log(code, msg);
		    // uni.setStorageSync('userxx',res.data)
            uni.reLaunch({ url: '../me/me' })
			uni.switchTab({
				url: '../me/me'})
		
          }  else {
            this.code = await this.getAppCode()
            uni.showToast({
              icon: 'none',
              title: msg,
              duration: 2000
            })
          }
        })
      },
      // 获取code
      getAppCode() {
        return new Promise((resolve, reject) => {
          // #ifdef MP-WEIXIN
          uni.login({
            provider: 'weixin',
            success(res) {
              resolve(res.code)
            },
            fail(err) {
              reject(err)
            }
          })
          // #endif
          // #ifdef MP-ALIPAY
          my.getAuthCode({
            scopes: 'auth_base',
            success(res) {
              resolve(res.authCode)
            },
            fail(err) {
              reject(err)
            }
          })
          // #endif
        })
      },  
    }
  }
</script>

<style lang="less" scoped>
  .wx-login {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 32rpx 60rpx;

    button {
      font-size: 28rpx;
      font-weight: 400;
    }
  }
</style>
