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
		position: absolute;
		right: 20px;
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
</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>智能学习</span>
		</div>
		<div class="settings-body">
			<div class="msg">已创建<span v-html="pageNum"></span>个问答</div>
			<div class="settings-body-condition">
				<div class="settings-body-condition-select">
					<template>
				    <Input icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" v-model="labelName" @on-enter="updateTable"></Input>
					</template>
				</div>
				<div class="settings-body-condition-settings">
					<div class="settings-body-condition-settings-button">
						<template>
					    <Button type="error" @click="deleteQuesAnse">删除选中</Button>
						</template>
					</div>
				</div>
			</div>
			<div class="settings-body-table">
				<template>
				   <Table :columns="columns1" :data="tableData" @on-select="updateSelectData" @on-select-all="updateSelectData"></Table>
				</template>
			</div>
			<div class="settings-body-table-page">
				<template>
				  <Page :total="pageCount * 8" :page-size="8" :current="this.currentPage" show-elevator @on-change="changePage"></Page>
				</template>
			</div>
			<template>
				<Modal
	        v-model="isRelated"
	        title="确认"
	        @on-ok="doRelated"
	        @on-cancel="cancel">
	        <p>确定关联吗？</p>
		    </Modal>
			</template>
			<template>
				<Modal
	        v-model="isDelete"
	        title="确认"
	        @on-ok="doDelete"
	        @on-cancel="cancel">
	        <p>取消关联吗？</p>
		    </Modal>
			</template>
			<template>
				<Modal
	        v-model="isDetail"
	        title="查看详情"
	        @on-ok="seeDetail"
	        @on-cancel="cancel">
	        <span>用户输入</span>
	        <span style="margin-left: 20px;margin-right: 20px" v-html="selectQuestionContent"></span>
	        <span>系统回答</span>
	        <span style="margin-left: 20px;margin-right: 20px" v-html="selectAnswer"></span>
		    </Modal>
			</template>
			<template>
    			<Modal
    	        v-model="isOther"
    	        title="关联到其他"
    	        @on-ok="doRelatedOther"
    	        @on-cancel="cancel">
    	        <span style="margin-right: 20px">标签</span>
    	        <template>
    				    <Select v-model="selectLabelId" style="width:200px">
    				        <Option v-for="item in labelList" :value="item.labelId" >{{ item.labelName }}</Option>
    				    </Select>
    					</template>
    		    </Modal>
			</template>
		</div>
	</div>
