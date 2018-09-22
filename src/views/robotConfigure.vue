<style scoped>
	.settings-header {
		background-color: #F2F2F2;
		height: 110px;
		font-size: 28px;
		line-height: 110px;
		position: relative;
	}
	.settings-header > span{
		margin-left: 50px;
	}

	.settings-header-switch {
		position: absolute;
		right: 20px;
		display: inline-block;
	}

	.settings-header-switch img{
		position: relative;
		top: 16px;
	}

	.settings-header-switch>span{
		color: red;
	}

	.settings-body {
		position: relative;
		height: 615px;
	}

	.settings-body > button {
		position: absolute;
		bottom: 86px;
		right: 73px;
	}

	.settings-body-content {
		height: auto;
	}

	.settings-body-content .list{
		height: 60px;
		margin-top: 48px;
	}

	.list-header {
		width: 196px;
		height: 60px;
		text-align: center;
		font-size: 20px;
		line-height: 60px;
		display: inline-block;
	}

	.list-content {
		display: inline-block;
		width: 800px;
	}

	.ivu-btn-circle-outline.ivu-btn-large, .ivu-btn-circle.ivu-btn-large {
		width: 120px;
		height: 60px;
		font-size: 20px;
	}
</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>机器人设置</span>
			<div class="settings-header-switch">
				<span>APP</span>
				<template>
            <Switch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </template>
        <img src="../images/weixin.png">
				<template>
            <Switch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </template>
        <img src="../images/brower.png">
				<template>
            <Switch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </template>
			</div>
		</div>
		<div class="settings-body">
			<div class="settings-body-content">
				<div class="list">
					<div class="list-header">昵称</div>
					<div class="list-content">
						<template>
					    <Input v-model= "robotName" placeholder="This robots Name..." style="width: 800px" :autofocus="true"></Input>
						</template>
					</div>
				</div>
				<div class="list">
					<div class="list-header">简介</div>
					<div class="list-content">
						<template>
					    <Input v-model="robotDetail" placeholder="This robots brief..." style="width: 800px"></Input>
						</template>
					</div>
				</div>
				<div class="list">
					<div class="list-header">未知说辞</div>
					<div class="list-content">
						<template>
					    <Input v-model="unknowReply" placeholder="This robots position..." style="width: 800px"></Input>
						</template>
					</div>
				</div>
			</div>
			<template>
		    <Button type="primary" shape="circle" icon="ios-search" @click="saveRobotInfo" size="large">保存</Button>
			</template>
		</div>
	</div>
</template>
<script type="text/javascript">
import ipAddress from './config.js'
	export default {
		created: function () {
		    this.$http({
	            url: `${ipAddress.ip}/DeltaRobot/robotinfo/query.action`,
	            method: 'POST',
	            // 请求体重发送的数据
	            data: {
	                
	            },
	            // 设置请求头
	            headers: {
	                'Content-Type': 'application/x-www-form-urlencoded'
	            }
	          })
		    .then((res) => {
		      this.robotName =  res.body.robotInfo.robotName
		      this.robotDetail =  res.body.robotInfo.robotDetail
		      this.unknowReply =  res.body.robotInfo.unknowReply
		    }, (err) => {
		      console.log(err)
		    })
		  },
		  data () {
				return {
					robotName: '',
					robotDetail: '',
					unknowReply: '',
					error: ''
				}
		  },
		  methods: {
		  	saveRobotInfo () {
		  		console.log(this.robotName, this.robotDetail, this.robotDetail);
		  		if (!this.robotName) {
		  			alert("昵称不能为空")
						return;
		  		} else if (!this.robotDetail){
						alert("简介不能为空")
						return;
		  		} else if (!this.robotDetail){
						alert("未知说辞不能为空")
						return;
		  		}
		  		this.$http({
	            url: `${ipAddress.ip}/DeltaRobot/robotinfo/edit.action?robotName=${this.robotName}&robotDetail=${this.robotDetail}&unknowReply=${this.unknowReply}`,
	            method: 'POST',
	            // 请求体重发送的数据
	            data: {
	        //         robotName: this.robotName,
									// robotDetail: this.robotDetail,
									// unknowReply: this.unknowReply
	            },
	            // 设置请求头
	            headers: {
	                'Content-Type': 'application/x-www-form-urlencoded'
	            }
	          })
			    .then((res) => {
			    	this.error = res.body.error;
			      if (!res.body.error) {
			      	alert("修改机器人配置成功");
			      }
			    }, (err) => {
			      console.log(err)
			    })
		  }
		}
	}
</script>