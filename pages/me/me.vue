<template>
	<view>
		<!-- 展示栏 -->
		<view class="uni-margin-wrap">
			<u-swiper :list="list3" loading indicator indicatorMode="line" circular :autoplay="autoplaymode"
				:radius="20" :height="swiperhe"></u-swiper>

		</view>
		<!-- 用户栏margin-top: -130px; -->
		<view>
			<uni-card :is-shadow="false" class="yhxxl" style="  height: 60px; z-index: 999;">
				<view>
					<u-grid :col="4">
						<u-grid-item :customStyle="{width:50+'px',height:60+'px',}" @click="skipgrxx()">
					<u-avatar :src="txsrc" :size="50" ></u-avatar>
					</u-grid-item>
					<u-grid-item>
					<view class="yhxxlzh">
						<u--text style="z-index: 999;" :size="15" :format="encrypt" :text="xsncoruser()"></u--text>
						<view class="jyzys">
							<u--text style="z-index: 999;" :size="10" text="经验值"></u--text>
							<u-line-progress style="width: auto" :percentage="dl.userjyz" activeColor="#ff0000" height="12"></u-line-progress>
						</view>

					</view>
					</u-grid-item>
					
					<u-grid-item></u-grid-item>
					<u-grid-item>
					<view class="qdys">
						<u-button type="primary" :plain="true" :hairline="true" size="small" shape="circle"
							text="已签到"></u-button>
					</view>
					</u-grid-item>
					<!-- <u-tag class="yhxxlzhandbqdx" size="small" :text="dl[0].hydj" plain shape="circle"></u-tag> -->
					<!-- 						<view class="yhxxlzhandbqx">
							<u--text :size="12" :text="dl[0].gxqm"></u--text>
						</view> -->


                  </u-grid>
				</view>
			</uni-card>



		</view>
		<view style="">

			<uni-grid style="" :column="2" :show-border="false" :square="false" >
				<uni-grid-item v-for="(item ,index) in gl" :index="index" :key="index">
					<uni-card class="gnlfk">
						<view class="zylys">
							<text class="uni-body uni-mt-5">{{item.bt}}</text>
							<tr />
							<text class="uni-body uni-mt-5" style="font-size: 5px;">{{item.sm}}</text>
						</view>
						<view class="tpys">
							<image style="width: 100%; height: 100%; margin-left: 10%;" :src="item.tp"></image>
						</view>
					</uni-card>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view>

			<uni-list v-for="(item ,index) in gn" :index="index" :key="index">
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="item.tbdz" :title="item.title" />
			</uni-list>
		</view>
		<view>
<!-- 			<uni-card :is-shadow="false" class="yhxxl" style="  height: 60px; z-index: 999;">
				<view>
					<u-grid :col="4">
						<u-grid-item>
					<u-avatar :src="txsrc" :size="100"></u-avatar>
					</u-grid-item>
					<u-grid-item>
					<view class="yhxxlzh">
						<u--text style="z-index: 999;" :size="28" :text="dl.user"></u--text>

					</view>
					</u-grid-item>
					<u-grid-item></u-grid-item>
					<u-grid-item>
					<view class="qdys">
						<u-button type="primary" :plain="true" :hairline="true" size="small" shape="circle"
							text=">>"></u-button>
					</view>
					</u-grid-item>
					</u-grid> -->
					<!-- <u-tag class="yhxxlzhandbqdx" size="small" :text="dl[0].hydj" plain shape="circle"></u-tag> -->
					<!-- 						<view class="yhxxlzhandbqx">
							<u--text :size="12" :text="dl[0].gxqm"></u--text>
						</view> -->
			
