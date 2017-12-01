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
		position: absolute;
		right: 0px;
		width: 215px;
		margin-top: 14px;
		margin-right: 30px;
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
			<span>热点问题</span>
		</div>
		<div class="settings-body">
			<div class="msg">已创建1个问答</div>
			<div class="settings-body-condition">
				<!-- <div class="settings-body-condition-select">
					<template>
					    <Select v-model="labelName" style="width:200px">
					        <Option v-for="item in labelList" :value="item.labelId" :key="item.labelId">{{ item.labelName }}</Option>
					    </Select>
					</template>
				</div> -->
			</div>
			<div class="settings-body-table">
				<template>
				   <Table :columns="columns1" :data="tableData"></Table>
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
	            url: `http://192.168.1.6:8888/DeltaRobot/statistics/hot.action?currentPage=${this.currentPage}&perPageCount=8`,
	            method: 'POST',
	            // 请求体发送的数据
	            data: {
	            	// 数据
	            },
	            // 设置请求头
	            headers: {
	                'Content-Type': 'multipart/form-data'
	            }
	          })
		    .then((res) => {
		    	for (let i = 0; i < res.body.questions.length; i++) {
		    		this.tableData.push({
		    			'labelName': res.body.questions[i].labelName,
		    			'question': res.body.questions[i].question,
		    			'count': res.body.questions[i].count
		    		})
		    		this.pageCount = res.body.pageCount * 8;
		    	}
		    }, (err) => {
		      console.log(err);
		    })
		    /* 查询所有标签
		    this.$http({
	            url: 'host/qa/labquery',
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
		    	if (res.error) {
		    		alert(res.error);
		    		return;
		    	}
		    	for (let i = 0; i < res.body.questions.length; i++) {
		    		this.labelList.push({
		    			'labelId': res.body.labels[i].labelId,
		    			'labelName': res.body.labels[i].labelName,
		    		})
		    	}
		    }, (err) => {
		      console.log(err);
		    })*/
		  },
      data () {
        return {
        	currentPage: 1,
        	pageCount:8,
          columns1: [
            {
                title: '标签',
                key: 'labelName'
            },
            {
                title: '用户提问',
                key: 'question'
            },
            {
                title: '询问次数',
                key: 'count'
            }
	        ],
	        tableData: [
	            // {
	            //     labelName: 'John Brown',
	            //     age: 18,
	            //     question: 'New York No. 1 Lake Park',
	            //     count: '2016-10-03'
	            // },
	            // {
	            //     labelName: 'Jim Green',
	            //     age: 24,
	            //     question: 'London No. 1 Lake Park',
	            //     count: '2016-10-01'
	            // },
	            // {
	            //     labelName: 'Joe Black',
	            //     age: 30,
	            //     question: 'Sydney No. 1 Lake Park',
	            //     count: '2016-10-02'
	            // },
	            // {
	            //     labelName: 'Jon Snow',
	            //     age: 26,
	            //     question: 'Ottawa No. 2 Lake Park',
	            //     count: '2016-10-04'
	            // },
	            // {
	            //     labelName: 'John Brown',
	            //     age: 18,
	            //     question: 'New York No. 1 Lake Park',
	            //     count: '2016-10-03'
	            // },
	            // {
	            //     labelName: 'Jim Green',
	            //     age: 24,
	            //     question: 'London No. 1 Lake Park',
	            //     count: '2016-10-01'
	            // },
	            // {
	            //     labelName: 'Joe Black',
	            //     age: 30,
	            //     question: 'Sydney No. 1 Lake Park',
	            //     count: '2016-10-02'
	            // },
	            // {
	            //     labelName: 'Jon Snow',
	            //     age: 26,
	            //     question: 'Ottawa No. 2 Lake Park',
	            //     count: '2016-10-04'
	            // }
          	],

        }
      },
      methods: {
      	updateTable () {
        	this.$http({
            url: `http://192.168.1.6:8888/DeltaRobot/statistics/hot.action?currentPage=${this.currentPage}&perPageCount=8`,
            method: 'POST',
            // 请求体重发送的数据
            data: {
              // data
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
			    			'labelName': res.body.questions[i].labelName,
			    			'question': res.body.questions[i].question,
			    			'count': res.body.questions[i].count
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
				},
      }
    }
</script>