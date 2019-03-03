import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/imageData';

//  import axios from 'axios';

Vue.use(Vuex);
export const store= new Vuex.Store({
    state:{
     users:[],
     usersDetails:{},
 },
 actions:{
     fetchDatas({commit}){
      let data=api.fetchData();
      alert("action"+data);
        commit('setUsers',data)
    },
    addUsers({commit}){
        commit('addUsers',
  {
    user:3,         
    userName: "sahil",
    image: "flower3.jpg",
})},

sendDatZToImagDetail({commit},data){
    
//    return (this.usersApi[id]).then((response)=>{
    alert("ÿo")
       commit('setUserDetails',data)
       
}
},
mutations:{
     
    addUsers(state,payload){
   state.users.push(payload)
   },
   setUsers:(state,users)=>{
       state.users=users;
   },
   setUserDetails:(state,usersDetails)=>{
    
    state.usersDetails=usersDetails;
    alert("mutation"+ usersDetails)
   }

},
 getters:{
     getUsers(state){
    //    alert("halala");
        return state.users;

     },
     getUserDetails(state){
        alert("userDetails"+ state.usersDetails)
return state.usersDetails

     },
     
     
 }
})
   export default store;
