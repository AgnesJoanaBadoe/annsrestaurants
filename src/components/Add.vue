<template>
<Header />
    <h1>Hey User, Welcome to the Add Restaurant Page</h1>
    <form class="addrestau">
    <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name"/>
    <input type="text" name="Address" placeholder="Enter Restaurant Address" v-model="restaurant.address"/>
    <input type="text" name="Contact" placeholder="Enter Restaurant Contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="addRestaurant"> Add New Restaurant </button>

    </form>
</template>
<script>
// importing the header to the home page
import Header from './Header.vue';
import axios from 'axios';
export default {
    name:'Add',
    components:{
        Header
    },
    // Define properties for the add input
    data()
    {
        return {
            restaurant : {
                name:'',
                address:'',
                contact:''
            }
        }
    },
    // Adding methods for the input fields
    methods:{
        async addRestaurant()
        {
            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,

            }); 
            // return to home page after add
            if(result.status==201)
            {
                this.$router.push({name:'Home'}) ;
            }
            console.warn("result",result)
        }
    },

        mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>