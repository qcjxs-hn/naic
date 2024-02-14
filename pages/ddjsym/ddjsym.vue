<template>
	<view>
		<uni-card>
			<uni-title type="h1" :title="getsfwmtitle(sfwm)" color="#ff2937" align="center"></uni-title>
		</uni-card>
		<uni-card>
			<uni-grid :column="3" :highlight="false" :showBorder="false" :square="false">
				<uni-grid-item style="width: 20px;"><u-icon
						:name="$tpurl+'%E5%95%86%E5%BA%97.png'"></u-icon></uni-grid-item>
				<uni-grid-item style="width:230px;height:20px;">
					<text class="uni-body" style="width: 230px;height: 20px; font-size: 16px;">{{dpmc+">"}}</text>
					<!-- <u-icon name="arrow-right" style="width: 16px;"></u-icon> -->
				</uni-grid-item>
				<uni-grid-item style="width: 16px;">
					<!-- <u-icon name="arrow-right" style="width: 16px;"></u-icon> -->
				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="3" :highlight="false" :showBorder="false" :square="false">
				<uni-grid-item style="width: 16px;"><u-icon name="map"></u-icon></uni-grid-item>
				<uni-grid-item style="width: auto;height: 20px;">
					<text class="uni-body" v-if="distance<1"
						style="width: auto;height: 20px; font-size: 10px;">直线距离：{{(distance*1000+"").substring(0,3)}}米</text>
					<text class="uni-body" v-else
						style="width:auto;height: 20px; font-size: 10px;">直线距离：{{(distance+"").substring(0,3)}}千米</text>
				</uni-grid-item>
				<uni-grid-item style="width: auto;height: 20px;">
					<!-- <view style="background-color: #2979ff; width: 1px;height: 20px;"></view> -->
					<!-- <text style="color: #2979ff; width: 1px;height: 20px;">{{"|"}}</text> -->
					<text class="uni-body" style="width: 200px;height: 20px;font-size: 10px;">{{"|"+dpwz}}</text>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
		<uni-card>
			<view style="width: 320px;">
				
				<view v-for="(ncit,ic) in shoppingCar" :key="ic" :style="'height: '+cardh+'px;'">
					
						<uni-list-chat :style="'height: '+cardh+'px;'" :title="ncit.name" :avatar="ncit.nctpurl"
							:note="`${ncit.jl[0] !== undefined ? ncit.jl[0] + '/' : ''}${ncit.jl[1] !== undefined ? ncit.jl[1] + '/' : ''}${ncit.bx}/${ncit.wd}/${ncit.td}`"
							badge-positon="left">
							<view class="chat-custom-right">
											<u-grid col="2">
												<u-grid-item :customStyle="{width:4+'px'}">
													<u--text type="error" style="width: 12px; margin-left: 20%;"
														text="¥" size="10"></u--text>
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
				<view>
					<view>
					<uni-section title="优惠券" type="line"></uni-section>
					</view>	
					<uni-card v-if="gyhq!=null&&gyhq.length>0&&dj!=-1" >
					<uni-grid :column="2" :highlight="false" :showBorder="false" :square="false">
						<uni-grid-item   >
						<uni-grid @change="openyhq" style="width: 150px;" :column="2" :highlight="false" :showBorder="false" :square="false">
							<uni-grid-item style="width: 25px;height: 25px;"><view style="width:45px;height: 45px;"><u--image :src="gyhq[dj].yhqtb" radius="5px" width="25px" height="25px"></u--image></view></uni-grid-item>
							<uni-grid-item style="width: 20px;"><text style="margin-top: 3px;margin-left: 5px;font-size: 18px;color:crimson;" >¥{{gyhq[dj].yhqje}}</text></uni-grid-item>
						</uni-grid>
						</uni-grid-item>
						<uni-grid-item style="width: 2%;margin-left: 10%;">
						<u-button size="mini"  :customStyle="{width:40+'px',height: 25+'px'}"  type="primary" shape="circle" :plain="true"  @click="useyhq(gyhq[dj],0)" text="使用"></u-button>
						</uni-grid-item>
					</uni-grid>
					</uni-card>
					<uni-card v-else>
						<text>{{zwky}}</text>
					</uni-card>
					<view v-if="gyhq!=null&&gyhq.length>0" >
						<text style="margin-left: 8%;font-size:6px;" @click="openyhq">点击显示更多优惠券</text>
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

			</view>
		</uni-card>
		<uni-card>
			<u--text text="备注:"></u--text>
            <u-textarea v-model="bz" :placeholder="bzts" autoHeight ></u-textarea>
		</uni-card>
		<u-tabbar :fixed="false" :placeholder="true" :safeAreaInsetBottom="true">
			<view style="margin-top: -10px;width: 100%;">
