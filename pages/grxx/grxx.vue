<template>
	<view>

		<u-grid col="1">
			<u-grid-item>
				<view style="margin-top: 5%;margin-bottom: 5%;">
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="10">
						<u-avatar :default-url="src" :src="src" size="150"></u-avatar>
					</u-upload>
				</view>
			</u-grid-item>
			<u-grid-item>

				<uni-card style="width: 100%;height: 300px;" :is-full="true" :is-shadow="true">
					<u-row customStyle="margin-top:20px;">
						<u-col span="3">
							<view class="demo-layout bg-purple-light">
								昵称
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple">
								<u--input v-model="userform.nickname" border="none" placeholder="请输入昵称"
									maxlength="6"></u--input>
							</view>
						</u-col>
					</u-row>
					<u-row customStyle="margin-top:20px;">
						<u-col span="3">
							<view class="demo-layout bg-purple-light">
								性别
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple">
								<u-radio-group v-model="userform.usersex" placement="row" @change="radioChange">
									<u-radio activeColor="red" label="男" name="男"></u-radio>
									<u-radio activeColor="red" label="女" name="女"></u-radio>
								</u-radio-group>

							</view>
						</u-col>
					</u-row>
					<u-row customStyle="margin-top:20px;margin-bottom:20px;">
						<u-col span="3">
							<view class="demo-layout bg-purple-light">
								个性签名
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple">
								<u--input v-model="userform.gxqm" border="none" placeholder="请输入个性签名"
									maxlength="15"></u--input>
							</view>
						</u-col>
					</u-row>
					<u-row customStyle="margin-top:20px;margin-bottom:20px;">
						<u-col span="3">
							<view class="demo-layout bg-purple-light">
								生日
							</view>
						</u-col>
						<u-col span="6">
							
							<view class="demo-layout bg-purple">
								<u--input @focus="dkrqxz()" v-model="userform.userbr" border="none"
									placeholder="请输入生日,只能修改一次" maxlength="12"></u--input>
							</view>
						</u-col>
					</u-row>

				</uni-card>
				<uni-card>
					<u--text type="info"    text="每一项可以单独修改哦!(性别和生日只能修改一次)"></u--text>
				</uni-card>

			</u-grid-item>
			<u-grid-item>
				<view style="margin-top: 5%;width: 80%;margin-left: 5%;">
					<u-button type="primary" shape="square" @click="userxxsave()" text="更新"></u-button>
				</view>
			</u-grid-item>
		</u-grid>
		<view>
			<u-datetime-picker :show="show" v-model="value1" mode="date"
			:minDate="18633"
				 :closeOnClickOverlay="true" @cancel="show=false" @confirm="gbrqxz"></u-datetime-picker> 
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'mrtx.png',
				show: false,
				value1: '',
				usrc: '',
				user: '',
				fileList1: [],
				value: '',
				userform: {
					nickname: '',
					usersex: '',
					userbr: '',
					gxqm: '',
				},
				dl:[],
			}
		},
		onLoad(u) {
			this.user = u.u;
			console.log(this.user);
			this.src = this.$tpurl + this.src;
			if (this.user) {
				this.usrc = this.$tpurl + this.user + ".png";
				this.getuser(this.user);
			}

			// console.log(this.src);
		},
		methods: {
			//性别选择
			radioChange(n) {
				console.log("只能修改一次哦！");
				if (n != null) {
					this.userform.usersex = n;
				}
			},
			//日期选择
			dkrqxz() {
				this.show = true;
			},
			gbrqxz(v) {
				console.log(v);
			    console.log( this.formatter(v.value));
				this.userform.userbr=this.formatter(v.value);
				this.show = false;
			},
			formatter(value) {
				// 使用Date对象来转换时间戳
				const date = new Date(value);
				
				// 获取年份、月份和日期
				const year = date.getFullYear();
				// 月份从0开始，所以需要加1
				const month = (date.getMonth() + 1).toString().padStart(2, '0');
				const day = date.getDate().toString().padStart(2, '0');
				// 组合成所需的日期格式
				const formattedDate = `${year}-${month}-${day}`;
				return formattedDate;
			},
			//个人信息更新
			userxxsave() {
				this.$request.post("/user/gx?u=" + this.user, this.userform).then((res) => {
					if (res.code == 200) {
						
						this.getuser(this.user);
						// console.log(this.dl);
					    
						this.$refs.uToast.show({
							type: 'success',
							message: res.data,
						});
						
					} else {
					
						this.$refs.uToast.show({
							type: 'error',
							message: res.msg
						});
					}
				  
					
				})
			},
			// 获取用户
			getuser(u) {
				this.$request.get("/user/cx?u=" + u).then((res) => {
					if (res.code == 200) {
						console.log(res);
						this.dl = res.data.data
						uni.setStorageSync('userxx',this.dl);
						this.userform.gxqm = this.dl.gxqm;
						// this.userform.usersex = this.dl.usersex;
						this.userform.nickname = this.dl.nickname;
					}
				})
			},
		}
	}
</script>

<style>

</style>