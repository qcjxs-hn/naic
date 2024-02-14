<template>
	<!-- 奶茶分类页 -->
	<view style="overflow: hidden;">

		<!-- {{navLeft}} -->
		<!-- 		{{wz}}
		{{propName[0]}}
		{{propName.ncmz}} -->
		<!-- <navbar></navbar> -->
		<view class="uni-flex uni-column">
			<view class="flex-item flex-item-V uni-bg-white">
			
				<!-- 地址栏 -->
				<uni-card :is-shadow="false" style="height: 50px;">
					<uni-grid :column="2" :highlight="false" :showBorder="false" :square="false">
						<uni-grid-item style="width: 20px;" v-if="gmzt==0">
							<u-icon
								:name="tpurl+'%E5%95%86%E5%BA%97.png'"></u-icon></uni-grid-item>
					    <uni-grid-item style="width: 20px;" v-if="gmzt==1"><u-icon :name="tpurl+'%E5%A4%96%E5%8D%96%E7%9B%92.png'"></u-icon></uni-grid-item>
						<uni-grid-item style="width:230px;height:20px;">
							<text class="uni-body" style="width: 230px;height: 20px;font-size: 13px;" v-if="gmzt==0">{{dpmc}}></text>
							<text class="uni-body" style="width: 230px;height: 20px;font-size: 13px;" v-if="gmzt==1">{{wz}}></text>
						</uni-grid-item>

					</uni-grid>
					<uni-grid :column="2" :highlight="false" :showBorder="false" :square="false">
						<uni-grid-item style="width: 16px;"><u-icon name="map"></u-icon></uni-grid-item>
						<uni-grid-item style="width: 260px;height: 20px;">
							<text class="uni-body" v-if="distance<1"
								style="width: 230px;height: 20px; font-size: 12px;">直线距离：{{(distance*1000+"").substring(0,3)}}米</text>
							<text class="uni-body" v-else
								style="width: 230px;height: 20px; font-size: 12px;">直线距离：{{(distance+"").substring(0,3)}}千米</text>
						</uni-grid-item>
					</uni-grid>
				</uni-card>
			</view>


		</view>
		<view>
			<!-- 左侧导航 -->
			<scroll-view class="nav-list" scroll-y v-if="navLeft">
				<view v-for="(item,index) in navLeft" :key="index">

					<view class="nav-item" :data-id="item.ncpl" @tap="scrollToAnchor(index)"
						:class="{ active: index === currentIndex }">
						<view v-if="item.tittp" style="width: 100%;height: 30px;">
							<image style="width: 25px;height: 25px; margin-left: 5%;margin-top: 10%;" :src="item.tittp">
							</image>
						</view>
						<view v-if="item.titxz"
							style="font-size: 12px;   margin-left: -10px; width: 130px;margin-top: -15px;margin-bottom: 5px; height: 15px;z-index: 999; color: crimson;font-weight: bold;">
							{{item.titxz}}
						</view>
						<!-- <view @click="checked(index)"> -->
						{{item.tit}}
						<!-- </view> -->
					</view>
				</view>
			</scroll-view>

			<!-- </view> -->
			<!-- <view class="pics" v-if="navLeft1"> -->
			<!-- 外卖页左侧导航-->
			<scroll-view class="nav-list" scroll-y v-if="navLeft1">
				<view v-for="(item,index) in navLeft1" :key="index">
					<view class="nav-item" :data-id="item" @tap="scrollToAnchor(index)"
						:class="{ active: index === currentIndex }">
						<view v-if="item.tittp" style="width: 100%;height: 30px;">
							<image style="width: 25px;height: 25px; margin-left: 5%;margin-top: 10%;" :src="item.tittp">
							</image>
						</view>
						<view v-if="item.titxz"
							style="font-size: 12px;background-color: crimson; width: 130px;margin-top: -15px;margin-bottom: 5px; height: 15px;z-index: 999; color: crimson;font-weight: bold;">
							{{item.titxz}}
						</view>

						{{item.tit}}

					</view>
				</view>
			</scroll-view>
			<!-- </view> -->
			<!-- 							</u-grid-item>
							<u-grid-item style="margin-top: -10%;" :customStyle="{width:250+'px',height:700+'px'}"> -->

			<!-- 右侧内容 -->
			<scroll-view class="content" scroll-y :scroll-into-view="currentAnchor" @scroll="onContentScroll"
				style="height: 500px;">
				<!-- {{currentAnchor}} -->
				<!-- 根据实际情况创建锚点 -->
				<view v-for="(item,index) in ls" :key="item" :id="item" class="section">
					<!-- 奶茶分类 -->
					<view :id="item">{{navLeft[index].tit}}</view>
					<view v-for="(it,i) in bdnc" :key="i" v-if="index==it.ncpl"
						:style="'height: '+cardh+'px;margin-right: 20%;'" @click="tcgm(it)">
						<uni-card :is-shadow="true" padding="0" spacing="0" :height="cardh">
							<uni-list-chat :style="'height: '+cardh+'px;'" :title="it.ncmz" :avatar="it.nctpurl"
								:note="it.ncjs.substring(0,9)+'...'" :time="it.createdate" badge-positon="left">
							</uni-list-chat>
							<view>
								<u-grid col="4">
									<u-grid-item>
										<view style="margin-left: 50%; width: 100%;">
											<u-grid col="3">
												<u-grid-item :customStyle="{width:4+'px'}">
													<u--text type="error" style="width: 12px; margin-left: 20%;"
														text="¥" size="12"></u--text>
												</u-grid-item>
												<u-grid-item :customStyle="{width:12+'px'}">

													<u--text type="error" style="width: 20px;" :text="it.ncjg"
														size="20"></u--text>
												</u-grid-item>
												<u-grid-item>
													<u--text v-if="it.ncpl!=3" type="info" style="width: 20px;" text="起"
														size="20"></u--text>
												</u-grid-item>
											</u-grid>
										</view>
									</u-grid-item>
									<u-grid-item></u-grid-item>
									<u-grid-item></u-grid-item>
									<u-grid-item>
										<u-icon name="plus-circle" size="30" style="color: red;"></u-icon>
									</u-grid-item>
								</u-grid>
							</view>

						</uni-card>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 购买窗口 -->
		<view>

			<u-popup :show="show1" :round="20" mode="bottom" @close="close" @open="open" closeable>
				<view style="height: 500px; overflow: auto;margin-bottom: 0px;">
					<uni-card padding="0" spacing="0" margin="0">
						<template v-slot:cover>
							<view class="custom-cover">
								<image class="cover-image" mode="scaleToFill" :src="cover">
								</image>
								<view class="cover-content">
									<text class="uni-subtitle uni-white">{{ncwz}}</text>
								</view>
							</view>
						</template>
						<view class="ncjsstyle">
							<u--text type="info" class="ncjs" user-select lineHeight="20" :text="ncjs"></u--text>
						</view>
						<view class="spgg">
							<u--text type="primary" style="font-size: 20px;" class="ncjs" user-select lineHeight="20"
								text="商品规格"></u--text>
						</view>
						<view style=" margin-top: 5px;margin-bottom: 5px; margin-left: 1%;width: 98%;">
							<!-- <u--text type="primary" text="————————————————————————————————————————————"   style="margin: 0px;width: 100%;margin-right: 5%;margin-left: 10%;color:#2979ff;background-color: #2979ff;"></u--text> -->
							<view style="height: 0.1px;background-color: #2979ff; width: 100%;"></view>
						</view>
						<view>
							<u-toast ref="uToast"></u-toast>
							<view v-for="(itemncgg,ind) in ncgg" :key="ind">
								<view style="margin-left: 2%;">

									<u--text type="info" v-if="itemncgg!=null" style="font-size: 20px;" class="ncjs"
										user-select lineHeight="20" :text="ncggts[0][ind]"></u--text>
								</view>
								<view>
									<!-- 加料 -->
									<u-checkbox-group v-model="valuejl" iconPlacement="right" @change="checkboxChange"
										placement="row" v-if="itemncgg!=null&&ind=='jl'">
										<u-grid :col="1">
											<u-grid-item v-for="(ite,i) in itemncgg.split(';')" :key="i"
												v-if="i < itemncgg.split(';').length - 1">
												<uni-card style="width: 90%;" margin="1px">
													<view>
														<u-checkbox v-if="ind=='jl'" activeColor="red"
															:label="ite.split(':')[0]+'   ¥'+ite.split(':')[1]"
															:name="ite.split(':')[0]+';'+ite.split(':')[1]"></u-checkbox>
													</view>
												</uni-card>
											</u-grid-item>
										</u-grid>
									</u-checkbox-group>
									<!-- 杯型 -->
									<u-radio-group v-model="mrbx" iconPlacement="right"
										v-if="itemncgg!=null&&ind!='jl'&&ind=='bx'" @change="radioChange">
										<u-grid :col="1">
											<u-grid-item v-for="(ite,i) in itemncgg.split(';')" :key="i"
												v-if="i < itemncgg.split(';').length - 1">
												<uni-card style="width: 90%;" margin="1px">

													<view>
														<u-radio v-if="ind=='bx'"
															:label="ite.split(':')[0]+'   ¥'+ite.split(':')[1]"
															:name="ite.split(':')[0]+';'+ite.split(':')[1]"></u-radio>
														<u-radio v-else activeColor="red" :label="ite"
															:name="ite"></u-radio>
													</view>
												</uni-card>
											</u-grid-item>
										</u-grid>
									</u-radio-group>
									<!-- 温度、糖度 -->
									<u-radio-group :v-model="'value'+ind" iconPlacement="right"
										v-if="itemncgg!=null&&ind!='jl'&&ind!='bx'" @change="radioChange">
										<u-grid :col="1">
											<u-grid-item v-for="(ite,i) in itemncgg.split(';')" :key="i"
												v-if="i < itemncgg.split(';').length - 1">
												<uni-card style="width: 90%;" margin="1px">

													<view>
														<u-radio v-if="ind=='bx'"
															:label="ite.split(':')[0]+'   ¥'+ite.split(':')[1]"
															:name="ite.split(':')[0]+';'+ite.split(':')[1]"></u-radio>
														<u-radio v-else activeColor="red" :label="ite"
															:name="ite"></u-radio>
													</view>
												</uni-card>
											</u-grid-item>
										</u-grid>
									</u-radio-group>

								</view>

							</view>
						</view>

					</uni-card>
				</view>
				<!-- 购买栏 -->
				<view style="height: 80px">
					<u-tabbar :value="value6" @change="handleChange" :fixed="false" :placeholder="true"
						:safeAreaInsetBottom="true" style="height: 300px;">
						<u-grid col="1" :customStyle="{height:200+'px',}">
							<u-grid-item>
								<u-grid col="2">
									<u-grid-item>
										<!-- 价格文字 -->
										<u-grid col="1">
											<u-grid-item>
												<view style="width: 80%;margin-left: 2%;">
													<u--text type="primary" size="24"
														style="font-size: 30px; color: red;" lineHeight="20"
														:text="'¥'+ncjg"></u--text>
												</view>
											</u-grid-item>
											<!-- 规格 -->
											<u-grid-item>
												<view style="width: 80%;margin-left: 2%;">
													<text v-if="mzz[0]!=null"
														style="font-size: 6px;width: auto;color: #909399;">{{mzz[0]+"/"}}</text>
													<text v-if="mzz[1]!=null"
														style="font-size: 6px;width: auto;color: #909399;">{{mzz[1]+"/"}}</text>
													<text v-if="valuebx!=null"
														style="font-size: 6px;width: auto;color: #909399;">{{valuebx+"/"}}</text>
													<text v-if="valuewd!=null"
														style="font-size: 6px;width: auto;color: #909399;">{{valuewd+"/"}}</text>
													<text v-if="valuetd!=null"
														style="font-size: 6px;width: auto;color: #909399;">{{valuetd}}</text>
												</view>
											</u-grid-item>
										</u-grid>
									</u-grid-item>
									<!-- 选择个数 -->
									<u-grid-item>
										<!-- 步进器 -->
										<u-number-box v-model="bjz">
											<view slot="minus" class="minus" @click="jianfengshu">
												<u-icon name="arrow-left" size="12"></u-icon>
											</view>
											<text slot="input" style="width: 50px;text-align: center;"
												class="input">{{bjz}}</text>
											<view slot="plus" class="plus" @click="jiafengshu">
												<u-icon name="arrow-right" color="#FFFFFF" size="12"></u-icon>
											</view>
										</u-number-box>
									</u-grid-item>
								</u-grid>

							</u-grid-item>
							<u-grid-item>
								<u-grid col="2">
									<u-grid-item>
										<u-button type="primary" shape="circle" text="立即购买"></u-button>
									</u-grid-item>
									<u-grid-item>
										<u-button type="primary" @click="jrgwc" shape="circle" text="加入购物车"></u-button>
									</u-grid-item>
								</u-grid>
							</u-grid-item>
						</u-grid>


					</u-tabbar>
				</view>
			</u-popup>
		</view>
		<!-- 购买详细 -->
		<view>
			<!-- :note="ncit.jl[0] !== undefined ? ncit.jl[0] + '/' + (ncit.jl[1] !== undefined ? ncit.jl[1] + '/' : '') + ncit.bx + '/' + ncit.wd + '/' + ncit.td : ''" -->
			<u-popup mode="center" closeable round="10" :show="gmxxtc" @close="closegmxx">
				<view style="width: 320px;">
					<u--text prefixIcon="trash" style="margin-top:25px" iconStyle="font-size: 19px" text="清空"  @click="qkgwc()" ></u--text>
					<view v-for="(ncit,ic) in shoppingCar" :key="ic" :style="'height: '+cardh+'px;'">
						<uni-card :is-shadow="true" padding="0" spacing="0" :height="cardh">
							<uni-list-chat :style="'height: '+cardh+'px;'" :title="ncit.name" :avatar="ncit.nctpurl"
								:note="`${ncit.jl[0] !== undefined ? ncit.jl[0] + '/' : ''}${ncit.jl[1] !== undefined ? ncit.jl[1] + '/' : ''}${ncit.bx}/${ncit.wd}/${ncit.td}`"
								badge-positon="left">
							</uni-list-chat>
							<view>
								<u-grid col="3">
									<u-grid-item>
										<view style="margin-left: 50%; width: 100%;">
											<u-grid col="2">
												<u-grid-item :customStyle="{width:4+'px'}">
													<u--text type="error" style="width: 12px; margin-left: 20%;"
														text="¥" size="12"></u--text>
												</u-grid-item>
												<u-grid-item :customStyle="{width:12+'px'}">

													<u--text type="error" style="width: 20px;" :text="ncit.ncjg"
														size="20"></u--text>
												</u-grid-item>
											</u-grid>
										</view>
									</u-grid-item>
									<u-grid-item></u-grid-item>

									<u-grid-item>
										<!-- 步进器 -->
										<u-number-box v-model="ncit.bjz-1">
											<view slot="minus" class="minus" @click="jianfengshugmxx(ncit,ic)">
												<u-icon name="arrow-left" size="12"></u-icon>
											</view>
											<text slot="input" style="width: 30px;text-align: center;"
												class="input">{{ncit.bjz }}</text>
											<view slot="plus" class="plus" @click="jiafengshugmxx(ncit,ic)">
												<u-icon name="arrow-right" color="#FFFFFF" size="12"></u-icon>
											</view>
										</u-number-box>

									</u-grid-item>
								</u-grid>
							</view>
						</uni-card>
					</view>
				</view>
			</u-popup>

			<u-tabbar v-if="gwczt" :fixed="false" :placeholder="true" :safeAreaInsetBottom="true">
				<view v-if="shoppingCar!=[]" style="margin-top: -10px;width: 100%;">
					<uni-list-chat clickable="true" @click="opengmxx" :badgeText="teacount" :avatar="gwctp"
						badge-positon="left" badge-text="dot">
						<view class="chat-custom-right">
							<text class="chat-custom-text">{{"总价："+teazj+"元"}}</text>

							<u-button size="mini" type="primary" shape="circle" text="去结算"
								@click="tzdd(gmzt)"></u-button>
						</view>
					</uni-list-chat>
				</view>
			</u-tabbar>

			<!-- </view> -->
		</view>

		<u-back-top :scroll-top="scrollTop1" top="400" @click="backtop"></u-back-top>

	</view>
