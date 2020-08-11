<template>
<div class="loginmain">
    <div>
<!--        <div class="nav">-->
<!--            <router-link to="/navigat"></router-link>-->
<!--             <router-link to="/about">About</router-link>-->
            <nava id="login_nava"></nava>
<!--        </div>-->
<!--        <router-view/>-->
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

        }
    },
    mounted() {
        // nava.naviwid='100%';
        // this.$router.push('/navigat')
        // nava.jjw = '100%'
        // nava.methods.changeLiWidth('100%')
        // setInterval(function () {
        // console.log(nava.testnummbe)
        nava.methods.changeLiWidth()
        // },1000);
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
