<template>
  <div class="hello">

<md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
  <md-dialog-title>Create New Class</md-dialog-title>

  <md-dialog-content>
    <form>
      <md-input-container>
        <label>Class</label>
        <md-textarea v-model="selectedClass.name"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Short Hand</label>
        <md-textarea v-model="selectedClass.sh"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Class Level</label>
        <md-textarea v-model="selectedClass.clas"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Junior/Senior</label>
        <md-textarea v-model="selectedClass.level"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Section(A,B,...)</label>
        <md-textarea v-model="selectedClass.section"></md-textarea>
      </md-input-container>
    </form>
  </md-dialog-content>

  <md-dialog-actions>
    <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
    <md-button class="md-primary" @click.native="closeDialog('dialog2')">Create</md-button>
  </md-dialog-actions>
</md-dialog>
<md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog2')">
  <md-icon>add</md-icon>
</md-button>

    <md-card v-for="cls in classes">
      <md-card-expand>
   <md-card-actions>
    {{cls.name}}
     <span style="flex: 1"></span>
     <md-button class="md-icon-button" md-expand-trigger>
       <md-icon>keyboard_arrow_down</md-icon>
     </md-button>
   </md-card-actions>
   <md-card-content>
     <form>
       <md-input-container>
         <label>Class</label>
         <md-textarea v-model="cls.name"></md-textarea>
       </md-input-container>
       <md-input-container>
         <label>Short Hand</label>
         <md-textarea v-model="cls.sh"></md-textarea>
       </md-input-container>
       <md-input-container>
         <label>Class Level</label>
         <md-textarea v-model="cls.clas"></md-textarea>
       </md-input-container>
       <md-input-container>
         <label>Junior/Senior</label>
         <md-textarea v-model="cls.level"></md-textarea>
       </md-input-container>
       <md-input-container>
         <label>Section(A,B,...)</label>
         <md-textarea v-model="cls.section"></md-textarea>
       </md-input-container>
     </form>
        <md-bottom-bar>
          <md-bottom-bar-item md-icon="cancel">Cancel</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="near_me">Save</md-bottom-bar-item>
        </md-bottom-bar>
   </md-card-content>
 </md-card-expand>
    </md-card>

  </div>
</template>

<script>
import Socketio from 'socket.io-client';
var socket = Socketio();

export default {
  name: 'clas',
  data () {
    return {
      classes:[],
      selectedClass:{
        name:'',
        sh:'',
        clas:1,
        section:'',
        level:'junior'
      },
      selectedSubject:{
        name:'',
        sh:'',
      }
    }
  },
  created:function(){
    socket.emit("classes-init","inits")
    socket.on("classes",(clss)=>this.classes=clss);
    socket.on("new-class",(cls)=>{
      console.log("ON NEW CLASS"+cls);
      this.classes.push(cls)
    });
  },
methods:{
  openDialog(ref) {
     this.$refs[ref].open();
   },
   cancelReg(ref){
     this.$refs[ref].close();
   },
   closeDialog(ref) {
     this.$refs[ref].close();
     console.log(JSON.stringify(this.selectedClass));
     //this.classes.push(this.selectedClass)
     socket.emit("create-class",this.selectedClass);
   },
   onOpen() {
     console.log('Opened');
   },
   onClose(type) {
     console.log('Closed', type);
   }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
md-card-content form md-input-container{
  
}
</style>
