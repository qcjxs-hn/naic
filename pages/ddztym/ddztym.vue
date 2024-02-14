<template>
	<view>
		<view style="background-color: crimson;height: 120px;width: 100%; align-items: center;">
			<text style="height: 100px;"></text>
			<text style="margin-top: 50%;margin-left: 2%;color: aliceblue;width: 100px;height: 26px;"
				v-if="ddcd.sfzf==0">订单已取消</text>
			<text style="margin-top: 50%;margin-left: 2%;color: aliceblue;width: 100px;height: 26px;"
				v-if="ddcd.sfzf==1">订单已完成</text>
		</view>
		<view>
			<u-popup :overlay="false" :show="true" mode="bottom" round="10" style="height: 610px;">
				<view class="flex-item flex-item-V uni-bg-white" style="height: 610px;">
					<!-- 地址栏 -->
					<uni-card :is-shadow="false" style="height: 50px;">
						<uni-grid :column="2" :highlight="false" :showBorder="false" :square="false">
							<uni-grid-item style="width: 20px;" v-if="ddcd.sfwm==0"><u-icon
									:name="tpurl+'%E5%95%86%E5%BA%97.png'"></u-icon></uni-grid-item>
							<uni-grid-item style="width: 20px;" v-if="ddcd.sfwm==1"><u-icon
									:name="tpurl+'%E5%A4%96%E5%8D%96%E7%9B%92.png'"></u-icon></uni-grid-item>
							<uni-grid-item style="width:230px;height:20px;">
								<text class="uni-body" style="width: 230px;height: 20px;font-size: 13px;" @click="tzdw()"
									v-if="ddcd.sfwm==0">{{ddcd.dpmc}}></text>
								<text class="uni-body" style="width: 230px;height: 20px;font-size: 13px;"
									v-if="ddcd.sfwm==1">{{ddcd.buyuseraddress}}</text>
							</uni-grid-item>
						</uni-grid>
						<uni-grid :column="3" :highlight="false" :showBorder="false" :square="false">
							<uni-grid-item style="width: 16px;"><u-icon name="map"></u-icon></uni-grid-item>
							<uni-grid-item style="width: auto;height: 20px;">
								<text class="uni-body" v-if="ddcd.dpjl<1"
									style="width:  auto;height: 20px; font-size: 12px;">直线距离：{{(ddcd.dpjl*1000+"").substring(0,3)}}米</text>
								<text class="uni-body" v-else
									style="width:  auto;height: 20px; font-size: 12px;">直线距离：{{(ddcd.dpjl+"").substring(0,3)}}千米</text>
							</uni-grid-item>
							<uni-grid-item style="width: auto;height: 20px;">
								<text class="uni-body"
								@click="tzdw()"
									style="width: 200px;height: 20px;font-size: 10px;">{{"|"+dpwz+">"}}</text>
								
							</uni-grid-item>
						</uni-grid>
						<view v-for="(ncit,ic) in shoppingCar" :key="ic" :style="'height: '+cardh+'px;'">
							<uni-list-chat :style="'height: '+cardh+'px;'" :title="ncit.name" :avatar="ncit.nctpurl"
								:note="`${ncit.jl[0] !== undefined ? ncit.jl[0] + '/' : ''}${ncit.jl[1] !== undefined ? ncit.jl[1] + '/' : ''}${ncit.bx}/${ncit.wd}/${ncit.td}`"
								badge-positon="left">
								<view class="chat-custom-right">
									<u-grid col="2">
										<u-grid-item :customStyle="{width:4+'px'}">
											<u--text type="error" style="width: 12px; margin-left: 20%;" text="¥"
												size="10"></u--text>
										</u-grid-item>
										<u-grid-item :customStyle="{width:12+'px'}">

											<u--text type="error" style="width: 20px;" :text="ncit.ncjg"
												size="16"></u--text>
										</u-grid-item>
									</u-grid>
								</view>
							</uni-list-chat>
							<view>
								<u-grid col="3">
									<u-grid-item>
										<view style="margin-left: 50%; width: 100%;">
											<u-grid col="2">
												<u-grid-item :customStyle="{width:4+'px'}">
													<u--text type="error" style="width: 12px; margin-left: 20%;"
														text="x" size="12"></u--text>
												</u-grid-item>
												<u-grid-item :customStyle="{width:12+'px'}">
													<u--text type="error" style="width: 20px;" :text="ncit.bjz"
														size="20"></u--text>
												</u-grid-item>
											</u-grid>
										</view>
									</u-grid-item>
									<u-grid-item></u-grid-item>
									<u-grid-item>
									</u-grid-item>
								</u-grid>
							</view>
						</view>
						<u-gap height="1" style="width: 90%;" bgColor="#2979ff"></u-gap>
						<view>
							<!-- <uni-grid :column="2" :highlight="false" :showBorder="false" :square="false">
							<uni-grid-item style="width: 80%;"></uni-grid-item>
							<uni-grid-item > -->
							<view style="width: 100%;height: 20px;align-content: rigth;">
								<text style="margin-left: 80%; font-size: 8px;">
									共{{teacount}}件,合计
								</text>
								<text style="color: red; font-weight: bold;font-size: 10px;">¥{{teaprice}}</text>
							</view>
							<!-- </uni-grid-item>
							</uni-grid> -->
						</view>
					</uni-card>
					<uni-card>
						广告
					</uni-card>
					<uni-card>
						<u--text type="primary" :text="xdsj+ddcd.createdate"></u--text>
						<u--text type="primary" :text="ddbh+ddcd.createid"></u--text>
						<u--text type="primary" :text="bz+ddcd.ddbz"></u--text>
					</uni-card>
					<view slot="actions" class="card-actions">
						<u-button size="small" type="primary" shape="circle"
							color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
							text="再来一单" @click="tzddjsym()"></u-button>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tpurl:this.$tpurl,
				ddcd: {},
				wz:'',
				dpwz: '',
				dpmc:'',
				distance:0,
				shoppingCar: [],
				teacount: 0,
				teaprice: 0,
				xdsj: '下单时间:   ',
				ddbh: '订单编号:   ',
				bz: '备注:   ',
			}
		},
		onLoad(query) {
			this.ddcd = JSON.parse(decodeURIComponent(query.ddcd));
			console.log(this.ddcd);
			if (this.ddcd != null) {
				this.getdp(this.ddcd.dpmc);
				this.shoppingCar = this.ddcd.shoppingcar;
				if (this.shoppingCar.length != 0) {
					this.teaprice = this.calculateTotalPrice();
					this.teacount = this.jsuan();
				}
			}
		},
		methods: {
			// 获取店铺信息
			getdp(d) {
				if (d != null) {
					this.$request.get("/st/cxdp?d=" + d).then((res) => {
						if (res.code == 200) {
							this.dpwz = res.data.dpwz;
							return this.dpwz;
						}
					})
				}

			},
			// 计算购物车中每个奶茶的ncjg总价
			calculateTotalPrice() {
				let totalPrice = 0;
				// 遍历购物车数组
				for (const item of this.shoppingCar) {

					// item是购物车中的每个奶茶对象
					const ncjg = item.ncjg; // 获取奶茶的ncjg价格
					const bjz = item.bjz; // 获取奶茶的份数

					totalPrice += ncjg * bjz; // 计算总价，考虑份数
				}

				// console.log("购物车中奶茶的总价：", totalPrice);

				return totalPrice;
			},
			//计算奶茶份数
			jsuan() {
				let teaCount = 0;
				for (const item of this.shoppingCar) {
					const bjz = item.bjz;
					teaCount += bjz;
				}
				// console.log("奶茶的个数：", teaCount);
				return teaCount;
			},
			tzddjsym(){
				const i=this.ddcd.sfwm;
				this.dpmc=this.ddcd.dpmc;
				this.wz=this.ddcd.buyuseraddress;
				this.distance=this.ddcd.dpjl;
				this.shoppingCar=this.ddcd.shoppingcar;
				uni.navigateTo({
					// url:'../ncfly/ncfly?i='+czid
					url: `../ddjsym/ddjsym?sfwm=${i}&dpmc=${this.dpmc}&wz=${this.wz}&distance=${this.distance}&dpwz=${this.dpwz}&shoppingCar=${encodeURIComponent(JSON.stringify(this.shoppingCar))}`,
				})
			},
			tzdw(){
				this.dpmc=this.ddcd.dpmc;
				uni.navigateTo({
					url:`/pages/weizhi/weizhi?dpmc=${this.dpmc}`
				});
			}
		}
	}
</script>

<style>

</style>