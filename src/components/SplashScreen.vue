<template>
    <div>
        <div class="bg-color">
            <div class="container">
                <div class="brand">
                    <img src="@/assets/images/splashscreen.svg" alt="">
                    <h1>Dynotes</h1>
                    <p>v1.0</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        setTimeout(() => {
            this.$router.replace({name: "Home"})
        }, 3000)
    }
}
</script>
<style>
    .brand{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .brand img{
        width: 250px;
    }
    .brand h1{
        margin-top: 20px;
    }
</style>