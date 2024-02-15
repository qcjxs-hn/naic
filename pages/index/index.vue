<template>


	<!-- <navigator url="/changelanguage?title=changelanguage" open-type="redirect" hover-class="other-navigator-hover"> -->
	<!-- <u-button ></u-button>		 -->
	<!-- <image src="../../static/语言.png" class="tbdx"></image> -->

	<view>
		<!-- 语言切换 -->
		<u-button type="primary" size="mini" :customStyle="{width:20+'px',height:20+'px',}" icon="../../static/语言.png" style="z-index: 999;" class="tbdx " :plain="true"
			:hairline="false"></u-button>
		<!-- 展示栏 -->
		<view class="uni-margin-wrap">
			<u-swiper :list="list3" indicator indicatorMode="line" circular :autoplay="autoplaymode" :radius="20"
				:height="swiperhe" :imgMode="aspectFill"></u-swiper>
		</view>
		<!-- 用户栏 -->
		<view>
			<uni-card :is-shadow="true" class="yhxxl" style="margin-top: -35px;">
				<view>
					
					<u-avatar :src="txsrc" :size="50"></u-avatar>
					<view class="yhxxlzh">
						<u-grid :col="4" >
							<u-grid-item >
						<view class="yhxxlzhandbq">
							<u-grid :col="2" >
								<u-grid-item>
							<u--text   :size="20" :text="xsncoruser()"></u--text>
							</u-grid-item>
							<u-grid-item style="width: 100px;height: 10px;">
							
						    </u-grid-item>
							</u-grid>
						</view>
						
						<view class="yhxxlzhandbqx">
							<u--text :size="12" :text="dl.gxqm"></u--text>
						</view>
						</u-grid-item>
						<u-grid-item></u-grid-item>
						<u-grid-item></u-grid-item>
						<u-grid-item>
							<!-- 右 -->
							<u-grid :col="2"  style="margin-top: 1%;">
								<u-grid-item>
							<view class="yhxxlzhhz">
								<u--text class="yhxxlzhhzsl" align="center" :text="dj[0].yhj"></u--text>
								<u--text align="center" text="优惠券"></u--text>
							</view>
							</u-grid-item>
							<u-grid-item>
							<view class="yhxxlzhhz2">
								<u--text class="yhxxlzhhzsl" align="center" :text="dj[0].dkb"></u--text>
								<u--text align="center" text="抵扣币"></u--text>
							</view>
							</u-grid-item>
							</u-grid>
						</u-grid-item>
						</u-grid>
						
					</view>


				</view>
			</uni-card>
		</view>
		<!--功能栏  -->
		<uni-grid style="margin-top:-5%;" :column="2" :show-border="false" :square="false" >
			<uni-grid-item v-for="(item ,index) in gl" :index="index" :key="index">
				<uni-card class="gnlfk" @click="tzdc(index)">
					<text class="uni-body uni-mt-5">{{item.bt}}</text>
					<tr />
					<text class="uni-body uni-mt-5" style="font-size: 5px;">{{item.sm}}</text>
					<image style="width:100%;height: 85px;" :src="item.tp"></image>
				</uni-card>
			</uni-grid-item>
		</uni-grid>
		<!-- 好友栏 -->
		<uni-card style="margin-top:-1%;">
			<uni-grid :column="4" :show-border="false" :square="false" >
				<u-icon name="account" color="#2979ff" size="18" style="width: 20px;"></u-icon>
				<u--text class="hypdystxt" text="好友拼单"></u--text>
				<u--text class="hypdystxt" text="我用十年青,赴你最后之"></u--text>
				<u-icon name="share-square" color="#2979ff" size="18" style="width: 20px;"></u-icon>
			</uni-grid>
		</uni-card>
		<!-- 权益栏 -->
		<uni-grid style="margin-top:-5%;" :column="qy.length" :show-border="false" :square="false">
			<uni-grid-item v-for="(item ,index) in qy" :index="index" :key="index">
				<uni-card class="gnlfk">
					<text class="uni-body uni-mt-5">{{item.qylwz}}</text>
					<tr />
					<image style="width: 30px;height: 30px;" :src="item.qyltb"></image>
				</uni-card>
			</uni-grid-item>
		</uni-grid>
		<uni-section style="margin-top:-5%;" title="资讯" type="line">
				<u-swiper :list="list3" style="width: 90%;margin-left: 5%;" indicator indicatorMode="line" circular :autoplay="autoplaymode" :radius="20"
					:height="zxswiperhe"></u-swiper>
	
		</uni-section>
		<view>
			<u-popup :show="show" mode="center"  :round="10"   @open="open">
				
			       <view style="width: 300px;height: 200px;" >
					   <view style="width: 100%;">
						    <u-avatar :src="wxtb" size="120" customStyle="margin-left: 40%;margin-top:10%;"></u-avatar>
					   </view>
					   <view style="width: 100%;">
			            <Login style="width: 80%;margin-left: 5%;"></Login>
						</view>
					</view>
			       
				</u-popup>
		</view>
	</view>



