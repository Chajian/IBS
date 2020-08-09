<template>
<div id="nag">
<li>
	<ul class="option" v-for="item in list" :key="item.id">
		{{item.context}}
	</ul>
	
	
</li>
</div>
</template>

<script>
export default{
	el: '#nag',
	data:function(){
		return{
			nagivations:{
				
			},
			list: [
				{id: 1,context: "登陆"},
				{id: 2,context: "注册"}
			]
		}
	},
	methods: {
		disappear:function(){
			var uls = document.getElementsByClassName("checkOption"); 
			for(var i = 0 ; i <= uls.length ; i++){
				var element = uls[i];
				element.style = checkoption;
				
			}
		}
	}
}	

</script>

<style>
	option{
		width: 10%;
		height: 7%;
		background-color: #f0f4ff;
		text-align: center;
	},
	checkoption{
		width: 10%;
		height: 7%;
		background-color: #FFFFFF;
		text-align: center;
	}
	
	
</style>
