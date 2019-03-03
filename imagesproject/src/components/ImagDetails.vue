<template>
    <div v-if="getUserDetails">
        <ul>
            <li>
 <img width="20%" :src="getUserDetails.imageUrl"   alt="pic does not exist ">
{{getUserDetails.userName}}</li>
        </ul>
    </div>
</template>

<script>
 import {mapGetters, mapActions} from 'vuex';

export default {
    name:'ImagDetails',
 props:['OnselectedItem'],  

 computed: mapGetters(['getUserDetails']),
 methods:mapActions(['sendDatZToImagDetail']),

}
</script>

<style scoped>

</style>
