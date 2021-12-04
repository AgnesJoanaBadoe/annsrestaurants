<template>
<!-- The logo goes here -->
<img class="logo" src="../assets/annsrestaurantslogo.png"/>
<h1>Login</h1>
<!-- This is the sign up page -->
<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="login"><b>Login</b></button>
    <p>
    <router-link to="/sign-up" >Sign Up</router-link>
    </p>
</div>
</template>

<script>
// importing axios package
import axios from 'axios'
export default {
    name: 'Login', 
    // Defining login email and password
    data()
    {
        return {
            email: '',
            password: ''
        }
    },
    // defining the login function
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if(result.status==200 &&result.data.length>0) //fetching the user input form the local storage
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0])) //store data in the local storage
                this.$router.push({name:'Home'})
            }
            console.warn(result)
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info'); //the user after login should not be able to visit the login page
        if(user)
        {
            // this.$router.push({name:'login'})
            this.$router.push({name:'Home'})
        }
    }
};
</script>