<template>
<div  style="margin-top:30px">
  <v-app>
    <v-content>
      <div class="hello"><HelloWorld @dataSendToAppV="DatREceiveAppView"> </HelloWorld></div>
      <div class="imagD"> <ImagDetails :OnselectedItem="selectedItem"></ImagDetails></div>
    </v-content>
  </v-app>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ImagDetails from './components/ImagDetails'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ImagDetails
  },
  data:function() {
    return{
      selectedItem:''
      };
   } 
   ,
      methods:{
    DatREceiveAppView(value) {
      console.log(value);
      this.selectedItem=value;
       console.log( this.selectedItem)
    }
}
}
</script>
<style scoped>
.imagD{
  width:50%;
  float: left;

}
.hello{
width:50%;
  float: left
}

</style>

