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
	.bc-login {
		position: absolute;
		top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
		height: 350px;
		border-radius:10px;
		background: #F2F2F2;
	}

	.bc-login-usr {
		font-size: 20px;
		margin-left: 22px;
		margin-top: 36px;
		margin-bottom: 15px;
		margin-right: 22px;
	}

	.bc-login-usr > p {
		margin-bottom: 10px;
	}

	.bc-login-pwd {
		font-size: 20px;
		margin-left: 22px;
		margin-top: 16px;
		margin-bottom: 15px;
		margin-right: 22px;
	}

	.bc-login-pwd > p {
		margin-bottom: 10px;
	}

	.bc-login > button {
		margin-top: 30px;
		height: 40px;
		margin-left: 22px;
		margin-right: 22px;
		width: 89%;
		background-color: #00CCFF;
	}
</style>
<template>
	<div class="bc">
		<div class="bc-login">
			<div class="bc-login-usr">
				<p>用户名</p>
				<template>
			    <Input size="large" placeholder="username"></Input>
				</template>
			</div>
			<div class="bc-login-pwd">
				<p>密码</p>
				<template>
			    <Input size="large" placeholder="password" type="password"></Input>
				</template>
			</div>
			<template>
			    <Button type="success" long @click="login">SUBMIT</Button>
			</template>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
        methods: {
        	login () {
        		this.$router.push('/manager');
        	}
        }
    }
</script>