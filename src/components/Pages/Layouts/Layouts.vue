<template>
    <div>
        <router-view class="main-view"></router-view>
        <div class="navbar-bottom">
            <div class="items">
                <button :class="activeClass('Home')" @click="goTo('Home')">
                <img src="@/assets/icons/home.svg">
                </button>
                <button :class="activeClass('NotesList')" @click="goTo('NotesList')">
                    <img src="@/assets/icons/dashboard.svg">
                </button>
                <button :class="activeClass('Account')" @click="goTo('Account')">
                    <img src="@/assets/icons/person.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        activeClass(...names){
            for (let name of names) {
                if (name == this.$route.name){
                    return 'active';
                }
            }
        },
        goTo(_route){
            this.$router.push({name: _route})
        }
    },
    mounted(){
        var logged = this.$session.get("logged")
        if(logged != 1){
            this.$router.replace({name: "Login"})
        }
    }
}
</script>

<style>
    .bg-color-theme{
        background-color: #0091ea;
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    h1.theme{
        color: #fff;
    }
    .main-view{
        margin-bottom: 95px;
        background-color: #0091ea;
    }
    .navbar-bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ddd;
        background-color: #fff;
        z-index: 99999999;
    }
    .items{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
    .items button{
        padding: 20px 30px;
        outline: none;
        border: none;
        background-color: transparent;
    }
    .items button.active{
        background-color: #eee;
        border-top-right-radius: 100%;
        border-top-left-radius: 100%;
    }
    input.theme{
        color: #2c3e50;
        border: none;
        background-color: #fff;
        border-radius: 30px;
        padding: 0 20px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;   
        height: 45px;
    }
</style>