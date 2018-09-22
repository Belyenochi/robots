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
	}
	.bc-userindex {
		position: absolute;
		top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
		height: 350px;
		border-radius:10px;
		background: #F2F2F2;
	}

	.bc-userindex-choose {
		margin-top: 70px;
		width: 190px;
		height: 100px;
		display: inline-block;
	}

	.bc-userindex-choose button {
		margin-left: 15px;
		margin-right: 15px;
		width: 180px;
		height: 50px;
	}
	.bc-userindex-header {
		text-align: center;
		margin-top: 50px;
		font-size: 36px;
	}
</style>
<template>
	<div class="bc">
		<div class="bc-userindex">
			<div class="bc-userindex-header">Delta机器人</div>
			<div class="bc-userindex-choose">
				<template>
			    <Button type="success" @click="clickFn('/userChatGreet')">日常寒暄沟通</Button>
				</template>
			</div>
			<div class="bc-userindex-choose">
				<template class="bc-userindex-choose">
					<Button type="error" @click="clickFn('/userChatBues')">业务知识问答</Button>
				</template>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
        methods: {
        	clickFn (routerPath) {
                this.$router.push(routerPath);
            },
        }
    }
</script>