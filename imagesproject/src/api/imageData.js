// import axios from 'axios';
export default {

//     fetchImages(token){
//         return axios.get(`${RootUrl}/3/account/me/images `,{
//         headers:{
//             Authorization:`Bearer ${token }`
//         }
    
//     });
// },
usersApi:[
    {         
        id:1,         
        userName: "sahil",
        imageUrl:require('../assets/flower.jpg'),
   },
   {         
    id:4,         
    userName: "Navinice",
    imageUrl:require('../assets/flower1.jpg'),
},
{         
    id:5,         
    userName: "sahil@",
    imageUrl:require('../assets/flower3.jpg'),
},
{         
    id:6,         
    userName: "tinda",
    imageUrl:require('../assets/flower.jpg'),
},
{         
    id:7,         
    userName: "shinda2",
    imageUrl:require('../assets/flower3.jpg'),
},
{         
    id:8,         
    userName: "sahil",
    imageUrl:require('../assets/flower.jpg'),
},
  {         
        id:2,         
        userName: "sahil",
        imageUrl:require('../assets/flower1.jpg'),
   },
{
    id:3,         
    userName: "shinda",
    imageUrl: require('../assets/flower3.jpg'),
},

{         
    id:9,         
    userName: "navi@",
    imageUrl:require('../assets/flower.jpg'),
},
{         
    user:10,         
    userName: "navi",
    imageUrl:require('../assets/flower3.jpg'),
},
{         
    user:11,         
    userName: "navi@",
    imageUrl:require('../assets/flower.jpg'),
},
{         
    id:12,         
    userName: "navi",
    imageUrl:require('../assets/flower3.jpg'),
}],

fetchData(){
    alert("helo i am Api")
    //  return axios.get(this.usersApi).then(response=>{response.data});
    return this.usersApi;

}
}