<!--导航栏件组-->
<template>
<div id="nag">
<li v-bind:style="ngv_style" v-bind:ngv_style="ngv_style" v-bind:target="target" v-bind:ngv_list="ngv_list" v-bind:ngv_click="ngv_click">
	<ul v-on:click="appear(item.id)" v-for="item in ngv_list" :key="item.id" v-bind:class="item.classstyle" :id="item.id" >
			{{item.context}}
	</ul>
				
</li>
</div>
</template>

<script>
export default{
	props: {
		//导航栏大小属性
		ngv_style: {
			type: Object,
			default: function(){
				return {
					width: '60%',
					height: 'auto',
					'list-style': 'none'
				}
			}
		},
		//导航栏自定义导航链接
		ngv_list: {
			type: Array,
			default: function(){
				return [
					{id: 0,context: "登陆",classstyle: {option:true,checkoption:false}},
					{id: 1,context: "注册",classstyle: {option:true,checkoption:false}}
				]
			}
		},
		ngv_click: {
			tyep: Object,
			default: function () {
				return [
				]
			}
		},
		target:{
			type: Object,
			default: function () {
				return{}
			}
		}
		// testnummber:{
		// 	type: Number,
		// 	default: 2
		// }
	},
	data:function(){
		return{
			nav_style: this.nav_style,
			nav_list: this.nav_list,
		}
	},
	computed:{
		ngvstyle:function () {
			return this.ngv_style;
		}
	},
	watch:{
		testnummber:function (val,old) {
			console.log('new value is ',val,': old value is ',old);
		}
	},
	methods: {
		disappear:function(){
			var uls = document.getElementsByTagName("ul");
			for(var i = 0 ; i < uls.length ; i++){
				this.ngv_list[i].classstyle.option = true;
				this.ngv_list[i].classstyle.checkoption = false;
			}
		},
		appear:function (el) {

			this.disappear()
			for(var i = 0 ; i < this.ngv_list.length ; i++){
				var item = this.ngv_list[i];
				if(item.id == el){
					this.ngv_click.[item.id](this.target);
					item.classstyle.option = false;
					item.classstyle.checkoption = true;
				}
			}
		}
	}
}	

</script>

<style scoped>
.option{
	background-color: #f0f4ff;
	text-align: center;
	/*float: left;*/
	display: inline-block;
}
.checkoption{
	background-color: #FFFFFF;
	/*float: left;*/
	display: inline-block;
}
ul{
	width: 20%;
	height: 100%;
	margin-left: 2%;
	cursor: pointer;
	font-family: PingFangSC-Medium;
	font-size: 18px;
	text-align: center;
	border-radius: 30px;
	align-items: center;
}
a{
}
</style>