</template>

<script>
	
	import indexVue from '../index/index.vue';
	import QQMapWX from "../../utils/qqmap-wx-jssdk.js";
	import POP from '../pop/pop.vue'
	export default {
		props: {
			propName: {
				type: Array,

			},
			wz: String,
			bdnc: {
				type: Array,
				default: () => [],
			},
			navLeft: {
				type: Array,
				default: () => [],
			},
			tjlxcs: {
				type: Array,
				default: () => [],
			},
			gmzt: String,
			dpmc: String,
			dpwz: String,
			gwcsx:String,
		},
		data() {
			return {
				tpurl:this.$tpurl,
				indicator: true,
				// wz: '',
				brjwd: [],
				// bdnc:[],
				latitude: 0,
				longitude: 0,
				list: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				}],
				// 当前选择的标签页
				// currentTab: 'tab1',
				// 分段器的选项
				// tabList: ['tab1', 'tab2', 'tab3']
				// 当前选择的标签页
				isActive: 0,
				navLeft1: [],
				distance: 0,
				currentIndex: 0,
				currentAnchor: '',
				ls: [],
				// tjlxcs: [],
				jsindex: 0,
				yhcd: 0,
				lock: 0,
				lock2: 0,
				ttop: 0,
				ntop: 0,
				scrollTop1: 0,
				cardh: 100,
				show1: false,
				cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				},
				ncwz: '',
				ncjs: '',
				ncjg: 0,
				ncgg: [],
				ncggts: [{
					jl: "加料",
					bx: "杯型",
					wd: "温度",
					td: "糖度"
				}],

				value: '',
				value6: 0,
				bjz: 1,
				valuejl: [],
				oldsum: 0,
				mzz: [],
				mrbx: '中杯;1',
				valuebx: '中杯',
				valuebxpd: "小杯;中杯;大杯;",
				valuewd: '正常冰',
				valuewdpd: "热;温热;少冰;正常冰;",
				valuetd: '正常糖',
				valuetdpd: "多糖;正常糖;七分糖;五分糖;无糖;",
				oldzhi: 0,
				mrgg: [], //默认规格
				tempcar: [], //临时
				shoppingCar: [], // 购物车数组
				gwczt: false,
				gwctp: this.$tpurl+'gwc.png',
				teazj: 0,
				gmxxtc: false,
				teaCount: {}, // 存储相同类型奶茶的个数
				teacount: 0,

			}
		},
		components: {
			POP,
		},
		computed: {
			// 使用 Set 对购物车进行去重
			//     uniqueShoppingCar() {
			//       const uniqueSet = new Set();
			//       this.shoppingCar.forEach((ncit) => {
			//         const key = `${ncit.name}-${ncit.bx}-${ncit.wd}-${ncit.td}`;
			//         uniqueSet.add(key);
			//       });

			//       return Array.from(uniqueSet).map((key) => {
			//         const [name, bx, wd, td] = key.split('-');
			//         // 根据需要从原始购物车中提取其他属性
			//         return this.shoppingCar.find((item) => item.name === name && item.bx === bx && item.wd === wd && item.td === td);
			//       });
			//     }
			// 去重并统计相同类型奶茶个数
			uniqueShoppingCar() {
				const uniqueSet = new Set();
				this.shoppingCar.forEach((ncit) => {
					const key = this.getTeaKey(ncit);
					// console.log(key);
					// console.log(this.teaCount[key]);
					// console.log(this.shoppingCar);

					// console.log(ncit);
					uniqueSet.add(key);
					// console.log(this.shoppingCar);
					// console.log('unique', uniqueSet);
					// 统计相同类型奶茶的个数
					this.teaCount = {};
					// console.log(this.teaCount);
					if (!this.teaCount[key]) {
						this.teaCount[key] = 1;
						// console.log(this.teaCount);
					} else {
						this.teaCount[key]++;
						// console.log(this.teaCount);
					}

				});

				return Array.from(uniqueSet).map((key) => {
					const [name, bx, wd, td] = key.split('-');
					// 根据需要从原始购物车中提取其他属性
					return this.shoppingCar.find((item) => this.getTeaKey(item) === key);
				});
			}
		},
		mounted() {
			
			console.log(this.wz);
				console.log(this.dpmc);
				console.log(this.dpwz);
			console.log(this.bdnc);
			// console.log(this.navLeft);
			console.log(this.shoppingCar, this.shoppingCar.length);
			if (this.shoppingCar.length != 0) {
				this.gwczt = true;
			}
			if (this.bdnc.length != 0) {
				this.dpmz = this.bdnc[0].dpmc;

			}
			if (this.navLeft.length == 0) {
				this.loadcbl();

			} else {
				for (var i = 0; i <= this.navLeft.length + 1; i++) {
					this.ls.push("nc" + i)
				}
				console.log("1", this.ls);

			}
			if (this.wz.length == 0 || this.bdnc.length == 0) {
				if (uni.getStorageSync('local')) {
					this.wz = uni.getStorageSync('local');
					this.brjwd = uni.getStorageSync('localtion');
					console.log(this.brjwd);
					this.latitude = this.brjwd.latitude;
					this.longitude = this.brjwd.longitude;
					this.loaddp(this.wz);

				} else {
					this.getMapAddress();
				}

			}

			// this.queryComponents(); 
            this.timer = setInterval(() => {
				     this.sxgwc();
				   }, 1000);
		},
		
		onLoad() {
	
			if (uni.getStorageSync('local')) {
				this.wz = uni.getStorageSync('local');
				this.brjwd = uni.getStorageSync('localtion');
				// this.loadcbl();
				console.log(this.brjwd);
				this.latitude = this.brjwd.latitude;
				this.longitude = this.brjwd.longitude;
				this.loaddp(this.wz);
				if (this.$sfsg == "1") {
					this.shoppingCar = [];
				}
			} else {
				this.getMapAddress();
			}
		},

		methods: {
			// 生成奶茶的唯一标识
			getTeaKey(ncit) {
				return `${ncit.name}-${ncit.bx}-${ncit.wd}-${ncit.td}`;
			},

			// 步进器数量变化时的处理方法
			handleQuantityChange(ncit) {
				// 更新相同类型奶茶的个数
				const key = this.getTeaKey(ncit);
				this.teaCount[key] = ncit.bjz;
			},
			//加载侧边栏
			loadcbl() {
				this.$request.get("/nc/cbl").then((res) => {
					if (res.code === '200') {
						this.navLeft1 = res.data;
						console.log(this.navLeft1);
						for (var i = 0; i <= this.navLeft1.length + 1; i++) {
							this.ls.push("nc" + i)
						}
						console.log("2", this.ls);
					}
				})
			},
			// 处理分段器切换
			handleTabChange(tab) {
				this.currentTab = tab;
			},
			checked(index) {
				this.isActive = index
			},
			getMapAddress() {
				var _this = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() { //1.1 允许授权
						_this.getLocation();
					},
					fail() { //1.2 拒绝授权
						uni.showModal({
							content: '检测到您没打开获取信息功能权限，是否去设置打开？',
							confirmText: "确认",
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {
											console.log(res);
											_this.getLocation();
										}
									})
								} else {
									console.log('取消');
									return false;
								}
							}
						})
						return false;
					}
				})
			},
			getLocation() {
				var _this = this
				const tMap = new QQMapWX({
					key: 'HL5BZ-RFA3J-4YTFC-XNY6J-LR4PK-FKF3Z' //开发者密钥
				});
				//使用 uni.getLocation获取用户所在经纬度
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: (res) => {
						console.log("获取经纬度成功");
						console.log(res);
						const re = _this.$mapChange.wgs84Togcj02(res.longitude, res.latitude)
						console.log(re)
						_this.longitude = re[0]
						_this.latitude = re[1]
					},
					fail: () => {
						console.log("获取经纬度失败");
					},
					complete: () => {
						// 使用腾讯sdk的reverseGeocoder方法 解析经纬度
						tMap.reverseGeocoder({
							location: {
								latitude: _this.latitude,
								longitude: _this.longitude
							},
							success: function(res) {
								console.log("解析地址成功", res);
								console.log("当前地址：", res.result.address);
								_this.dqwz = res.result.address;
								_this.loaddp(res.result.address);
								//保存缓存
								uni.setStorage({
									key: 'local',
									data: res.result.address,
									success() {
										console.log("用户地址信息已缓存")
									}
								});
								uni.setStorage({
									key: 'localtion',
									data: {
										latitude: _this.latitude,
										longitude: _this.longitude
									},
									success() {
										console.log("已缓存")
									}
								});
							},
							fail: function(res) {
								uni.showToast({
									title: '定位失败',
									duration: 2000,
									icon: "none"
								})
								console.log(res);
							},

							complete: function(res) { //无论成功失败都会执行
								console.log('获取定位信息')
								return
								uni.openLocation({
									latitude: _this.latitude,
									longitude: _this.longitude,
									success: function() {
										console.log('success');
									}
								});
							}
						})
					}
				})
			},
			//加载附近店铺
			loaddp(dq) {
				this.$request.get("/st/cxfj?dw=" + dq).then((resdp) => {
					if (resdp.data.records != null) {
						console.log(resdp);
						// console.log(this.latitude);
						// console.log(this.longitude);
						// console.log(resdp.data.records[0].latitude);
						// console.log(resdp.data.records[0].longitude);
						// console.log(this.dplatitud);
						if (resdp.data.records[0] != null) {
							// this.loadncpl(resdp.data.records[0].dpdyncid);
							this.distance = this.calculateDistance(this.latitude, this.longitude, resdp.data
								.records[0]
								.latitude, resdp.data.records[0].longitude);
							console.log('距离：', this.distance, '千米');
						} else {

							this.dplatitude = 0;

						}
					}
				})
			},
			//加载店铺奶茶品类信息
			// loadncpl(ncid) {
			// 	if (ncid != null) {
			// 		const ncidsz = ncid.split(";");
			// 		this.bdnc = [];
			// 		for (var i = 0; i < ncidsz.length; i++) {
			// 			if (ncidsz[i] != "") {
			// 				this.$request.get("/st/cxnc?ncid=" + ncidsz[i]).then((resnc) => {
			// 					if (resnc.data != null) {
			// 						this.bdnc.push(resnc.data);
			// 						if (resnc.data.ncpl != "") {
			// 							// console.log("resnc",this.tjlxcs[Number(resnc.data.ncpl)]);
			// 							if (this.tjlxcs[Number(resnc.data.ncpl)] == NaN || this.tjlxcs[Number(resnc
			// 									.data.ncpl)] == undefined) {
			// 								this.tjlxcs[Number(resnc.data.ncpl)] = 1;
			// 							} else {
			// 								this.tjlxcs[Number(resnc.data.ncpl)] += 1;
			// 							}
			// 						}
			// 					}

			// 				})
			// 			}
			// 		}

			// 		console.log('tjlxcs', this.tjlxcs);
			// 		console.log(this.bdnc);
			// 	}
			// },
			// 计算两个地点之间的距离（单位：千米）
			calculateDistance(lat1, lon1, lat2, lon2) {
				const R = 6371; // 地球半径（单位：千米）

				const dLat = this.deg2rad(lat2 - lat1);
				const dLon = this.deg2rad(lon2 - lon1);

				const a =
					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
					Math.sin(dLon / 2) * Math.sin(dLon / 2);

				const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

				const distance = R * c; // 距离（单位：千米）
				return distance;
			},
			// 将角度转换为弧度
			deg2rad(deg) {
				return deg * (Math.PI / 180);
			},
			//左侧导航栏
			scrollToAnchor(index) {
				// console.log(index);
				if (index != null) {
					this.jsindex = 0;
					this.yhcd = 0;
				}
				// 点击锁住
				this.lock = index;
				this.currentIndex = index;
				this.currentAnchor = this.ls[index];
				// console.log(this.lock);
				// console.log(this.currentAnchor);
			},
			// 右侧内容栏
			onContentScroll(event) {
				// console.log('Scroll event:', event);
				// 监听右侧内容的滚动，根据滚动位置更新左侧导航项的选中状态


				const scrollTop = event.detail.scrollTop;
				this.ttop = scrollTop;
				this.scrollTop1 = scrollTop;
				// console.log(scrollTop, this.yhcd);
				// console.log(this.lock);
				// 点击左侧导航栏时锁住，滚动时解锁
				if (this.lock == 0) {
					// console.log(scrollTop, this.yhcd + this.tjlxcs[this.jsindex] *this.cardh, this.jsindex, this.tjlxcs.length -
					// 	1);
					// 滚动大于类型高度并且左侧导航栏变化不大于左侧导航栏内容个数
					if (scrollTop > this.yhcd + this.tjlxcs[this.jsindex] * this.cardh && this.jsindex < this.tjlxcs
						.length - 1) {
						this.ttop = scrollTop
						this.yhcd += this.tjlxcs[this.jsindex] * this.cardh;
						// console.log(this.yhcd);
						this.jsindex += 1;
					}
					// if(this.jsindex==this.tjlxcs.length - 1){
					// 	if(this.lock2==0){
					// 		this.ntop=this.ttop-this.tjlxcs[this.jsindex-1] * 80;
					// 		this.lock2=1;
					// 	}
					// }

					// console.log('tjlx',this.tjlxcs);
					// console.log('ttop',this.ttop,'tj',this.tjlxcs[this.jsindex-1],'h',this.tjlxcs[this.jsindex-1] * 80,'ntop',this.ntop);
					// if(this.ttop<this.ntop&&this.jsindex >0){
					// 	this.ttop=this.ntop;
					// 	this.yhcd -= this.tjlxcs[this.jsindex-1] * 80;
					// 	this.jsindex -= 1;
					// 	this.lock2=0;
					// }

					// if(this.yhcd==0||this.jsindex==0 ||this.yhcd==scrollTop||this.yhcd>scrollTop){
					//   this.jsindex=0;
					//   this.yhcd=0;
					// }
				} else {
					this.jsindex = this.lock;
				}
				// const index = Math.floor(scrollTop / 40); // 每个 section 的高度
				// console.log(this.jsindex);
				this.currentIndex = this.jsindex;
				this.currentAnchor = this.ls[this.jsindex];
				this.lock = 0;
				// console.log(this.currentAnchor);
			},
			//返回顶部
			backtop() {
				this.jsindex = 0;
				this.yhcd = 0;
				this.currentAnchor = this.ls[this.jsindex];
			},
			// 弹出购买
			tcgm(id) {
				console.log(id);
				this.cover = id.nctpurl;
				this.ncwz = id.ncmz;
				this.ncjs = id.ncjs;
				this.ncjg = id.ncjg;
				console.log(id.nc);
				console.log('tcgm', this.mzz, this.valuejl);
				this.oldsum = 0;
				this.valuejl = [];
				this.mzz = [];
				this.loadncgg(id.createid);

				this.show1 = true;
			},
			//
			close() {

				this.show1 = false;
			},
			open() {
				this.show1 = true;
			},
			//购物车弹出
			closegwc() {
				this.gwczt = false;
			},
			opengwc() {
				this.gwczt = true;
			},
			//购买信息弹出
			closegmxx() {
				console.log("111");
				this.gmxxtc = false;
			},
			opengmxx() {
				console.log("222");
				this.gmxxtc = true;
			},
			//加载对应奶茶规格
			loadncgg(i) {
				this.$request.get("/nc/gg?i=" + i).then((resncgg) => {
					if (resncgg.code == 200) {
						this.ncgg = resncgg.data;
						if (this.ncgg != null) {
							this.ncgg.ncid = null;
							if (this.ncgg.bx != null) {
								console.log(this.ncgg.bx);
								this.mrbx = this.ncgg.bx.split(';')[0].split(':')[0] + ';' + this.ncgg.bx.split(
									';')[0].split(':')[1];

								this.ncjg = this.ncjg + Number(this.ncgg.bx.split(';')[0].split(':')[1]);
								console.log(this.ncjg);
								this.mrgg = {
									name: this.ncwz,
									nctpurl: this.cover,
									jl: this.mzz,
									bx: this.ncgg.bx.split(';')[0].split(':')[0],
									wd: this.valuewd,
									td: this.valuetd,
									ncjg: this.ncjg,
									bjz: this.bjz,
								};
								// this.tempcar.push(this.mrgg);

							}
						}
					}
				})
			},
			// 选择
			checkboxChange(n) {
				const mzz = [];
				const valusez = [];
				for (var i = 0; i < n.length; i++) {
					// console.log(n[i]);
					// console.log(n[i].split(';'));
					mzz.push(n[i].split(';')[0]);
					valusez.push(n[i].split(';')[1]);
				}
				// console.log(mzz);
				// console.log(valusez);

				const sum = valusez.reduce((acc, num) => acc + parseInt(num), 0);
				if (this.oldsum == 0) {
					this.ncjg = this.ncjg + sum;
					this.oldsum = sum;
				}
				if (sum >= 0) {
					// console.log(sum);
					// console.log(mzz);
					if (mzz.length <= 2) {
						this.mzz = mzz;
						if (this.oldsum < sum) {
							// console.log(this.ncjg, sum, this.oldsum);
							this.ncjg = this.ncjg + (sum - this.oldsum);
						} else {
							// console.log(this.ncjg, sum, this.oldsum);
							this.ncjg = this.ncjg - (this.oldsum - sum);
						}
						this.oldsum = sum;
						// 处理选中不超过两个复选框的情况
					} else {
						// console.log("1111");
						this.mzz = mzz.slice(0, -1);;
						this.$refs.uToast.show({
							type: 'error',
							message: "加料最多两份",
						});
					}
				}
				// console.log('change', n);
			},
			radioChange(n) {

				//    console.log(this.valuebx);
				// console.log(this.valuewd);
				// console.log(this.valuetd);
				// if(this.oldzhi==1){
				// 	this.ncjg=this.ncjg+Number(n.split(';')[1]);
				// 	this.oldzhi=Number(n.split(';')[1]);
				// }
				// console.log('radioChange', n);
				if (n.includes(';')) {
					console.log(Number(n.split(';')[1]), this.ncjg, this.oldzhi);
					if (Number(n.split(';')[1]) > this.oldzhi) {
						this.ncjg = this.ncjg - this.oldzhi;
						this.ncjg = this.ncjg + Number(n.split(';')[1]);
						this.oldzhi = Number(n.split(';')[1]);
					} else {
						this.ncjg = this.ncjg - this.oldzhi;
						this.ncjg = this.ncjg + Number(n.split(';')[1]);
						this.oldzhi = Number(n.split(';')[1]);
					}
					this.valuebx = n.split(';')[0];





				} else {
					if (this.valuewdpd.includes(n)) {
						this.valuewd = n;
					} else if (this.valuetdpd.includes(n)) {
						this.valuetd = n;
					}
				}
			},
			handleChange(name) {
				console.log(name); // 打印当前选中标签的名称
				this.value6 = name; // 更新 value6 的值
			},
			// 购买
			onClick(e) {
				console.log(e)
			},
			actionsClick(text) {
				uni.showToast({
					title: text,
					icon: 'none'
				})
			},
			//加减份数
			jiafengshu() {
				if (this.tempcar.length == 0) {
					this.mrgg = {
						name: this.ncwz,
						nctpurl: this.cover,
						jl: this.mzz,
						bx: this.ncgg.bx.split(';')[0].split(':')[0],
						wd: this.valuewd,
						td: this.valuetd,
						ncjg: this.ncjg,
						bjz: this.bjz,
					};
					this.tempcar.push(this.mrgg);
				} else {
					this.tempcar[0].bjz++;
				}
				this.teacount = this.jsuan();
				this.teazj = this.calculateTotalPrice();
				// console.log('jia', this.tempcar);
			},
			jianfengshu() {
				this.mrgg = {
					name: this.ncwz,
					nctpurl: this.cover,
					jl: this.mzz,
					bx: this.ncgg.bx.split(';')[0].split(':')[0],
					wd: this.valuewd,
					td: this.valuetd,
					ncjg: this.ncjg,
					bjz: this.bjz,
				};
				this.shoppingCar.pop();
				
				this.teacount = this.jsuan();
				this.teazj = this.calculateTotalPrice();
		
				// console.log('jian', this.tempcar);
			},
			//加减份数购买详细
			jiafengshugmxx(nc, ic) {
				this.shoppingCar[ic].bjz = nc.bjz + 1;
				this.teacount = this.jsuan();
				this.teazj = this.calculateTotalPrice();
				// console.log('jia', this.tempcar);
			},
			jianfengshugmxx(nc, ic) {
				// console.log(ic, this.shoppingCar.length);
				// const key = this.getTeaKey(nc);
				// // 统计相同类型奶茶的个数

				// if (!this.teaCount[key]) {
				//   this.teaCount[key] = 0;
				// } else {
				//   this.shoppingCar.splice(ic, 1);
				//   this.teaCount[key]--;
				// }
				// console.log(nc,ic);
				if (nc.bjz > 1) {
					this.shoppingCar[ic].bjz = nc.bjz - 1;
					// this.shoppingCar.splice(ic, 1);
				} else if (nc.bjz <= 1) {
					this.bjz = 1;
					this.shoppingCar.pop();
					this.qkgwc();
					
				}
				this.teacount = this.jsuan();
				this.teazj = this.calculateTotalPrice();
				
				// console.log('jian', this.shoppingCar);
			},
			//加入购物车、
			jrgwc() {
				//console.log(this.mzz,this.valuebx,this.valuewd,this.valuetd);
				// console.log(this.tempcar);
				getApp().globalData.sfsg = '0';
				this.gwcsx=getApp().globalData.sfsg;
				if (this.tempcar.length == 0) {

					const selectedTea = {
						name: this.ncwz,
						nctpurl: this.cover,
						jl: this.mzz,
						bx: this.ncgg.bx.split(';')[0].split(':')[0],
						wd: this.valuewd,
						td: this.valuetd,
						ncjg: this.ncjg,
						bjz: this.bjz,
					};
					this.tempcar.push(selectedTea);
				} else {
					this.tempcar[0].bjz++;
				}

				this.show1 = false;

				for (const item of this.tempcar) {
					this.shoppingCar.push(item);
				}
				console.log(this.shoppingCar);
				this.gwczt = true;
				this.tempcar = [];
				this.mzz = [];
				this.bjz = 1;
				this.teazj = this.calculateTotalPrice();
				this.teacount = this.jsuan();
				// console.log('jrgwc', this.tempcar);
				// console.log(this.shoppingCar);
			},
			//刷新购物车
			sxgwc(){
				if(getApp().globalData.sfsg=='1'){
					
					this.gmxxtc=false;
					this.gwczt=false;
				    this.shoppingCar=[]
				}
			},
			//清空购物车
			qkgwc(){
			
				this.gmxxtc=false;
				this.gwczt=false;
				this.shoppingCar=[]
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
			tzdd(i) {
				this.gmxxt=false;
				this.closegmxx();
				uni.navigateTo({
					// url:'../ncfly/ncfly?i='+czid
					url: `../ddjsym/ddjsym?sfwm=${i}&dpmc=${this.dpmc}&wz=${this.wz}&distance=${this.distance}&dpwz=${this.dpwz}&shoppingCar=${encodeURIComponent(JSON.stringify(this.shoppingCar))}`,
				})
			}
		}
	}