<!-- 			
			
				</view>
			</uni-card> -->
		</view>
		<view ><u--text style="margin-left: 40%;" text="版本号:beta 0.0.1"></u--text></view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				autoplaymode: true,
				swiperhe: '200px',
				zxswiperhe: '100px',
				txsrc:this.$tpurl+'mrtx.png',
				user:'',
				dl: [{
					user: '151******52', //默认
					password: '',
					nickname: '请登录',
					gxqm: "登录领取签名吧！",
					hydj: '标签会员',
					userzt: "",
					userjyz:0,
				}],
		// 用户资源栏
				gl: [{
						bt: '5',
						sm: '抵扣币',
						tp: '../../static/appicon/金币.png',
					},
					{
						bt: '0',
						sm: '优惠劵',
						tp: '../../static/appicon/优惠券2.png',
					},
				],
				// 功能栏
				gn:[{
					tbdz:'fa-solid fa-qrcode ',
					title:'兑换码'
				},
				{
					tbdz:'',
					title:'隐私政策'
				},
				{
					tbdz:'',
					title:'用户协议'
				},
				{
					tbdz:'',
					title:'信息公示'
				},
				{
					tbdz:'',
					title:'反馈'
				},
				{
					tbdz:'',
					title:'加盟'
				}
				]
			}
		},
		onLoad() {
				// this.dl = uni.getStorageSync('userxx');
				console.log(uni.getStorageSync('userxx'));
				if(uni.getStorageSync('userxx')){
					this.dl=uni.getStorageSync('userxx');
					this.getuser(this.dl.user);
				}else{
					uni.reLaunch({ url: '../index/index' })
				}
				
		},
		onHide() {
			 	// console.log("jsq");
		 	clearInterval(this.jsq)
		 },
		  onShow() {
		     // 在页面显示时执行操作
		     // console.log('当前页面显示了');
			 //3秒钟刷新一次订单
			 this.jsq = setInterval(() => {
			 	this.jsqtj();
			 }, 1000);
		     
		   },
		mounted() {
			//3秒钟刷新一次订单
			this.jsq = setInterval(() => {
				this.jsqtj();
			}, 1000);
		
		},
		methods: {
			//显示昵称或者用户名
			xsncoruser(){
				return this.dl.nickname===""?this.dl.user:this.dl.nickname;
			},
			//获取个人信息
			getuser(u){
				this.$request.get("/user/cx?u="+u).then((res)=>{
					if(res.code==200){
						console.log(res);
						this.dl=res.data.data
						
						if(this.dl.user!=null){
							this.user=this.dl.user;
						this.dl.user=this.dl.user.substr(0,3)+'*******'+this.dl.user.substr(9,11)
						}
						this.gl[0].bt=this.dl.dkb.split(";").length-1;
						this.gl[1].bt=this.dl.yhj.split(";").length-1;
						
					}
				})
			},
			//跳转个人信息
			skipgrxx(){
				uni.navigateTo({
					url:`/pages/grxx/grxx?u=${this.user}`
				});
			},
			//计时器内部条件
			jsqtj(){
				// console.log("1111");
			if(uni.getStorageSync('userxx')){
				this.dl=uni.getStorageSync('userxx');
				// this.getuser(this.dl.user);
			}else{
				uni.reLaunch({ url: '../index/index' })
			}
			}
		}
	}
</script>

<style>
	/* 用户信息栏 */
	.yhxxl {
		margin-top: -35px;
	}

	.yhxxlzh {
		margin-left: 0%;
		margin-top: -16%;
width: 100%;
	}

	.yhxxlzhandbq {
		width: 50%;
		height: 25px;
	}

	/* 用户签名 */
	.yhxxlzhandbqx {
		margin-left: 1%;
	}

	/* 用户名 */
	.yhxxlzhandbqdh {
		/* 		font-size: 10px;
		color: black; */
		width: 55%;
		height: 25px;
		text-align: center;
		/* margin-top: 10%; */
		/* margin-left: 30%; */
		/* z-index: 999; */
	}

	/* 经验值样式 */
	.jyzys {
		margin-top: -15%;
		margin-left: 1%;
		width: 100%;
	}

	/* 签到样式 */
	.qdys {
		
		margin-top: -11%;
		width: 20%;


	}

	/* 资源栏样式 */
	.zylys {
		width: 60%;
	}

	/* 资源栏图片样式 */

	.tpys {
		width: 40px;
		height: 40px;
		margin-left: 60%;
		margin-top: -40%;
	}
</style>