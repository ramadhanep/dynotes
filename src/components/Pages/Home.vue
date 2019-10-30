<template>
    <div>
        <h1>Welcome, Home!</h1>
        
        <button @click="doLogout">Logout</button>
        <button @click="doPageNotes">Notes</button>
    </div>
</template>

<script>
export default {
    methods: {
        doLogout(){
            this.$session.remove("logged")
            this.$router.replace({name: "Login"})
        },
        doPageNotes(){
            this.$router.replace({name: "NotesList"})
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