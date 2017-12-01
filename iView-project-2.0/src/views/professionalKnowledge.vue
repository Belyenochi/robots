<style scoped>
	.settings {
		border: 1px solid rgba(204, 204, 204, 1);
	}

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

	.settings-body {
		position: relative;
		height: 615px;
		width: auto;
	}

	.msg {
		font-size: 20px;
		margin-left: 31px;
		margin-bottom: 15px;
		margin-top: 15px;
	}

	.settings-body-condition {
		margin-left: 31px;
		font-size: 20px;
		width: 1350px;
		height: 60px;
		background-color: #DCE9F2;
		position: relative;
		border: 1px solid rgba(204, 204, 204, 1);
	}

	.settings-body-condition-select {
		display: inline-block;
		width: auto;
		width: auto;
		margin-top: 14px;
		margin-left: 30px;
	}

	.settings-body-condition-settings {
		position: relative;
		left: 30px;
		margin-left: 350px;
		display: inline-block;
	}

	.settings-body-condition-settings-button {
		display: inline-block;
		margin-top: 14px;
		margin-left: 30px;
	}

	.settings-body-table {
		margin-left: 31px;
		width: 1350px;
	}

	.settings-body-table-page {
		margin-top: 10px;
		text-align: center;
	}

	.settings-body-condition-settings-input{
		margin-top: 20px;
		margin-left: 15px;
		text-align: left;
		margin-top: 5px;
		margin-left: 0px;
	}

	.settings-body-condition-settings-input span {
		display: inline-block;
		margin-right: 10px;
	}
