<!--验证码-->
<template>
    <div>
        <input type="text" v-bind:code ='code' v-model="code">
        <img src="imag">
    </div>
</template>

<script>
import ibs from '../assets/js/ibsrequest.js'
export default {
    name: "verifyCode",
    data(){
        return{
            code: this.code,
            imag: ""
        }
    },
    props:{
        // eslint-disable-next-line vue/no-dupe-keys
        code:{
            type: String,
            default: '2'
        }
    },
    mounted() {
        // 请求验证码
        var axios = ibs.CreateAxios();
        axios.get('/user?ID=123456')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }


}
</script>

<style scoped>

</style>