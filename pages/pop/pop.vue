<template>
	<view>
		<u-popup :show="show1" :round="10" mode="bottom"  closeable>
				<view>
		            <text>人生若只如初见，何事秋风悲画扇</text>
				</view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			show1:Boolean
		},
		data() {
			return {
				show1:false
			}
		},
		methods: {
			// close() {
			// 	this.show1=false;
			// },
			// open() {
			// 	this.show1=true;
			// }
		}
	}
</script>

<style>

</style>
