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
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
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
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant" v-show="state == 'setting'">
                <MenuItem name="1"><span @click="clickFn('/manager')">机器人配置</span></MenuItem>
                <MenuItem name="2"><span @click="clickFn('/autoReply')">自动回复</span></MenuItem>
                <MenuItem name="3"><span @click="clickFn('/greetings')">寒暄库</span></MenuItem>
                <MenuItem name="4"><span @click="clickFn('/professionalKnowledge')">业务知识库</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'manager'">
                <MenuItem name="1"><span @click="clickFn('/intelligentLearning')">智能学习</span></MenuItem>
                <MenuItem name="2"><span @click="clickFn('/unknownLearningLearning')">未知学习</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'message'">
                <MenuItem name="1"><span @click="clickFn('/messageTable')">数据统计</span></MenuItem>
            </div>
            <div class="layout-assistant" v-show="state == 'hot'">
                <MenuItem name="1"><span @click="clickFn('/hotQuestion')">问题统计</span></MenuItem>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <Col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                <span  @click="changeState('setting')">智能机器人</span>
                            </template>
                            <MenuItem name="1-1"><span @click="clickFn('/manager')">机器人配置</span></MenuItem>
                            <MenuItem name="1-2"><span @click="clickFn('/autoReply')">自动回复</span></MenuItem>
                            <MenuItem name="1-3"><span @click="clickFn('/greetings')">寒暄库</span></MenuItem>
                            <MenuItem name="1-4"><span @click="clickFn('/professionalKnowledge')">业务知识库</span></MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                <span @click="changeState('manager')">管理员操作</span>
                            </template>
                            <MenuItem name="2-1"><span @click="clickFn('/intelligentLearning')">智能学习</span></MenuItem>
                            <MenuItem name="2-2"><span @click="clickFn('/unknownLearning')">未知学习</span></MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                <span @click="changeState('message')">消息报表</span>
                            </template>
                            <MenuItem name="3-1"><span @click="clickFn('/messageTable')">数据统计</span></MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-hotmessage"></Icon>
                                <span @click="changeState('hot')">热点问题</span>
                            </template>
                            <MenuItem name="4-1"><span @click="clickFn('/hotQuestion')">问题统计</span></MenuItem>
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
                state: 'setting',
            }
        },
        methods: {
            clickFn (routerPath) {
                this.$router.push(routerPath);
            },
            changeState (state) {
                this.state = state
            }
        }
    }
</script>