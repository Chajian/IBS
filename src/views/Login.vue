<template>
<div class="loginmain">
    <div v-on:click="test">
<!--        <div class="nav">-->
<!--            <router-link to="/navigat"></router-link>-->
<!--             <router-link to="/about">About</router-link>-->
            <nava :jjw="jjw" id="login_nava" ></nava>
<!--        </div>-->
        <router-view/>
    </div>
</div>
</template>

<script>
import nava from '../components/navigation'
export default{
    components:{
        nava
    },
    data(){
        return{
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
}
</script>

<style>
.loginmain{
    width: 100%;
    height: auto;
}
/*.nav{*/
/*    align-content: center;*/
/*    width: 100%;*/
/*    height: auto;*/
/*}*/
div{
    width: 100%;
}
</style>
