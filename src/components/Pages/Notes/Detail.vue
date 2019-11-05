<template>
    <div>
        <h1>Detail Notes</h1>

        <button @click="doBack">Kembali</button>
    </div>
</template>

<script>
export default {
    methods: {
        doBack(){
            this.$router.go(-1)
        }
    }
}
</script>