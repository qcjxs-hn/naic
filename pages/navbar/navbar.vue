<template>
	<view>
		
		<uni-nav-bar class="navstyle" border="false" :fixed="true" shadow left-icon="left" size="10" color="crimson" left-text="订单结算" @clickLeft="back" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
							uni.navigateBack({
								delta: 1
							})
						},
		}
	}
</script>

<style>
.navstyle{
	margin-top: -10%;
}
</style>
