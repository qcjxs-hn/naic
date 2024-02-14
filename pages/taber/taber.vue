<template>
	<view>
		<u-tabbar
			:value="value5"
			:fixed="false"
			@change="change5"
			:safeAreaInsetBottom="true"
			:placeholder="false"
			
		>
			<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
			<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
			<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			change5(name) {
				if (name === 1) return uni.$u.toast('请您先登录')
				else this.value5 = name
			},
		}
	}
</script>

<style>

</style>
