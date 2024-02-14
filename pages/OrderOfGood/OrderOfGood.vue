<template>
	<!-- 点餐页 -->
<view>
	<!-- 点餐列表 -->
	<Ncfly v-if="dplatitude" :bdnc="bdnc" :navLeft="navLeft" :tjlxcs="tjlxcs" :dpmc="dpmc" :dpwz="dpwz" :wz="wz" :gmzt="gmzt" :gwcsx="gwcsx"></Ncfly>
	<view style="margin-top: 65%;margin-left: 40%;" v-else>附近没有店铺!</view>
	<!-- 定位 -->
		<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open" closeable>
				<view>
<!-- 					{{dplatitude}}
					{{dplongitude}} -->
					
		       <map style="width: 100%; height: 300px;" width="30" height="20" :latitude="dplatitude" :longitude="dplongitude" :markers="customIcons">
		       </map>
				</view>
			</u-popup>
	</view>
</template>

<script>
	import QQMapWX from "../../utils/qqmap-wx-jssdk.js"
	import Ncfly from "../ncfly/ncfly.vue"
	export default {
		data() {
			return {
				wz:'',
				brjwd:[],
				bdnc:[],
				cddata:[],
				gmzt:0,
				navLeft: [{
						index: 0,
						tit: "事例1"
					},
					{
						index: 1,
						tit: "事例2"
					},
					{
						index: 2,
						tit: "事例3"
					},
				],
				// 查询条件
				
							where:{
								
							},
							// 你的经纬度，可通过uni.getLocation获取，注意type需传gcj02，同时在电脑端运行时获取到的经纬度是不准的
							latitude: 39.908823,
							longitude: 116.39747,
							dplatitude:39.908823,
							dplongitude:116.39747,
							defaultIcon: "/static/appicon/logo.png", // 默认POI图标
							
							// 自定义POI图标
							customIcons: [
								{ latitude:39.908823,
							      longitude:116.39747,
							      iconPath: "../../static/appicon/nc2.png" },
							],
							dqwz:'',
							 show: true,
							 distance:0,
							 tjlxcs: [],
							 dpmc:'',
							 dpwz:'',
							 gwcsx:0,
			}
		},
		
		        onLoad() {
					
					this.loadcbl();
		        //拿地址
		        this.getMapAddress();
				// console.log(this.dqwz);
				// this.loaddp(this.dqwz);
				// console.log(this.dplatitude);
		        },
				components:{
					Ncfly,
				},
    // 在这里可以调用组件中的函数
    callComponentFunction() {
		this.$refs.Ncflyref.loaddp(this.wz);
		},
		onShow() {
			// console.log("sfsg");
			// console.log("sfsg",getApp().globalData.sfsg);
			if (getApp().globalData.sfsg == "1") {
				this.gwcsx="1"
			}
			},
		methods: {
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
											_this.wz= res.result.address;
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
						//加载侧边栏
						loadcbl() {
							this.$request.get("/nc/cbl").then((res) => {
								if (res.code === '200') {
									this.navLeft = res.data;
								}
							})
						},
						//加载附近店铺
						loaddp(dq){
							this.$request.get("/st/cxfj?dw="+dq).then((resdp)=>{
								if(resdp.code==404){
									this.$refs.uToast.show({
												type: 'error',
												message: '网络连接失败！',					
									});
								}
								if(resdp.data.records!=null){
									// console.log(resdp);
									// console.log(this.latitude);
									// console.log(this.longitude);
									// console.log(resdp.data.records[0].latitude);
									// console.log(resdp.data.records[0].longitude);
									
									if(resdp.data.records[0]!=null){
									this.customIcons[0].latitude=resdp.data.records[0].latitude;
									this.customIcons[0].longitude=resdp.data.records[0].longitude;
									this.dplatitude=resdp.data.records[0].latitude;
									this.dplongitude=resdp.data.records[0].longitude;
									this.dpmc=resdp.data.records[0].dpmc;
									this.dpwz=resdp.data.records[0].dpwz;
									this.loadncpl(resdp.data.records[0].dpdyncid);
									console.log(this.dplatitud);
									const distance =this.calculateDistance(this.latitude,this.longitude,resdp.data.records[0].latitude,resdp.data.records[0].longitude);
								console.log('距离：', distance, '千米');
								}else{
									this.dplatitude=0;
								}
								}
								
							})
						},
						//加载店铺奶茶品类信息
						loadncpl(ncid){
							if(ncid!=null){
								const ncidsz=ncid.split(";");
								this.bdnc=[];
								for (var i = 0; i < ncidsz.length; i++) {
									if(ncidsz[i]!=""){
									this.$request.get("/st/cxnc?ncid="+ncidsz[i]).then((resnc)=>{
										if(resnc.data!=null){
										  this.bdnc.push(resnc.data);	
										  if (resnc.data.ncpl != "") {
										  	// console.log("resnc",this.tjlxcs[Number(resnc.data.ncpl)]);
										  	if (this.tjlxcs[Number(resnc.data.ncpl)] == NaN || this.tjlxcs[Number(resnc.data.ncpl)] == undefined) {
										  		this.tjlxcs[Number(resnc.data.ncpl)] = 1;
										  	} else {
										  		this.tjlxcs[Number(resnc.data.ncpl)] += 1;
										  	}
										  }
										}
										
									})
									}
								}
								console.log(this.bdnc);
								// this.cddata.push(this.wz);
								this.cddata.push(this.bdnc);
							}
						},
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
					// 弹窗
					 open() {
					        // console.log('open');
					      },
					      close() {
					        this.show = false
					        // console.log('close');
					      },			
						  

						  
			        
		}
	}
</script>

<style>

</style>
