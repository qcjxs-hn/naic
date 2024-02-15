<template>
	<view>
		<view>
		<u-subsection :list="list" :current="curNow"  @change="sectionChange"></u-subsection>
		<view class="content">
		            <view v-show="curNow === 0">
		               <Ddcard :ddcd="ddcd" :dpwz="dpwz" ></Ddcard>
		            </view>
		            <view v-show="curNow === 1">
		                 <Ddcard :ddcd="ddcdw" :dpwz="dpwz"></Ddcard>
		            </view>
		            <view v-show="curNow === 2">
		                 <Ddcard :ddcd="ddcdy"  :dpwz="dpwz"></Ddcard>
		            </view>
		        </view>
		</view>
	</view>
</template>

<script>
	import Ddcard from '../ddcard/ddcard.vue'
	export default {
		data() {
			return {
				list: ['全部', '历史','已购买'],
				curNow: 0,
				dl: [{
					user: '151******52', //默认
					password: '',
					nickname: '请登录',
					gxqm: "登录领取签名吧！",
					hydj: '标签会员',
					userzt: "",
					userjyz:0,
				}],
				ddcd:[],
				ddcdw:[],
				ddcdy:[],
				dpwz:'',
				cs:0,
			}
		},
		components:{
			Ddcard,
		},
		onLoad() {
			console.log(getApp().globalData.sfsg);
			if(uni.getStorageSync('userxx')){
				this.dl=uni.getStorageSync('userxx');
				this.getuser(this.dl.user);
				this.loadncdd();
			}else{
					uni.reLaunch({ url: '../index/index' })
				}
		},
		 onHide() {
			 	// console.log("jsq");
		 	clearInterval(this.jsq)
		 },
		mounted() {
			//3秒钟刷新一次订单
			this.jsq = setInterval(() => {
				this.jsqtj();
			}, 3000);
		
		},
		methods: {
			// 获取店铺信息
			getdp(d) {
				if(d != null) {
					this.$request.get("/st/cxdp?d=" + d).then((res) => {
						if (res.code == 200) {
						    this.dpwz = res.data.dpwz;
		
						}
					})
				}
			
			},
			loadncdd(){
				this.$request.get("/nc/selncdd?u="+this.dl.user).then((res)=>{
					if(res.code==200){
						this.ddcd=res.data.records;
						this.ddcdw=[];
						this.ddcdy=[];
						if(this.ddcd.length>0){
							for (var i = 0; i < this.ddcd.length; i++) {
								if(this.ddcd[i].sfzf=="0"){
									if(this.cs==0){
									this.getdp(this.ddcd[i].dpmc);
									this.cs=1;
									}
									// console.log(this.dpwz);
									this.ddcd[i].shoppingcar=JSON.parse(this.ddcd[i].shoppingcar);
									this.ddcd[i].shoplength=this.ddcd[i].shoppingcar.length;
									this.ddcdw.push(this.ddcd[i]);
									
								}else{
									if(this.cs==0){
						            this.getdp(this.ddcd[i].dpmc);
									this.cs=1;
									}
									this.ddcd[i].shoppingcar=JSON.parse(this.ddcd[i].shoppingcar);
									this.ddcd[i].shoplength=this.ddcd[i].shoppingcar.length;
									this.ddcdy.push(this.ddcd[i]);
								}
							}
						
						}
						
						// console.log(res);
					}
				})
			},
			sectionChange(index){
				this.curNow=index;
			},
			// 获取用户
			getuser(u){
				this.$request.get("/user/cx?u="+u).then((res)=>{
					if(res.code==200){
						// console.log(res);
						this.dl=res.data.data
						if(this.dl.dkb.length>0||this.dl.yhj.length>0){
						this.dj[0].dkb=this.dl.dkb.split(";").length-1;
						this.dj[0].yhj=this.dl.yhj.split(";").length-1;
						}
						
					}
				})
			},
			//计时器内部条件
			jsqtj(){
				
				if(uni.getStorageSync('userxx')){
					// this.dl=uni.getStorageSync('userxx');
					// this.getuser(this.dl.user);
								// console.log("1111111");
					this.loadncdd();
								
				}else{
						uni.reLaunch({ url: '../index/index' })
					}
			}
		}
	}
</script>

<style>

</style>