</template>
<script type="text/javascript">
import ipAddress from './config.js'
	export default {
			created: function () {
		    this.$http({
	            url: `${ipAddress.ip}/DeltaRobot/qa/misquery.action?labelName=${this.labelName}&currentPage=${this.currentPage}&perPageCount=8`,
	            method: 'POST',
	            // 请求体重发送的数据
	            data: {
	               // 'labelName': this.labelName,
	               // 'currentPage': this.currentPage,
	               // 'perPageCount': 8
	            },
	            // 设置请求头
	            headers: {
	                'Content-Type': 'application/x-www-form-urlencoded'
	            }
	          })
		    .then((res) => {
                console.log(res);
		    	for (let i = 0; i < res.body.questions.length; i++) {
		    		this.tableData.push({
		    			'labelId': res.body.questions[i].label.labelId,
		    			'labelName': res.body.questions[i].label.labelName,
		    			'questionContent': res.body.questions[i].userQuestion.questionContent,
		    			'count': res.body.questions[i].count,
		    			'answer': res.body.questions[i].label.answer
		    		})
		    		this.pageNum ++;
		    	}
                this.PageCount = res.body.pageCount;
		    }, (err) => {
		      console.log(err);
		    })
		    this.$http({
	            url: `${ipAddress.ip}/DeltaRobot/qa/labquery.action`,
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
                console.log(res);
		    	for (let i = 0; i < res.body.labels.length; i++) {
		    		this.labelList.push({
		    			'labelId': res.body.labels[i].labelId,
		    			'labelName': res.body.labels[i].labelName,
		    		})
		    	}
		    }, (err) => {
		      console.log(err);
		    })
		  },
      data () {
        return {
          columns1: [
            {
              type: 'selection',
              width: 60,
              align: 'center',
              render: (h, params) => {
                  return h('div', [
                      h('Icon', {
                          props: {
                              type: 'person'
                          }
                      }),
                      h('strong', params.row.name)
                  ]);
              }
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
                title: '询问次数',
                key: 'count'
            },
            {
                title: '操作',
                key: 'action',
                width: 350,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small',
                                shape: 'circle'
                            },
                            style: {
                            	width: '70px',
                              marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params)
                                }
                            }
                        }, '关联'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small',
                                shape: 'circle'
                            },
                            style: {
                            	width: '70px',
                              marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.remove(params)
                                }
                            }
                        }, '取关'),
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small',
                                shape: 'circle'
                            },
                            style: {
                            	width: '70px',
                              marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.detail(params)
                                }
                            }
                        }, '详情'),
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small',
                                shape: 'circle'
                            },
                            style: {
                            	width: '70px',
                              marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.other(params)
                                }
                            }
                        }, '其他')
                    ]);
                }
            }
	        ],
	        tableData: [
            // {
            //     labelName: 'John Brown',
            //     questionContent: 18,
            //     count: 'New York No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Jim Green',
            //     questionContent: 24,
            //     count: 'London No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Joe Black',
            //     questionContent: 30,
            //     count: 'Sydney No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Jon Snow',
            //     questionContent: 26,
            //     count: 'Ottawa No. 2 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'John Brown',
            //     questionContent: 18,
            //     count: 'New York No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Jim Green',
            //     questionContent: 24,
            //     count: 'London No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Joe Black',
            //     questionContent: 30,
            //     count: 'Sydney No. 1 Lake Park',
            //     labelId: '',
            //     answer: ''
            // },
            // {
            //     labelName: 'Jon Snow',
            //     questionContent: 26,
            //     count: 'Ottawa No. 2 Lake Park',
            //     labelId: '',
            //     answer: ''
            // }
        	],
        	labelList: [],
        	labelName: '',
        	labelId: '',
        	'questionContent': '',
        	seltectData: [],
        	currentPage: 1,
        	pageCount: 1,
        	error: '',
        	answer: '',
        	selectQuestionContent: '',
        	selectAnswer: '',
        	selectLabelId: '',
        	isRelated: false,
        	isDelete: false,
			isDetail: false,
			isOther: false,
            pageNum: 0
        }
      },
      methods: {
      	show (params) {
          this.labelId = params.row.labelId;
          this.questionContent = params.row.questionContent;
          this.isRelated = true;
        },
        remove (params) {
          this.questionContent = params.row.questionContent;
          this.isDelete = true;
        },
        detail (params) {
        	this.selectQuestionContent = params.row.questionContent;
        	this.selectAnswer = params.row.answer;
        	this.isDetail = true;
        },
        other (params) {
            console.log(params);
    		this.selectQuestionContent = params.row.questionContent;
    		this.isOther = true;
        },
        updateSelectData (array) {
        	array.forEach((item) => {
        	  this.seltectData.push({
        	  	'userQuestion': item.questionContent
        	  })
        	})
        },
        deleteQuesAnse () {
			this.$http.post(
                `${ipAddress.ip}/DeltaRobot/qa/delete.action`,
                {
                  "questions": this.seltectData
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
    	    	this.updateTable();
    	    }, (err) => {
    	      console.log(err)
    	    })
        },
        doRelatedOther () {
		    this.$http({
                url: `${ipAddress.ip}/DeltaRobot/qa/relevance.action?labelId=${this.selectLabelId}&questionContent=${this.selectQuestionContent}`,
                method: 'POST',
                data: {
                	// "labelId": this.selectLabelId,
                    //    "questionContent":this.selectQuestionContent
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
    	    .then((res) => {
    	    	this.error =  res.body.error
    	    	if (this.error) {
    	    		alert(this.error)
    	    		return;
    	    	}
    	    	this.updateTable();
    	    }, (err) => {
    	      console.log(err)
    	    })
        },
        updateTable () {
        	this.$http({
            url: `${ipAddress.ip}/DeltaRobot/qa/misquery.action?labelName=${this.labelName}&currentPage=${this.currentPage}&perPageCount=8`,
            method: 'POST',
            // 请求体重发送的数据
            data: {
               // 'labelName': this.labelName,
               // 'currentPage': this.currentPage,
               // 'perPageCount': 8
            },
            // 设置请求头
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
			    .then((res) => {
			    	this.tableData = [];
				this.pageNum = 0;
			    	for (let i = 0; i < res.body.questions.length; i++) {
			    		this.tableData.push({
			    			'labelId': res.body.questions[i].label.labelId,
			    			'labelName': res.body.questions[i].label.labelName,
			    			'questionContent': res.body.questions[i].userQuestion.questionContent,
			    			'count': res.body.questions[i].count,
			    			'answer': res.body.questions[i].label.answer
			    		})
			    		this.pageNum ++;
			    	}
                    this.pageCount = res.body.pageCount;
			    }, (err) => {
			      console.log(err);
			    })
        },
        changePage (toPage) {
					this.currentPage = toPage;
					this.updateTable();
				},
		doRelated () {
            this.$http({
            url: `${ipAddress.ip}/DeltaRobot/qa/relevance.action?labelId=${this.labelId}&questionContent=${this.questionContent}`,
            method: 'POST',
            // 请求体重发送的数据
            data: {
               // 'labelId': this.labelId,
               // 'questionContent': this.questionContent,
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
			    		return;
			    	}
			    	this.updateTable();
			    }, (err) => {
			      console.log(err);
			    })
        },
        doDelete () {
        	this.$http.post(
            `${ipAddress.ip}/DeltaRobot/qa/ignore.action`,
            // 请求体重发送的数据
            {
                type: 4,
                questions: [{
                    userQuestion:this.questionContent
                }]
            },
          )
			    .then((res) => {
			    	this.error = res.body.error;
			    	if (this.error) {
			    		alert(this.error);
			    		return;
			    	}
			    	this.updateTable();
			    }, (err) => {
			      console.log(err);
			    })
        },
        seeDetail () {
        	// 确定
        },
        cancel () {
            // 取消dialog
        }
      }
    }
</script>