<!-- 				<uni-list-chat clickable="true" :badgeText="teacount" 
					badge-positon="left" badge-text="dot">
					<view class="chat-custom-right">
						<text class="chat-custom-text">{{"总价："+teazj+"元"}}</text>
		
						<u-button size="mini" type="primary" shape="circle" text="去结算" @click="tzdd(gmzt)"></u-button>
					</view>
				</uni-list-chat> -->
				<uni-list>
									<uni-list-item>
										<template v-slot:header>
											<view class="slot-box" style="margin-left: 1%;margin-top: 1%;">
												<text class="slot-box slot-text" style="font-size: 8px;">实付：</text>
												<text style="font-size: 16px;color: red;" >¥{{teaprice}}</text>
											</view>
										</template>
										<template v-slot:body>

										</template>
										<template v-slot:footer>
											<view style="width: 50px;margin-left: 60%;">
											<u-button size="small" @click="impay" text="立即支付" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" shape="circle"></u-button>
											</view>
										</template>
									</uni-list-item>
				</uni-list>
			</view>
		</u-tabbar>
		<view>
			<u-popup :show="showyhq"  :round="10" closeable mode="center" @close="closeyhq" v-if="gyhq!=null&&gyhq.length>0" >
					<view style="width: 320px;" v-for="(item,i)  in gyhq" :key="i" v-if="item.yhqsfsy!='1'&&item.yhqqy!='1'">
			            <uni-card >
			            <uni-grid    :column="2" :highlight="false" :showBorder="false" :square="false">
			            	<uni-grid-item   >
			            	<uni-grid @change="openyhq" style="width: 150px;" :column="2" :highlight="false" :showBorder="false" :square="false">
			            		<uni-grid-item style="width: 25px;height: 25px;"><view style="width:45px;height: 45px;"><u--image :src="item.yhqtb" radius="5px" width="25px" height="25px"></u--image></view></uni-grid-item>
			            		<uni-grid-item style="width: 20px;"><text style="margin-top: 3px; margin-left: 5px;font-size: 18px;color:crimson;" >¥{{item.yhqje}}</text></uni-grid-item>
			            	</uni-grid>
			            	</uni-grid-item>
			            	<uni-grid-item style="width: 2%;margin-left: 80%;">
			            	<u-button size="mini"  :customStyle="{width:40+'px',height: 25+'px'}"  type="primary" shape="circle" :plain="true" text="使用" @click="useyhq(item,i)"></u-button>
			            	</uni-grid-item>
			            </uni-grid>
			            </uni-card>
					</view>
					<view style="width: 320px;height: 200px;"  v-else>
						
					</view>
				</u-popup>

		</view>
		<view>
			<u-popup :show="showzfjk" overlay="false" closeOnClickOverlay="false" :round="10" closeable mode="bottom" @close="closeshowzfjk" @open="openshowzfjk">
					<view style="width: auto;height: 200px;">
						<view style="margin-top: 10%;">
						<uni-title type="h2" align="center" :title="zfwb"></uni-title>
						<view style="margin-top: 10%;">
			            <u-grid col="2" >
							<u-grid-item>
								<u-button size="small" @click="cancelpay()" text="取消支付" color="linear-gradient(to right, rgb(216, 110, 124), rgb(213, 23, 26))" shape="circle"></u-button>
							</u-grid-item>
							<u-grid-item>
								<u-button size="small" @click="confirmpay()" text="确认支付" color="linear-gradient(to right, rgb(91, 216, 164), rgb(149, 213, 0))" shape="circle"></u-button>
							</u-grid-item>
						
						</u-grid>
						</view>
						</view>	
					</view>
				</u-popup>
		</view>
	</view>
</template>

