<template>
  <div >
   <div class="phone-viewport">
     <md-toolbar>
       <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
         <md-icon>menu</md-icon>
       </md-button>

       <h2 class="md-title">My App</h2>
     </md-toolbar>
     <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
       <md-toolbar class="md-large">
         <div class="md-toolbar-container">
           <h3 class="md-title">Sidenav content</h3>
         </div>
       </md-toolbar>
       <div class="phone-viewport">
         <md-list class="md-dense">
           <md-list-item>
             <router-link to="/students">
             <md-avatar> <md-icon class="fa fa-signal"></md-avatar> </md-icon><span>Students</span>
           </router-link>
           </md-list-item>

           <md-list-item>
             <router-link to="/users">
             <md-icon></md-icon> <span>Users</span>
           </router-link>
           </md-list-item>

           <md-list-item>
             <router-link to="/classes">
             <md-icon>delete</md-icon> <span>Classes</span>
           </router-link>
           </md-list-item>

           <md-list-item>
             <router-link to="/teachers">
             <md-icon>delete</md-icon> <span>Teachers</span>
           </router-link>
           </md-list-item>

           <md-list-item>
             <md-icon>error</md-icon> <span>Spam</span>
             <md-divider class="md-inset"></md-divider>
           </md-list-item>


         </md-list>
       </div>
     </md-sidenav>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
var Vue = require('vue')
var VueMaterial = require('vue-material')

Vue.use(VueMaterial)

export default {
  name: 'app',
  methods: {
   toggleLeftSidenav() {
     this.$refs.leftSidenav.toggle();
   },
   toggleRightSidenav() {
     this.$refs.rightSidenav.toggle();
   },
   closeRightSidenav() {
     this.$refs.rightSidenav.close();
   },
   open(ref) {
     console.log('Opened: ' + ref);
   },
   close(ref) {
     console.log('Closed: ' + ref);
   }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
