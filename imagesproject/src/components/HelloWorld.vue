<template>

 <div>
   <ul class="hidden-sm-and-down">
     <li v-for="user in getUsers" :key="user.id" >
       <img width="100%" :src="user.imageUrl"  alt="pic does not exist ">
         <p> {{user.user}} {{user.userName}} </p>
         <button @click="sendDatZToImagDetail(user)">Send Data</button>
     </li>
   </ul>
  </div>

<!-- <v-container>
  <v-layout row wrap>
  <v-flex v-for="i in 6" :key="`2${i}`"     md6  xs2 sm3>
      <v-card v-for="user in getUsers" :key="user.id"  class="px-0">
     <v-img width="100%" :src="user.imageUrl"  alt="pic does not exist "></v-img>
         <v-card-text> {{user.user}} {{user.userName}} </v-card-text>
 
  </v-card>
 </v-flex>
 </v-layout >
  </v-container> -->
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  


computed: mapGetters(['getUsers']),
    
     methods:{...mapActions(['fetchDatas']),
     
     sendDatZToImagDetail(user){ 
         
         this.$store.dispatch('sendDatZToImagDetail',user)
         console.log(user)
  //  this.$emit('dataSendToAppV',event)
        
      }},

     
      created(){
     this.fetchDatas();
 },
    
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
   display: flex;
    flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  width: 15%;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
