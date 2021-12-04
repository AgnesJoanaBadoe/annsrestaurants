<template>
<Header /> 
    <h1>Hey {{name}}, Welcome to the Home Page</h1> 

    <table border="1px">
    <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>CONTACT</td>
    <td>ADDRESS</td>
    <td>ACTIONS</td>

    </tr>
    <tr v-for="item in restaurant" :key="item.id">
    <td> {{item.id}}  </td>
    <td> {{item.name}}  </td>
    <td> {{item.contact}}  </td>
    <td> {{item.address}}  </td>
    <td>
    <router-link :to="'/update/'+item.id" class="update">Update</router-link> 
    <button  v-on:click="deleteRestaurant(item.id)" class="delete"> Delete</button>
    </td>

    </tr>
    </table>
</template>
<script>
// importing the header to the home page
import Header from './Header.vue'
import axios from 'axios';
export default {
    name:'Home',
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
    components:{
        Header
    },

    // making a delete function (method)
    methods:{
       async deleteRestaurant(id)
        {
            let result =await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status==200)
            {
            this.loadData()
            }

        },
        async loadData() //call api, avoid duplicate
        {
            let user= localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        let result =await axios.get("http://localhost:3000/restaurant");
        console.warn(result)
        this.restaurant=result.data;
        }
    },

    async mounted()  
    {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
.delete {
    text-decoration: none;
    background: transparent;
    border: 2px solid #eb89b5;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    border-radius: 40%;
}

  .update :hover {
      text-decoration: none;
      color: rgb(43, 40, 40);
      cursor: pointer;
      background-color: #e6a9c4;
  }
  table {
      margin-left: auto;
      margin-right: auto;
  }
</style>
kkkkk