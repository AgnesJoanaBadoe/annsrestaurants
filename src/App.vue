<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',

}
</script>
// All the app styling goes here
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
/* This styles the logo */
  
    /*This styles the body*/
    body{
      padding: 0;
      margin: 0;
    }
    /* This styles the input fields */
    .signup input, .login input  {
        width: 320px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #eb89b5;
    }
    /*This styles the input field of the add restaurant page*/
    .addrestau input {
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
    .signup button, .login button {
        width: 343px;
        height: 40px;
        border: 1px solid #eb89b5;
        background: #eb89b5;
        font-size: 20px;
        cursor: pointer;
        color: white;
    }
        /* this styles the button of the add restaurant page*/
    .addrestau button {
        width: 343px;
        height: 40px;
        border: 1px solid #eb89b5;
        background: #eb89b5;
        font-size: 20px;
        cursor: pointer;
        color: white;
    }
</style>
