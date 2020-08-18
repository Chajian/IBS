<!--导航栏件组-->
<template>
<div id="nag">
<li v-bind:style="jjw" v-bind:jjw="jjw">
	<ul v-on:click="appear(item.id)" v-for="item in list" :key="item.id" v-bind:class="item.classstyle" :id="item.id" >
			{{item.context}}
	</ul>
</li>
</div>
</template>

<script>
export default{
	props: {
		jjw: {
			type: Object,
			default: function(){
				return {
					width: '60%',
					height: 'auto',
					'list-style': 'none'
				}
			}
		}
		// testnummber:{
		// 	type: Number,
		// 	default: 2
		// }
	},
	data:function(){
		return{
	// 		// 自定义导航栏大小
	// 		nagivationss: {
	//
	// 		},
			testnummber: 2,
			list: [
				{id: 0,context: "登陆",classstyle: {option:true,checkoption:false}},
				{id: 1,context: "注册",classstyle: {option:true,checkoption:false}}
			]
		}
	},
	computed:{
		testnummbe:{
			get:function () {
				return this.$data.testnummber*10;
			},
			set:function (va) {
				this.$data.testnummber = va;
			}
		},
		jj:function () {
			return this.jjw;
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
				this.list[i].classstyle.option = true;
				this.list[i].classstyle.checkoption = false;
			}
		},
		appear:function (el) {
			this.disappear()
			for(var i = 0 ; i < this.list.length ; i++){
				var item = this.list[i];
				if(item.id == el){
					item.classstyle.option = false;
					item.classstyle.checkoption = true;
				}
			}
			console.log(this.testnummbe)
			this.testnummbe+=2
		},
		changeLiWidth:function (v) {
			// var myjj = {
			// 	width: 'v00%',
			// 	height: 'auto',
			// 	'list-style': 'none'
			// };
			// this.jjw = myjj;
			// console.log('今晚肯定')
			v.testnummbe = 132;
			console.log("执行成:"+v.testnummbe);

			// return this.testnummbe
		}
	}
}	

</script>

<style scoped>
.option{
	width: 10%;
	height: 7%;
	background-color: #f0f4ff;
	text-align: center;
	/*float: left;*/
	display: inline-block;
}
.checkoption{
	width: 10%;
	height: 7%;
	background-color: #FFFFFF;
	/*float: left;*/
	display: inline-block;
}
</style>
