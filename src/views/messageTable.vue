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

	.settings-body {
		margin-left: 31px;
		height: 15px;
		width: 1350px;
		position: relative;
	}

	.settings-body-doughnut{
		width: 150px;
		height: 150px;
		overflow: hidden;
		display: inline;
	}

	.settings-body-select {
		position: absolute;
		top: 10px;
		right: -300px;
		width: 280px;
	}

	.settings-body-select span {
		position: relative;
		top: 15px;
		margin-right: 10px;
	}
</style>
<template>
	<div class="settings">
		<div class="settings-header">
			<span>消息报表</span>
		</div>
		<div class="settings-body">
			<template>
			  <my-table-bar :chart-data = "data" :options="{responsive: true, maintainAspectRatio: false}" :width="1000" :height="300" ref="bar"/>
			</template>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "talkCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "answerCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "greetingCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<br>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "businessCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "missingCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<div class="settings-body-doughnut">
				<template>
					<my-table-doughnut :chart-data = "unknowCount" :options="{responsive: true, maintainAspectRatio: false}" :width="150" :height="150" :styles="myStyles"/>
				</template>
			</div>
			<div class="settings-body-select">
				<template>
					<template>
						<span>统计方式</span>
				    <Select v-model="statistic" style="width:150px;margin-top: 30px;" @on-change="showDetailTime">
				        <Option v-for="item in count" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
					</template>
				</template>
				<br>
				<template>
					<span>具体时间</span>
					<Select v-model="year" style="width:150px;margin-top: 30px;" v-show="isYear" @on-change="seletTable">
			        <Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			  </template>
			  <template>
			    <Select v-model="month" style="width:150px;margin-top: 30px;margin-left: 68px" v-show="ismonth" @on-change="seletTable">
			        <Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			  </template>
			  <template>
			    <Select v-model="day" style="width:150px;margin-top: 30px;margin-left: 68px" v-show="isDay" @on-change="seletTable">
			        <Option v-for="item in dayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
				</template>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import myTableBar from './myTableBar.js'
	import myTableDoughnut from './myTableDoughnut.js'
	import ipAddress from './config.js'
	export default {
	  components: { myTableBar, myTableDoughnut },
		data () {
			return {
				data : null,
    		talkCount : null,
    		answerCount: null,
    		greetingCount: null,
    		businessCount: null,
    		missingCount: null,
    		unknowCount: null,
    		isYear: true,
    		ismonth: false,
    		isDay: false,
    		statistic: '',
				statistics: {
					"talkCount":"",
					"answerCount":"",
					"greetingCount":"",
					"businessCount":"",
					"missingCount":"",
					"unknowCount":""
				},
     		yearList: [{
					value: 2017,
					label: 2017
     		},{
					value: 2018,
					label: 2018
     		},{
					value: 2019,
					label: 2019
     		},{
					value: 2020,
					label: 2020
     		},{
					value: 2021,
					label: 2021
     		},{
					value: 2022,
					label: 2022
     		}],
     		monthList: [{
     			value: 1,
     			label: '一月'
     		},{
     			value: 2,
     			label: '二月'
     		},{
     			value: 3,
     			label: '三月'
     		},{
     			value: 4,
     			label: '四月'
     		},{
     			value: 5,
     			label: '五月'
     		},{
     			value: 6,
     			label: '六月'
     		},{
     			value: 7,
     			label: '七月'
     		},{
     			value: 8,
     			label: '八月'
     		},{
     			value: 9,
     			label: '九月'
     		},{
     			value: 10,
     			label: '十月'
     		},{
     			value: 11,
     			label: '十一月'
     		},{
     			value: 12,
     			label: '十二月'
     		}],
     		dayList: [{
     			value: 1,
     			label:1
     		},{
     			value: 2,
     			label:2
     		},{
     			value: 2,
     			label:2
     		},{
     			value: 3,
     			label:3
     		},{
     			value: 4,
     			label:4
     		},{
     			value: 5,
     			label:5
     		},{
     			value: 6,
     			label:6
     		},{
     			value: 7,
     			label:7
     		},{
     			value: 8,
     			label:8
     		},{
     			value: 9,
     			label:9
     		},{
     			value: 10,
     			label:10
     		},{
     			value: 11,
     			label:11
     		},{
     			value: 12,
     			label:12
     		},{
     			value: 13,
     			label:13
     		},{
     			value: 14,
     			label:14
     		},{
     			value: 15,
     			label:15
     		},{
     			value: 16,
     			label:16
     		},{
     			value: 17,
     			label:17
     		},{
     			value: 18,
     			label:19
     		},{
     			value: 20,
     			label: 20
     		},{
     			value: 21,
     			label:21
     		},{
     			value: 22,
     			label:22
     		},{
     			value: 23,
     			label:23
     		},{
     			value: 24,
     			label:24
     		},{
     			value: 25,
     			label:25
     		},{
     			value: 26,
     			label:26
     		},{
     			value: 27,
     			label:27
     		},{
     			value: 28,
     			label:28
     		},{
     			value: 29,
     			label:29
     		},{
     			value: 30,
     			label:30
     		},{
     			value: 31,
     			label:31
     		}],
     		year: '',
     		month: '',
     		day: '',
     		count: [{
     			value: 'year',
     			label: '年'
     		}, {
     			value: 'month',
     			label: '月'
     		}, {
     			value: 'day',
     			label: '日'
     		}]
			}
		},
		computed: {
	    myStyles () {
	      return {
	      	marginLeft: '100px',
	      	marginRight: '150px',
	        display: 'inline-block'
	      }
	    }
	  },
	  methods: {
	  	showDetailTime () {
	  		/*if (this.data) {
	  			this.data = {
						 datasets: [
			        {
			          label: 'GitHub Commits',
			          backgroundColor: '#f87979',
			          data: [10, 20, 30]
			        }
	      		],
			      labels: ['talkCount', 'answerCount', 'greetingCount', 'businessCount', 'missingCount', 'unknowCount']
	    		}
	    		return;
	  		}
				this.data = {
					 datasets: [
		        {
		          label: 'GitHub Commits',
		          backgroundColor: '#f87979',
		          data: [10, 20]
		        }
      		],
		      labels: ['talkCount', 'answerCount', 'greetingCount', 'businessCount', 'missingCount', 'unknowCount']
    		}*/
	  		// 初始化
	  		this.ismonth =  false;
	  		this.isDay = false;

	  		if (this.statistic === "month") {
	  			this.ismonth = true;
	  		} else if (this.statistic === "day") {
	  			this.ismonth = true;
	  			this.isDay = true;
	  		}
	  	},
	  	seletTable () {

	  		// 查询统计报表
	  		switch(this.statistic) {
	  			case "year":
	  				if (!this.year) {
	  					return;
	  				}
						this.updateStatistics (`${ipAddress.ip}/DeltaRobot/statistics/yearquery.action`)
	  				break;
	  			case "month":
	  				if (!this.year) {
	  					return;
	  				} else if (!this.month) {
	  					return;
	  				}
	  				this.updateStatistics (`${ipAddress.ip}/DeltaRobot/statistics/monthquery.action`)
	  				break;
	  			case "day":
		  			if (!this.year) {
	  					return;
	  				} else if (!this.month) {
	  					return;
	  				} else if (!this.day) {
	  					return;
	  				}
	  				this.updateStatistics (`${ipAddress.ip}/DeltaRobot/statistics/dayquery.action`)
	  				break;
	  		}
	  	},
			updateStatistics (url) {
				// 初始化表格
				// this.data = null;
				// this.talkCount = null;
				// this.answerCount = null;
				// this.greetingCount = null;
				// this.businessCount = null;
				// this.missingCount = null;
				// this.unknowCount = null;
				this.$http({
	            'url': url + `?year=${this.year}&month=${this.month}&day=${this.day}`,
	            method: 'POST',
	            // 请求体发送的数据
	            data: {
	               //year: this.year,
	               //month: this.month,
	               //day: this.day
	            },
	            // 设置请求头
	            headers: {
	                'Content-Type': 'application/x-www-form-urlencoded'
	            }
	          })
				    .then((res) => {
				    	let statistics = res.body.statistics;
				    	console.log(statistics);
				    	var propList = [];
				    	for (var prop in statistics) {
				    		console.log(statistics[prop]);
				    		if (statistics.hasOwnProperty(prop)) {
				    			propList.push(statistics[prop])
				    		}
				    	}
				    	console.log(propList);
				    	this.data = {
								 datasets: [
					        {
					          label: 'GitHub Commits',
					          backgroundColor: '#f87979',
					          data: propList
					        }
			      		],
					      labels: ['talkCount', 'answerCount', 'greetingCount', 'businessCount', 'missingCount', 'unknowCount']
			    		},
			    		this.talkCount = {
								 datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.talkCount]
					        }
			      		],
					      labels: ['talkCount']
			    		},
			    		this.answerCount = {
			    			datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.answerCount]
					        }
			      		],
					      labels: ['answerCount']
			    		},
			    		this.greetingCount = {
			    			datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.greetingCount]
					        }
			      		],
					      labels: ['answerCount']
			    		},
			    		this.businessCount = {
			    			datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.businessCount]
					        }
			      		],
					      labels: ['businessCount']
			    		},
			    		this.missingCount = {
			    			datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.missingCount]
					        }
			      		],
					      labels: ['missingCount']
			    		},
			    		this.unknowCount = {
			    			datasets: [
					        {
					          label: 'talkCount',
					          backgroundColor: '#f87979',
					          data: [res.body.statistics.unknowCount]
					        }
			      		],
					      labels: ['unknowCount']
			    		}
				    }, (err) => {
				      console.log(err)
				    })
			}
	  }
	}


</script>