</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>业务知识库</span>
		</div>
		<div class="settings-body">
			<div class="msg">已创建<span v-html="pageCount"></span>个问答</div>
			<div class="settings-body-condition">
				<div class="settings-body-condition-select">
					<template>
				    <Input icon="ios-search-strong" placeholder="Enter something..." style="width: 200px" v-model="labelName" @on-enter="updateTable"></Input>
					</template>
				</div>
				<div class="settings-body-condition-settings">
					<div class="settings-body-condition-settings-button" v-if="allSelect == false">
						<template>
					    <Button type="primary" @click="handleSelectAll(true)">选择全部</Button>
						</template>
					</div>
					<div class="settings-body-condition-settings-button" v-else>
						<template>
					    <Button type="primary" @click="handleSelectAll(false)">取消全选</Button>
						</template>
					</div>
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="primary" shape="circle" @click="modal1 = true">添加问答</Button>
						</template>
						<template>
			    <Modal
			        v-model="modal1"
			        title="添加问答"
			        @on-ok="ok"
			        @on-cancel="cancel">
			        <div class="settings-body-condition-settings-input">
				        <span>标准问法</span>
				        <template>
								    <Input v-model="standardQuestion" placeholder="请输入标准问法..." style="width: 400px"></Input>
								</template>
							</div>
							<div class="settings-body-condition-settings-input">
				        <span>相似问法</span>
				        <template>
								    <Input v-model="similarQuestion" placeholder="请输入相似问法..." style="width: 400px"></Input>
								</template>
							</div>
							<div class="settings-body-condition-settings-input">
								<span>添加答案</span>
				        <template>
								    <Input v-model="answer" placeholder="请输入添加答案..." style="width: 400px"></Input>
								</template>
							</div>
			    </Modal>
					</template>
					</div>
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="ghost" shape="circle">导入问答</Button>
						</template>
					</div>
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="ghost" shape="circle">导出问答</Button>
						</template>
					</div>
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="ghost" shape="circle">导出全部</Button>
						</template>
					</div>
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="error" @click="deleteQuesAnse">删除选中</Button>
						</template>
					</div>
				</div>
			</div>
			<div class="settings-body-table">
				<template>
				   <Table border ref="selection" :columns="columns1" :data="tableData" @on-select="updateSelectData" @on-select-all="updateSelectData"></Table>
				</template>
			</div>
			<div class="settings-body-table-page">
				<template>
				  <Page :total="pageCount" :page-size="8" :current="this.currentPage" show-elevator @on-change="changePage"></Page>
				</template>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created: function () {
	    this.$http({
            url: `http://192.168.1.6:8888/DeltaRobot/qa/query.action?labelName=${this.labelName}&currentPage=${this.currentPage}&perPageCount=8`,
            method: 'POST',
            // 请求体发送的数据
            data: {
               // 'labelName': this.labelName,
               // 'currentPage': this.currentPage,
               // 'perPageCount': 8
            },
            // 设置请求头
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
	    .then((res) => {
	    	console.log(res);
	    	for (let i = 0; i < res.body.questions.length; i++) {
	    		this.tableData.push({
	    			'questionId': res.body.questions[i].standardQuestion.questionId,
	    			'labelName': res.body.questions[i].label.labelName,
	    			'questionContent': res.body.questions[i].standardQuestion.questionContent,
	    			'answer': res.body.questions[i].label.answer
	    		})
	    		this.pageCount = res.body.pageCount * 8;
	    	}
	    }, (err) => {
	      console.log(err);
	    })
	  },
    data () {
      return {
      	allSelect: false,
      	modal1: false,
      	currentPage: 1,
      	pageCount: 1,
        columns1: [
          {
              type: 'selection',
              width: 60,
              align: 'center'
          },
          {
              title: '标签名',
              key: 'labelName'
          },
          {
              title: '用户输入',
              key: 'questionContent'
          },
          {
              title: '回答',
              key: 'answer'
          }
        ],
        tableData: [
            // {
            //   labelName: 18,
            //   questionContent: 'New York No. 1 Lake Park',
            //   answer: '2016-10-03',
            //   questionId: 12
            // },
            // {
            //   labelName: 24,
            //   questionContent: 'London No. 1 Lake Park',
            //   answer: '2016-10-01',
            //   questionId: 12
            // },
            // {
            //   labelName: 30,
            //   questionContent: 'Sydney No. 1 Lake Park',
            //   answer: '2016-10-02',
            //   questionId: 12
            // },
            // {
            //   labelName: 26,
            //   questionContent: 'Ottawa No. 2 Lake Park',
            //   answer: '2016-10-04',
            //   questionId: 12
            // },
            // {
            //   labelName: 18,
            //   questionContent: 'New York No. 1 Lake Park',
            //   answer: '2016-10-03',
            //   questionId: 12
            // },
            // {
            //   labelName: 24,
            //   questionContent: 'London No. 1 Lake Park',
            //   answer: '2016-10-01',
            //   questionId: 12
            // },
            // {
            //   labelName: 30,
            //   questionContent: 'Sydney No. 1 Lake Park',
            //   answer: '2016-10-02',
            //   questionId: 12
            // },
            // {
            //   labelName: 26,
            //   questionContent: 'Ottawa No. 2 Lake Park',
            //   answer: '2016-10-04',
            //   questionId: 12
            // }
        	],
        	seltectData: [],
        	standardQuestion: '',
	      	similarQuestion: '',
	      	answer: '',
	      	labelName: '',
	      	error: '',
        }
      },
      methods: {
      	ok () {
            this.$http.post('http://192.168.1.6:8888/DeltaRobot/qa/add.action'
	            ,
	            // 请求体发送的数据
	            {
	              standard: {
									standardQuestion: this.standardQuestion,
									standardWord: [{
										wordText: '1',
										wordSex: '1'
									}]
	              },
	              similarQuestions: [{
									similar: {
										similarQuestion: this.similarQuestion,
										similarWord: [
											{
												wordText: '',
												wordSex: ''
											}
										]
									}
	              }],
	              answer: this.answer
	            }
          )
			    .then((res) => {
			    	alert('success');
			    	this.error =  res.body.error
			    	if (this.error) {
			    		alert(this.error)
			    		return;
			    	} else {
			    		alert("添加成功!")
			    	}
			    	this.tableData = [];
			    	this.updateTable();
			    }, (err) => {
			      console.log(err)
			    })
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        },
        handleSelectAll (status) {
        		this.allSelect = status
            this.$refs.selection.selectAll(status);
        },
        updateSelectData (array) {
        	array.forEach((item) => {
        	  this.seltectData.push({
        	  	'questionId': item.questionId
        	  })
        	})
        },
        deleteQuesAnse () {
			    this.$http.post('http://192.168.1.6:8888/DeltaRobot/qa/delete.action',
            {
              "questions":this.seltectData
            }
          )
			    .then((res) => {
			    	this.error =  res.body.error
			    	if (this.error) {
			    		alert(this.error)
			    		return;
			    	} else {
			    		alert("删除成功!")
			    	}
			    	this.tableData = [];
			    	this.updateTable();
			    }, (err) => {
			      console.log(err)
			    })
        },
        updateTable () {
        	this.$http({
            url: `http://192.168.1.6:8888/DeltaRobot/qa/query.action?labelName=${this.labelName}&currentPage=${this.currentPage}&perPageCount=8`,
            method: 'POST',
            // 请求体重发送的数据
            data: {
               // 'labelName': this.labelName,
               // 'currentPage': this.currentPage,
               // 'perPageCount': 8
            },
            // 设置请求头
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
			    .then((res) => {
			    	this.tableData = [];
			    	for (let i = 0; i < res.body.questions.length; i++) {
			    		this.tableData.push({
			    			'questionId': res.body.questions[i].standardQuestion.questionId,
			    			'labelName': res.body.questions[i].label.labelName,
			    			'questionContent': res.body.questions[i].standardQuestion.questionContent,
			    			'answer': res.body.questions[i].label.answer
			    		})
			    		this.pageCount = res.body.pageCount * 8;
			    	}
			    }, (err) => {
			      console.log(err);
			    })
        },
				changePage (toPage) {
					this.currentPage = toPage;
					this.updateTable();
				}
      }
    }
</script>