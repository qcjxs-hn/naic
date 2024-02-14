<template>
	<view style="margin-bottom: 2%;">
		
		<view v-for="(item,i) in ddcd" :key="i" @click="tzddztym(item,zt)">
		<uni-card :title="item.dpmc" :sub-title="getsubzt(item.sfwm)" style="font-size: 4px;" :extra="getExtraText(item.sfzf)" padding="10px 0" :thumbnail="avatar">
			<view  v-for="(it,i2) in item.shoppingcar" :key="i2" style="margin-top: 5px;">
				<u--image :src="getImageSrc(it)" radius="10" width="50px" height="50px" ></u--image>
			</view>
			<view  style="width: 100%;height: 20px;align-content: rigth;margin-top: 5%;">
				<text style="font-size: 8px;">{{item.createdate}}</text>
				<text style="margin-left: 60%; font-size: 8px;">
				  共{{item.shoplength}}件,合计
				</text>
				<text style="color: red; font-weight: bold;font-size: 10px;">¥{{item.yfhj}}</text>
			</view>
			<view slot="actions" class="card-actions">
				<u-button size="small" type="primary" shape="circle" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="zlyd(item,dpwz)"  text="再来一单"></u-button>
			</view>
		</uni-card>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			ddcd: {
				type: Array,
				default: () => [],
			},
			dpwz:String,
			
		},
		data() {
			return {
				zt:0,
				wz:'',
				
			}
		},
		methods: {
		
			//显示额外信息
			 getExtraText(sfzf) {
			      // 根据 sfzf 的值返回不同的文字
			      return sfzf === "1" ? '已支付' : '已取消';
			    },
				//显示商品图片
				getImageSrc(it){
					if(it.nctpurl!=null){
						return it.nctpurl;
					}else{
						return this.$tpurl+"%E7%82%B9%E9%A4%90.png";
					}
				},
				//显示是否自提
				getsubzt(sfwm){
					return sfwm === "0" ? '自提' : '外卖';
				},
				//跳转订单状态页面
				tzddztym(it,zt){
					console.log(zt);
					if(zt==0){
							uni.navigateTo({
								// url:'../ncfly/ncfly?i='+czid
								url: `../ddztym/ddztym?ddcd=${encodeURIComponent(JSON.stringify(it))}`,
							})
							this.zt=zt;
					}else{
						this.zt=0;
					}
				},
				zlyd(it,dpwz){
					this.zt=1;
					// console.log("111");
					// console.log(it);
					// console.log(dpwz);
					this.tzddjsym(it);
				},
				tzddjsym(it){
					const i=it.sfwm;
					this.dpmc=it.dpmc;
					// console.log(this.dpwz);
					this.wz=it.buyuseraddress;
					this.distance=it.dpjl;
					this.shoppingCar=it.shoppingcar;
					uni.navigateTo({
						url: `../ddjsym/ddjsym?sfwm=${i}&dpmc=${this.dpmc}&wz=${this.wz}&distance=${this.distance}&dpwz=${this.dpwz}&shoppingCar=${encodeURIComponent(JSON.stringify(this.shoppingCar))}`,
					})
				},
			
		},
		
	}
</script>

<style>
.card-actions{
	width: 5%;
	margin-left: 80%;
	margin-bottom: 2%;
	
}
</style>