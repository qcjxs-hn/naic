<template>
	<view>
		<view>
						<!-- 	{{dplatitude}}
							{{dplongitude}} -->
							
		<map style="width: 100%; height: 600px;" width="30" height="20" :latitude="dplatitude" :longitude="dplongitude" :markers="customIcons">
		</map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dplatitude:39.908823,
				dplongitude:116.39747,
				// 自定义POI图标
				customIcons: [
					{ latitude:39.908823,
				      longitude:116.39747,
				      iconPath: "../../static/appicon/nc2.png" },
				],
			}
		},
		onLoad(q) {
			console.log(q);
			this.getdp(q.dpmc);
			
		},
		methods: {
			// 获取店铺信息
			getdp(d) {
				if (d != null) {
					this.$request.get("/st/cxdp?d=" + d).then((res) => {
						if (res.code == 200) {
							this.customIcons[0].latitude=res.data.latitude;
							this.customIcons[0].longitude=res.data.longitude;
							this.dplatitude = res.data.latitude;
							this.dplongitude=res.data.longitude;
						}
					})
				}
			
			},
		}
	}
</script>

<style>

</style>
