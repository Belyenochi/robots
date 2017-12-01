<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	.bc {
		height: 949px;
		background: url('../images/bc.jpg');
	}
	.bc-chat {
		position: absolute;
		top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
		height: 800px;
		border-radius:10px;
		background: #F2F2F2;
	}

	.bc-chat-header {
		padding-top: 30px;
		padding-left: 20px;
		font-size: 15px;
		border-bottom: 1px solid #000000;
		height: 80px;
	}

	.bc-chat-content {
		height: 550px;
		overflow: scroll;
	}

	.bc-chat-enter {
		height: 170px;
		position: relative;
		border-top: 1px solid #000000; 
	}

	.bu-chat-enter-send {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}

	.bu-chat-enter-send button{
		width: 100px;
		height: 50px;
	}

	.bu-chat-enter-send button span {
		font-size: 20px;
	}

	.bc-chat-content-message {
		margin: 10px 0 0 10px;
	}

	.demo-spin-icon-load{
      animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
      from { transform: rotate(0deg);}
      50%  { transform: rotate(180deg);}
      to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
      height: 100px;
      width: auto;
      position: relative;
      border: 1px solid #eee;
      text-align: center;
  }
	.ivu-spin-fix {
		background-color: #F2F2F2
	}

	.ivu-spin-main {
		margin: auto;
	}

	.demo-spin-col.ivu-col.ivu-col-span-8 {
		width: 1000px;
		height: 100px;
	}
</style>
<template>
	<div class="bc">
		<div class="bc-chat">
			<div class="bc-chat-header">
				Delta
			</div>
			<div class="bc-chat-content">
				<div class="bc-chat-content-message" v-for="message in messages" v-if="message.type == 'answer'">
					<template>
				    <div class="demo-avatar">
				        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
				    </div>
					</template>
					<template>
				    <div style="background:#eee;padding: 20px">
				        <Card :bordered="false">
				            <p slot="title">Delta say</p>
				            <p v-html="message.content"></p>
				        </Card>
				    </div>
					</template>
				</div>
				<div class="bc-chat-content-message" v-else>
					<template>
				    <div class="demo-avatar">
				        <Avatar style="background-color: #87d068" icon="person" />
				    </div>
				    <template>
					    <div style="background:#eee;padding: 20px">
					        <Card :bordered="false">
					            <p slot="title">you say</p>
					            <p v-html="message.content"></p>
					        </Card>
					    </div>
						</template>
					</template>
					<template>
				    <Row>
				         <Col class="demo-spin-col" span="8" v-show="isLoad">
				            <Spin fix>
				                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
				                <div>Loading</div>
				            </Spin>
				        </Col>
				    </Row>
				</template>
				</div>
			</div>
			<div class="bc-chat-enter">
				<div class="bc-chat-enter-content">
					<template>
				    <Input v-model="myText" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="Enter something..." ></Input>
					</template>
				</div>
				<div class="bu-chat-enter-send">
					<template>
						<Button type="primary" shape="circle" @click="sendMessage">发送</Button>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created: function () {
	    this.$http({
            url: 'host/robotinfo/requery',
            method: 'POST',
            // 请求体重发送的数据
            data: {
                
            },
            // 设置请求头
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
	    .then((res) => {
	      this.messages.push({ 'type': 'answer','content': res.body.helloReply})
	      this.isHello = res.isHello
	    }, (err) => {
	      console.log(err)
	    })
	  },
    data () {
    	return {
    		helloReply: '',
    		isHello: true,
    		messages: [],
    		myText: '',
    		content: '',
    		isLoad: false
    	}
    },
    methods: {
			sendMessage () {
				if (!this.myText) {
					alert("输入不能为空");
					return;
				}
				this.isLoad = true;
				this.$http({
            url: 'http://localhost:3000/greet?msg=' + this.myText,
            method: 'get',
            // 请求体重发送的数据
            data: {
                // data
            },
            // 设置请求头
            headers: {
              // headers
            }
          })
		    .then((res) => {
		    	console.log(res);
		    	this.isLoad = false;
		    	this.messages.push({ 'type': 'question','content': this.myText});
		      this.messages.push({ 'type': 'answer','content': res.body.content});
		      this.$http({
            url: 'host/greet/record',
            method: 'POST',
            // 请求体重发送的数据
            data: {
                // data
                greetContent: this.myText,
                greetAnswer: res.body.content,
                userId: 1
            },
            // 设置请求头
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
			    	if (res.body.error) {
			    		alert(res.body.error)
			    	}
			    }, (err) => {
			      console.log(err);
			    })
		      this.myText = '';
		      this.content = '';
		    }, (err) => {
		      console.log(err)
		    })
			}
    }
  }
</script>