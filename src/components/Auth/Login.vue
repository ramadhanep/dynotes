<template>
    <div>
        <div v-if="loader" class="loader-wrapper">
            <div class="loader"></div>
        </div>
        <div class="alert-wrapper">
            <div v-if="alertFail" class="alert danger">Login gagal! email password salah!</div>
            <div v-if="alertSuccess" class="alert">Mengalihkan halaman...</div>
        </div>
        <div class="bg-color">
            <div class="container">
                <div class="illustration">
                    <img src="@/assets/images/splashscreen.svg" alt="">
                </div>
                <div class="top-distance"></div>
                <h1 class="text-center">Login</h1>
                <div class="top-distance sm"></div>
                <form @submit="doLogin">
                    <input type="email" placeholder="Email" v-model="user.email">
                    <div class="input-distance"></div>
                    <input type="password" placeholder="Password" v-model="user.password">
                    <div class="top-distance"></div>
                    <button class="btn-submit" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loader: false,
            alertFail: false,
            alertSuccess: false,
            user: {}
        }
    },
    methods: {
        doLogin(){
            this.loader = true
            if(this.user.email == "romadhanedy@gmail.com"){
                this.loader = false
                this.alertSuccess = true
                setTimeout(() => {
                    this.$session.set("logged", 1)
                    this.$router.replace({name: "Home"})
                }, 1000)
            } else {
                this.loader = false;
                this.alertFail = true
                setTimeout(() => {
                    this.alertFail = false
                }, 3000)
            }
        }
    },
    mounted(){
        var logged = this.$session.get("logged")
        if(logged == 1){
            this.$router.replace({name: "Home"})
        }
    }
}
</script>

<style>
    .illustration{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .illustration img{
        width: 280px;
    }
</style>