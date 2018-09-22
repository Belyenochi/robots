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

	.list {
		margin-top: 36px;
		height: 60px;
		font-size: 20px;
	}

	.list-header-switch {
		display: inline-block;
		position: absolute;
		right: 195px;
	}
	
	.settings-body {
		position: relative;
		height: 600px;
	}

	.settings-body-content-confirm > button {
		position: absolute;
		bottom: 86px;
		right: 73px;
		width: 120px;
		height: 60px;
		font-size: 20px;
	}
</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>自动回复</span>
		</div>
		<div class="settings-body">
			<div class="settings-body-content">
				<div class="list">
					<div class="list-header">访问业务机器人窗口时，机器人自动发送访问信息
						<div class="list-header-switch">
							<template>
						    <Switch v-model="isHello" @on-change="setReply">
						        <span slot="open">开</span>
						        <span slot="close">关</span>
						    </Switch>
							</template>
						</div>
					</div>
					<div class="list-content">
						<template>
					    <Input placeholder="您好！欢迎访问业务需求" style="width: 1450px" v-model="helloReply"></Input>
						</template>
					</div>
				</div>
				<div class="list">
					<div class="list-header">访问机器人未知的问题时回复
						<div class="list-header-switch">
							<template>
						    <Switch v-model="isUnknow" @on-change="setUnknownReply">
						        <span slot="open">开</span>
						        <span slot="close">关</span>
						    </Switch>
							</template>
						</div>
					</div>
					<div class="list-content">
						<template>
					    <Input placeholder="未知问题回复" style="width: 1450px" v-model="unknowReply"></Input>
						</template>
					</div>
				</div>
				<div class="settings-body-content-confirm">
					<Button type="primary" shape="circle" icon="ios-search" @click="saveRobotInfo" size="large">保存</Button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import ipAddress from './config.js'
	export default {
		created: function () {
	    this.$http({
        url: `${ipAddress.ip}/DeltaRobot/robotinfo/requery.action`,
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
	    	console.log(res.body.robotInfo.isHello);
	      this.unknowReply =  res.body.robotInfo.unknowReply
	      this.helloReply =  res.body.robotInfo.helloReply
	      this.isUnknow =  Boolean(res.body.robotInfo.isUnknow)
	      this.isHello =  Boolean(res.body.robotInfo.isHello)
	    }, (err) => {
	      console.log(err)
	    })
	  },
	  data () {
			return {
				unknowReply: '',
				helloReply: '',
				isUnknow: '',
				isHello: '',
				error: ''
			}
	  },
	  methods: {
	  	setReply (status) {
	  		console.log(status);
	  		this.$http({
          url: `${ipAddress.ip}/DeltaRobot/robotinfo/reply.action`,
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
      		this.error = res.body.error;
      		if (this.error) {
      			alert(this.error);
      		}
		    }, (err) => {
		      console.log(err)
		    })
	  	},
	  	setUnknownReply (status) {
	  		console.log(status);
	  		this.$http({
          url: `${ipAddress.ip}/DeltaRobot/robotinfo/unknow.action`,
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
      		this.error = res.body.error;
      		if (this.error) {
      			alert(this.error);
      		}
		    }, (err) => {
		      console.log(err)
		    })
	  	},
	  	saveRobotInfo () {
	  		console.log(this.unknowReply);
	  		this.$http({
          url: `http://192.168.1.6:8888/DeltaRobot/robotinfo/reedit.action?unknowReply=${this.unknowReply}&helloReply=${this.helloReply}`,
          method: 'POST',
          // 设置请求头
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          // 请求体发送的数据
          data: {
            
          }
        })
      	.then((res) => {
      		this.error = res.body.error;
      		if (this.error) {
      			alert(this.error);
      		} else {
      			alert("保存成功")
      		}
		    }, (err) => {
		      console.log(err)
		    })
	  	}
	  }
	}
</script>