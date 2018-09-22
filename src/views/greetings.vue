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

	.settings-body {
		position: relative;
		height: 615px;
	}

	.msg {
		font-size: 36px;
		width:200px;
    height:50px;
    position:absolute;
    left:50%;
    top:50%;
    margin:-50px 0 0 -25px;
	}

</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>寒暄库</span>
			<div class="settings-header-switch">
				<template>
			     <Button type="success" shape="circle" size="large" v-if="isGreet">打开寒暄</Button>
			     <Button type="error" shape="circle" size="large" v-else>关闭寒暄</Button>
				</template>
			</div>
		</div>
		<div class="settings-body">
			<div class="msg">暂未开放</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import ipAddress from './config.js'
	export default {
		created: function () {
	    this.$http({
            url: `${ipAddress.ip}/DeltaRobot/robotinfo/greeting`,
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
	      this.isGreet =  res.body.robotInfo.robotName
	    }, (err) => {
	      console.log(err)
	    })
	  },
	  data () {
	  	return {
				isGreet: false
	  	}
	  }
	}
</script>