<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 560px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 400px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 745px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        height: 850px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-content span {
        display: inline-block;
        width: 290px;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" :active-name="1">
           <!--  <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    智能机器人
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    管理员操作
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    消息报表
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    热点问题
                </MenuItem>
            </div> -->
        </Menu>
        <Menu mode="horizontal" :active-name="index">
            <div class="layout-assistant" v-show="state == 'setting'">
                <MenuItem name="1-1"><span @click="clickFn('/manager','1-1')">机器人配置</span></MenuItem>
                <MenuItem name="1-2"><span @click="clickFn('/autoReply','1-2')">自动回复</span></MenuItem>
                <MenuItem name="1-3"><span @click="clickFn('/greetings','1-3')">寒暄库</span></MenuItem>
                <MenuItem name="1-4"><span @click="clickFn('/professionalKnowledge','1-4')">业务知识库</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'manager'">
                <MenuItem name="2-1"><span @click="clickFn('/intelligentLearning','2-1')">智能学习</span></MenuItem>
                <MenuItem name="2-2"><span @click="clickFn('/unknownLearning','2-2')">未知学习</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'message'">
                <MenuItem name="3-1"><span @click="clickFn('/messageTable','3-1')">数据统计</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'hot'">
                <MenuItem name="4-1"><span @click="clickFn('/hotQuestion','4-1')">问题统计</span></MenuItem>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <Col span="5">
                    <Menu :active-name="index" width="auto" :open-names="1">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                <span  @click="changeState('setting','1')">智能机器人</span>
                            </template>
                            <MenuItem name="1-1"><span @click="clickFn('/manager', '1-1')">机器人配置</span></MenuItem>
                            <MenuItem name="1-2"><span @click="clickFn('/autoReply', '1-2')">自动回复</span></MenuItem>
                            <MenuItem name="1-3"><span @click="clickFn('/greetings','1-3')">寒暄库</span></MenuItem>
                            <MenuItem name="1-4"><span @click="clickFn('/professionalKnowledge','1-4')">业务知识库</span></MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                <span @click="changeState('manager', '2')">管理员操作</span>
                            </template>
                            <MenuItem name="2-1"><span @click="clickFn('/intelligentLearning','2-1')">智能学习</span></MenuItem>
                            <MenuItem name="2-2"><span @click="clickFn('/unknownLearning','2-1')">未知学习</span></MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                <span @click="changeState('message', '3')">消息报表</span>
                            </template>
                            <MenuItem name="3-1"><span @click="clickFn('/messageTable','3-1')">数据统计</span></MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-hotmessage"></Icon>
                                <span @click="changeState('hot', '4')">热点问题</span>
                            </template>
                            <MenuItem name="4-1"><span @click="clickFn('/hotQuestion','4-1')">问题统计</span></MenuItem>
                        </Submenu>
                    </Menu>
                </Col>
                <Col span="19">
                    <div class="layout-content-main">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="layout-copy">
            2017-2018 &copy; 409工作室
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                1: '1',
                index: '1-1',
                state: 'setting',
            }
        },
        methods: {
            clickFn (routerPath, switchIndex) {
                this.$router.push(routerPath);
                this.index = switchIndex;
            },
            changeState (state, indexes) {
                this.state = state
                this.indexes = indexes
            }
        }
    }
</script>