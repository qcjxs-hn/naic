<template>
	<view>
		<u-grid col="1">
			<u-grid-item >
				<view style="margin-top: 5%;margin-bottom: 5%;">
					<u-upload  :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="10">
						<u-avatar :src="src" size="150"></u-avatar>
					</u-upload>
				</view>
			</u-grid-item>
			<u-grid-item>
				<uni-card style="width: 100%;" :is-full="true" :is-shadow="true">
				<u-row>
					<u-col span="3">
						<view class="demo-layout bg-purple-light">
							昵称
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple">
							<u--input
													v-model="userform.nickname"
													border="none"
													placeholder="请输入昵称"
													maxlength="6"
							></u--input>
						</view>
					</u-col>
					</u-row>
					<u-row style="margin-top:60px;">
						<u-col span="3">
							<view class="demo-layout bg-purple-light">
								性别
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple">
							<u-radio-group 
							    v-model="value"
							    placement="row">
								<u-radio activeColor="red" label="男"></u-radio>
								<u-radio activeColor="red" label="女"></u-radio>
							</u-radio-group>

							</view>
						</u-col>
						</u-row>
						<u-row style="margin-top: 60px;">
							<u-col span="3">
								<view class="demo-layout bg-purple-light">
									个性签名
								</view>
							</u-col>
							<u-col span="6">
								<view class="demo-layout bg-purple">
							<u--input
													v-model="userform.nickname"
													border="none"
													placeholder="请输入个性签名"
													maxlength="6"
							></u--input>
								</view>
							</u-col>
							</u-row>
				</uni-card>
				
			</u-grid-item>
			<u-grid-item>
				<view style="margin-top: 5%;width: 80%;margin-left: 5%;">
				<u-button type="primary" shape="square" text="保存"></u-button>
				</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'mrtx.png',
				fileList1: [],
				value:'',
				userform:{
					nickname:'',
				
				}
			}
		},
		onLoad() {
			this.src=this.$tpurl+this.src;
			console.log(this.src);
		},
		methods: {

		}
	}
</script>

<style>

</style>