</script>

<style>
	.nav-list {
		width: 80px;
		/* 左侧导航宽度 */
		position: fixed;
	}

	.nav-item {
		text-align: center;
		line-height: 40px;
		border-bottom: 1px solid #eee;
	}

	.nav-item.active {
		background-color: #e6f7ff;
		/* 选中背景色，根据实际需求修改 */
		color: #1890ff;
		/* 选中文字颜色，根据实际需求修改 */
	}

	.content {
		flex: 1;
		margin-left: 80px;
		/* 左侧导航宽度 */
	}

	.section {
		height: auto;
		background-color: white;
		margin-bottom: 20px;
	}

	page {
		height: 100%;
	}

	.center {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.center-list {
		width: 100%;
		height: 86%;
		position: fixed;
		overflow: auto;
	}

	.pics {
		width: 100%;
		height: auto;
		margin-bottom: 250px;
	}

	.gundong {
		width: 200rpx;
		height: 70%;
	}

	/* 	.gundong view {
		height: 130rpx;
		margin-top: 130rpx;
		line-height: 100rpx;
		text-align: center;
		/*  background-color: #f1f1f1; */
	/* 		font-size: 28rpx;
		color: #666; */
	/* } */

	.active {
		color: #333;
		font-weight: 700;
		border-left: 8rpx solid #ff5934;
	}

	/* 索引列表 */
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}

	/* 购买 */
	.cover-image {
		width: 100%;
	}

	.cover-content {
		margin-left: 2%;

	}

	/* 奶茶介绍样式 */
	.ncjsstyle {
		margin-top: 1%;
		margin-left: 2%;
		width: 90%;
		margin-right: 5%;
	}

	.ncjs {
		width: 100%;
	}

	/* 奶茶规格 */
	.spgg {
		font-size: 20px;
		margin-top: 6%;
		margin-left: 2%;

	}

	/* 步进器样式 */
	.minus {
		width: 22px;
		height: 22px;
		border-width: 1px;
		border-color: #E6E6E6;
		border-style: solid;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		justify-content: center;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
	}

	.input {
		padding: 0 10px;
	}

	.plus {
		width: 22px;
		height: 22px;
		background-color: #FF0000;
		border-radius: 50%;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
	}
</style>