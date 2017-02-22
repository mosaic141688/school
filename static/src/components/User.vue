<template>
  <div class="hello">
    <div class="" v-on:click="emit('hello',{})">
      Hello World
    </div>
    <ul>
    </ul>
  </div>
</template>

<script>
var Vue = require('vue')
import Socketio from 'socket.io-client';
var socket = Socketio();
//Vue.use(Socketio, window.location);
export default {
  name: 'user',
  data () {
    return {
      users:[],
      selectedUser:{
        name:'',
        sname:'',
        surname:'',
        _id:'',
        email:'',
        password:''
      }
    }
  },
  created:function(){
    socket.on("pol",data=>console.log(data))
  },
  methods:{
    emit:function(mess,obj){
      //console.log(mess+JSON.stringify(obj));
      //this.$socket.emit(mess,obj)
      socket.emit("mess","Hello word");
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
