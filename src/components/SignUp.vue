<template>
<!-- The logo goes here -->
<img class="logo" src="../assets/annsrestaurantslogo.png"/>
<h1>Sign Up</h1>
<!-- This is the sign up page -->
<div class="signup">
    <input type="text" v-model="name" placeholder="Enter Full Name"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="signUp"><b>Sign Up</b></button>
    <p>
    <router-link to="/login" >Login</router-link>
    </p>
</div>
</template>

<script>
// calling api
import axios from 'axios'
export default {
    name : 'SignUp',
    // getting the values from the user field with a data function
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    // putting a fuction for the button
    methods:{
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name
            });

            console.warn(result);
            if(result.status==201) //storing the details in the local storage
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },

    // checking sign up and home page storage, the user after sign up should not be able to visit the sign up page
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            // this.$router.push({name:'sign-up'})
            this.$router.push({name:'Home'})
        }
    }
}
</script>
    

<style>

</style>