</template>

<script>
	import Login from "../Login/Login.vue"
	export default {
		data() {
			return {
				wxtb:this.$tpurl+'微信.png',
				title: 'Hello',
				background: ['color1', 'color2', 'color3'],
				show:true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				message: "Hello Element Plus",
				txsrc:this.$tpurl+'mrtx.png',
				list3: [
					
				],
				autoplaymode: true,
				swiperhe: '260px',
				zxswiperhe: '100px',
				
				dl: [{
					user: '151******52', //默认
					password: '',
					nickname: '请登录',
					gxqm: "登录领取签名吧！",
					hydj: '标签会员',
					zt: "",
				}],
				dj: [{
					yhj: '999',
					dkb: '999',
				}],
				// 功能栏
				gl: [{
						bt: '自提',
						sm: '下单免排队',
						tp: '../../static/appicon/自提.png',
					},
					{
						bt: '外卖',
						sm: '送到嘴里',
						tp: '../../static/appicon/外卖.png',
					},
				],
				
				qy: [{
						qylwz: '会员权益',
						qyltb: '../../static/appicon/会员.png',
					}, {
						qylwz: '10元券包',
						qyltb: '../../static/appicon/积分兑换.png',
					},
					{
						qylwz: '0元兑换好物',
						qyltb: '../../static/appicon/礼品.png',
					}
				],

			}
		},
		components:{
			Login,
		},
		onLoad() {
			    this.loadzbl();
				
				// this.dl = uni.getStorageSync('userxx');
				console.log(uni.getStorageSync('userxx'));
				if(uni.getStorageSync('userxx')){
					this.show=false
					this.dl=uni.getStorageSync('userxx');
					this.getuser(this.dl.user);
				}
		},
		onHide() {
			 	// console.log("jsq");
		 	clearInterval(this.jsq)
		 },
		 onShow() {
		 	//3秒钟刷新一次订单
		 	this.jsq = setInterval(() => {
		 		this.jsqtj();
		 	}, 1000);
		 },
		mounted() {
			//3秒钟刷新一次订单
			// this.jsq = setInterval(() => {
			// 	this.jsqtj();
			// }, 3000);
		
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			open() {
				
			},
			//显示昵称或者用户名
			xsncoruser(){
				return this.dl.nickname===""?this.dl.user:this.dl.nickname;
			},
			// 加载展播栏
			loadzbl(){
				this.$request.get("/sw/all").then((result)=>{
					if(result.code==200){
						for (var i = 0; i < result.data.length; i++) {
							console.log(result.data[i]);
							if(result.data[i].xswz=="0"){
								this.list3.push(result.data[i].swiperurl);
							}
						}
						console.log(this.list3);
					}
				})
			},
			// 获取用户
			getuser(u){
				this.$request.get("/user/cx?u="+u).then((res)=>{
					if(res.code==200){
						// console.log(res);
						this.dl=res.data.data
						if(this.dl.user!=null){
						this.dl.user=this.dl.user.substr(0,3)+'*******'+this.dl.user.substr(9,11)
						}
						this.dj[0].dkb=this.dl.dkb.split(";").length-1;
						this.dj[0].yhj=this.dl.yhj.split(";").length-1;
						
					}
				})
			},
			//跳转点餐
			tzdc(czid){
				if(czid===0){
				uni.switchTab({
					url: '../OrderOfGood/OrderOfGood?i='+czid})
					}
				else{
					uni.navigateTo({
						// url:'../ncfly/ncfly?i='+czid
						url:'../waimai/waimai'
						// url:'../ddjsym/ddjsym'
					})
				}
			},
			//计时器内部条件
			jsqtj(){
				// console.log("11");
			if(uni.getStorageSync('userxx')){
				this.dl=uni.getStorageSync('userxx');
				// this.getuser(this.dl.user);
			}else{
				uni.reLaunch({ url: '../index/index' })
			}
			}
			// close() {
			// 	this.show=false;
			// }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.flex-item {
		width: 100%;
		height: 75px;
		text-align: center;
		line-height: 75px;
	}

	.uni-bg-red {
		background: #f76260;
		color: #fff;
	}

	.uni-bg-green {
		background: #09bb07;
		color: #fff;
	}

	.uni-bg-blue {
		background: blue;
		color: #fff;
	}

	uni-view {
		display: block;
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* 语言图标样式 */
	.tbdx {
		size: 20px;
		height: 20px;
		width: 20px;
		margin-left: 5px;
		margin-top: 10px;
		z-index: 999;
		background-color: rgba(255, 255, 255, 0);
		border-color: rgba(255, 255, 255, 0);
	}

	.tban {
		display: flex;
	}

	/* 跑马灯样式 */
	.uni-margin-wrap {
		/* width: 690rpx; */
		width: 98%;
		height: 35%;
		margin-top: -35px;
		margin-left: 1%;
		border-radius: 20px 20px;


	}

	/* 用户信息栏 */
	.yhxxl {
		margin-top: -35px;
	}

	.yhxxlzh {
		margin-left: 10%;
		margin-top: -11%;
	}

	.yhxxlzhandbq {
		width: 100%;
		height: 25px;
		font-size: 20px;
	}

	/* 用户签名 */
	.yhxxlzhandbqx {
		/* margin-left: 1%;
		 */
		width: 100%;
	}

	/* 用户名 */
	.yhxxlzhandbqdh {
		width: 55%;
		height: 25px;
		text-align: center;
		margin-top: 10%;
		margin-left: 30%;
	}

	/* 会员标签样式 */
	.yhxxlzhandbqdx {
		width: 50px;
		height: 20px;
		/* text-align: center; */

		font-size: 10px;
		margin-top: -25px;
		margin-left: 65%;
	}


	/* 用户物品栏 */
	.yhxxlzhhz {
		width: 100%;
		/* align-items: center; */
		text-align: center;
		/* margin-left: 50%; */
		margin-top: -20%;
	}

	.yhxxlzhhzsl {
		/* width: 10%; */
		height: 20px;
		/* text-align: center; */
		margin-left: 5%;

	}

	.yhxxlzhhz2 {
		width: 100%;
		/* align-items: center; */
		text-align: center;
		/* margin-left: 70%; */
		margin-top: -20%;
	}

	/* 功能栏 */
	.gnl {
		margin-top: 0%;
		width: 100%;
		height: 200px;
		/* padding-left: 5%; */
	}

	/* 功能栏分块 */
	.gnlfk {
		margin-left: 10px;
		/* width: 100%; */
		height: 100%;
	}

	/* 好友拼单样式 */
	.hypdystxt {
		margin-left: 10%;
	}
</style>