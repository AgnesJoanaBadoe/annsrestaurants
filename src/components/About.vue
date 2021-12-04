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
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },

    // checking sign up and home page storage
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'About'})
        }
    }
}
</script>
    

<style>
/* This styles the logo */
    /* .logo{
        width: 100px;
    } */

    /* This styles the input fields */
    .signup input {
        width: 320px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #eb89b5;
    }
    /* this styles the button */
    .signup button {
        width: 343px;
        height: 40px;
        border: 1px solid #eb89b5;
        background: #eb89b5;
        font-size: 20px;
        cursor: pointer;
        color: white;
    }
</style>