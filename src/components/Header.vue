<template>
    <div class="nav">
    <router-link to="/">Home </router-link>
    <router-link to="/add">Add Restaurant </router-link>
    <a v-on:click="logout" href="#">Logout </a>
    </div>
</template>
<script>
export default {
    name:'Header',
    methods: {   //defining the logout function
        logout()
        {
            localStorage.clear(); //this clears the local storage
            this.$router.push({name:'Login'})  //this takes you to the login page
        }
    }
}
</script>

<style>
.nav{
    background-color: #eb89b5;
    overflow: hidden;
}
.nav a {
    float: left;
    color: rgb(32, 27, 27);
    padding: 14px 16px;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>
