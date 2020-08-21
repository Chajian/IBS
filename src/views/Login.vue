<template>
<<<<<<< HEAD
<div class="loginmain">
    <div v-on:click="test">
<!--        <div class="nav">-->
<!--            <router-link to="/navigat"></router-link>-->
<!--             <router-link to="/about">About</router-link>-->
            <nava :jjw="jjw" id="login_nava" ></nava>
<!--        </div>-->
        <router-view/>
=======
<div  class="loginmain">

    <div class="nav">
		<nava id="login_nava" :ngv_style="ngv_style" :target="this" :ngv_click="ngv_click"></nava>
    </div>


	<div class="login_content" v-if="showaccount" v-on:click="regclick()">
		<div id="account">
			<input id="login_account" type="text" placeholder="账号"/>
			<input id="login_password" type="text" placeholder="密码"/>
		</div>
		
		<input id="login_sure" type="button" value="登录" />
	</div>
	<div class="reg_content" v-if="showreg" v-on:click="loginclick()">
		<div id="register">
			<input id="register_account" type="text" placeholder="账号"/>
			<input id="register_password" type="text" placeholder="密码"/>
			<input id="register_aginpassword" type="text" placeholder="确认密码"/>
		</div>
		<input id="register_sure" type="button" value="注册" />
	</div>
</div>
</template>

<script>
import nava from '../components/navigation'
export default{
    components:{
        nava
    },
	props:{
		show_reg:{
			type: Boolean,
			default: null
		},
		show_account:{
			type: Boolean,
			default: null
		}
	},

    data(){
        return{
<<<<<<< HEAD
            testnummber: 2,
            jjw:{
                width: '100%',
                height: 'auto',
                'list-style': 'none'
            }
        }
    },
    mounted() {
        // nava.naviwid='100%';
        // this.$router.push('/navigat')
        // nava.jjw = '100%'
        // nava.methods.changeLiWidth('100%')
        // setInterval(function () {
        // console.log(nava.testnummbe)
        nava.methods.changeLiWidth(nava)
        // console.log(this.$data.testnummber)
        // },1000);
    },
    methods:{
        test:function () {
            console.log("test login's nava",document.getElementById('login_nava').testnummber)
        }
    }
=======
			ngv_style: {
				width: '50%',
				height: '60px',
				'list-style': 'none'
			},
			ngv_click: [
					// target用于回调
				function (target) {
					target.showaccount = true;
					target.showreg = false;
				},
				function (target) {
					target.showaccount = false;
					target.showreg = true;
				}
			]
        }
    },
	computed:{
		showaccount:{
			get:function(){
				return this.show_account;
			},
			set:function (v) {
				this.show_account = v
			}
		},
		showreg:{
			get:function () {
				return this.show_reg;
			},
			set:function (v) {
				this.show_reg = v
			}
		}
	},
	methods:{
		loginclick:function () {
			this.showaccount = true;
			this.showreg = false;
			console.log(this.showreg,this.showaccount)
		},
		regclick:function () {
			this.showaccount = false;
			this.showreg = true;
			console.log(this.showreg,this.showaccount)
		}
	},
	mounted() {
	this.showreg = true;
	this.showaccount = false;
	}
>>>>>>> c41c49ab90c0d60656d1792e6e4cef7b0d487cee
}
</script>

<style>
.loginmain{
    width: 100%;
    height: 100%;
	align-items: center;
}
html{
	height: 100%;
}
body{
	width: 100%;
	height: 100%;
	background: #fff;
	background-color: #eff8ff;
}
.nav{
	padding-top: 10%;
}
.login_content,.reg_content{
	width: 20%;
	height: auto;
	margin-left:auto;
	margin-right:auto;
	margin-top: 2%;
}
input{
	width: 100%;
	height: 46px;
	float: left;
	margin-top: 1%;
	font-size: 16px;
	box-sizing: border-box;
	border: 1px solid #cbcbcb;
}
/*.nav{*/
/*    align-content: center;*/
/*    width: 100%;*/
/*    height: auto;*/
/*}*/
#app{
	height: 100%;
}
#login_sure,#register_sure{
	margin-top: 5%;
	background-color: #3b78dd;
	color: #FFFFFF;
}
</style>
