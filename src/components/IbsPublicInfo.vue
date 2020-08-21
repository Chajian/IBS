<!--法务信息，以及条款说明等-->
<template>
	<div class="content">
		<div>
			<a>
				{{publicinfo.serve_rule}}
			</a>
			<a>
				{{publicinfo.privacy_policy}}
			</a>
		</div>

	</div>
</template>

<script>
export default {
	data:function () {
		return{
			publicinfo:{
				serve_rule:'服务条款',
				privacy_policy: '隐私政策'
			}
		}
	}
}
</script>

<style>
.content{
	width: 100%;
	position: relative;
}
a{
	font-size: small;
	color: #999999;
	float: left;
	cursor: pointer;
	padding-left: 3%;

}
</style>