<script>
	import CryptoJS from 'crypto-js'
	import apiConfig from '../../httpconfig.js'
	export default {
		data() {
			return {
				dpmc:'',
				distance:'',
				dpwz:'',
				shoppingCar:[
					
				],
			    yhq:'',
				sfzf:0,
				zwky:'暂无可用',teacount:0,
				teaprice:0,
				bz:'',
				bzts:'暂不支持通过备注定制口味！',
				
				form:{},
				dl: [{
					user: '151******52', //默认
					password: '',
					nickname: '请登录',
					gxqm: "登录领取签名吧！",
					hydj: '标签会员',
					zt: "",
				}],
				wz:'',
				gyhq:[],
				showyhq:false,
				sfsyyhq:'0',
				jsje:0,
				dj:-1,
				yfhj:0,
				showzfjk:0,
				zfwb:'本处预留支付接口(暂无微信支付接口)',
				ic:'',
				iu:'',
				tjxz:0,
				sfwm:0,
			}
		},
		 onLoad(query) {
		    // 获取参数
			if(uni.getStorageSync('userxx')){
				this.show=false
				this.dl=uni.getStorageSync('userxx');
				this.getuser(this.dl.user);
			}
			if (this.wz.length == 0) {
				if (uni.getStorageSync('local')) {
					this.wz = uni.getStorageSync('local');
					}
					}
		    this.sfwm = query.sfwm;
		    this.dpmc = query.dpmc;
            this.distance = query.distance;
		    this.dpwz = query.dpwz;
		    this.shoppingCar = JSON.parse(decodeURIComponent(query.shoppingCar));
			if(this.shoppingCar.length!=0){
				this.teaprice=this.calculateTotalPrice();
				this.yfhj=this.calculateTotalPrice();
				this.teacount=this.jsuan();
			}
		    // 使用参数
		    // console.log(this.sfwm, this.dpmc, this.distance, this.dpwz, this.shoppingCar);
		  },
		methods: {
			closeyhq(){
				this.showyhq=false;
			},
			openyhq(){
				this.showyhq=true;
			},
			closeshowzfjk(){
				// console.log("1");
				this.showzfjk=true;
			},
			openshowzfjk(){
				this.showzfjk=true;
			},
			//使用优惠券
			useyhq(qi,i){
				this.yhq=this.yhq+qi.qid+";";
				this.sfsyyhq="1";
				this.teaprice -=Number(qi.yhqje);
				this.gyhq.splice(i,1);
				this.jsje+=qi.yhqje;
				uni.showToast({
				  title: '使用成功！',
				  icon: 'checkmarkempty',
				  mask: true
				})
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
			
				console.log("购物车中奶茶的总价：", totalPrice);
			
				return totalPrice;
			},
			//计算奶茶份数
			jsuan() {
				let teaCount = 0;
				for (const item of this.shoppingCar) {
					const bjz = item.bjz;
					teaCount += bjz;
				}
				console.log("奶茶的个数：", teaCount);
				return teaCount;
			},
			// 获取用户
			getuser(u){
				this.$request.get("/user/cx?u="+u).then((res)=>{
					if(res.code==200){
						// console.log(res);
						this.dl=res.data.data;
						// console.log(this.dl);
						if(this.dl.yhj!=""||this.dl.yhj!=undefined){
							this.getyhq(this.dl.yhj);
						}
					}
				})
			},
			//获取优惠券
			getyhq(q){
				this.$request.get("/user/getyhq?q="+q).then((resyhq)=>{
					if(resyhq.code==200){
						this.gyhq=resyhq.data;
						if(this.gyhq!=null){
						for (var i = 0; i < this.gyhq.length; i++) {
							// console.log(this.gyhq[i].yhqsfsy,this.gyhq[i].yhqqy,this.dj);
							if(this.gyhq[i].yhqsfsy!='1'&&this.gyhq[i].yhqqy!='1'){
								this.dj=i;
								return
							}
						}
						}
						// console.log(this.gyhq);
					}
				})
			},
			//立即支付
			impay(){
				if(this.tjxz==0){
					// console.log(this.dpwz,this.dpmc);
				this.form={
					buyuser:this.dl.user,
					buyusernickname:this.dl.nickname,//购买用户昵称
					buyuserphone:this.dl.user,
					buyuseraddress:this.wz,
					shoppingcar:JSON.stringify(this.shoppingCar),// 转换为JSON字符串
					sfsyyhq:this.sfsyyhq,
					sydyhq:this.yhq,
					yfhj:this.yfhj,
					jsje:this.jsje,
					paymon:	this.teaprice,
					sfzf:this.sfzf,
					sfwm:this.sfwm,
					dpmc:this.dpmc,
					dpjl:this.distance,
					ddbz:this.bz,
				}
				console.log(this.form);
				this.$request.post("/nc/cjdd",this.form).then((res)=>{
					if(res.code==200){
					
						// console.log(typeof(encryptionKey));
						this.ic = res.data.ic;
						this.iu = res.data.iu;
						this.tjxz=1;
						this.jsje=0;
						this.sfsyyhq='0';
						this.openshowzfjk();
					}
				})
				}
			},
			//加密
			//  encrypt(text, key) {
				
			//   const ciphertext = CryptoJS.AES.encrypt(text, key).toString();
			//   // Decrypt
			//   var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
			//   var originalText = bytes.toString(CryptoJS.enc.Utf8);
			//   console.log(originalText);
			//   return ciphertext;
			// // },
			// encrypt (text, key) {
			// 	const dataHex = CryptoJS.enc.Utf8.parse(text);
			// 	const encrypted = CryptoJS.AES.encrypt(dataHex, key, {
			// 	  mode: CryptoJS.mode.ECB,
			// 	  padding: CryptoJS.pad.Pkcs7
			// 	});
			// 	return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
			// }
			//取消支付
			cancelpay(){
				getApp().globalData.sfsg='1';
				
				uni.switchTab({
					url:'/pages/of/of'
				})
			},
			//确认支付
			confirmpay(){
				console.log(this.ic,this.iu);
				this.$request.post("/nc/qr?ic="+this.ic+"&iu="+this.iu).then((resqr)=>{
					if(resqr.data==1){
						// console.log(resqr);
						uni.showToast({
						  title: '支付成功！',
						  icon: 'checkmarkempty',
						  mask: true
						})
						this.ic="";
						this.iu="";
						getApp().globalData.sfsg='1';
						
						uni.switchTab({
							url:'/pages/of/of'
						})
					}
				})
			},
			//标题变化
			getsfwmtitle(sfwm){
				return sfwm === "0" ? '自提订单结算' : '外卖订单结算';
			}

		}
	}
</script>

<style>

</style>
