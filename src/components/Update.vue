<template>
<Header />
    <h1>Hey User, Welcome to the Update Page</h1>
    <form class="addrestau">
    <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name"/>
    <input type="text" name="Address" placeholder="Enter Restaurant Address" v-model="restaurant.address"/>
    <input type="text" name="Contact" placeholder="Enter Restaurant Contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="updateRestaurant"> Update Restaurant </button>

    </form>
</template>
<script>
// importing the header to the home page
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'Update',
    components:{
        Header
    },
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
    methods:{
        async updateRestaurant() //calling api in this functions (async)
        {
            console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,

            }); 
            // return to home page after update
            if(result.status==200)
            {
                this.$router.push({name:'Home'}) ;
            }
        }
    },

    async mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id) // fetching various restaurant details 
        // console.warn(this.$route.params.id)  //getting the IDs of the restaurants
        console.warn(result.data)
        this.restaurant=result.data  //pre-filled
    }
}
</script>