const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
	{
    path: '/manager',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index2.vue'], resolve),
    children: [
				{
					path: '/',
					component: (resolve) => require(['./views/robotConfigure.vue'], resolve)
				},
				{
					path: '/autoReply',
					component: (resolve) => require(['./views/autoReply.vue'], resolve)
				},
				{
					path: '/greetings',
					component: (resolve) => require(['./views/greetings.vue'], resolve)
				},
				{
					path: '/professionalKnowledge',
					component: (resolve) => require(['./views/professionalKnowledge.vue'], resolve)
				},
				{
					path: '/intelligentLearning',
					component: (resolve) => require(['./views/intelligentLearning.vue'], resolve)
				},
                {
                    path: '/unknownLearning',
                    component: (resolve) => require(['./views/unknownLearning.vue'], resolve)
                },
				{
					path: '/messageTable',
					component: (resolve) => require(['./views/messageTable.vue'], resolve)
				},
				{
					path: '/hotQuestion',
					component: (resolve) => require(['./views/hotQuestion.vue'], resolve)
				}
    ]
    },
    {
        path: '/login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/userIndex',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/userIndex.vue'], resolve)
    },
    {
        path: '/userChatBues',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/userChatBues.vue'], resolve)
    },
    {
        path: '/userChatGreet',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/userChatGreet.vue'], resolve)
    },
    {
        path: '/RandomChart',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/RandomChart.vue'], resolve)
    }
];
export default routers;