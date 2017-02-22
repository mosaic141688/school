<template>
  <div class="">
    <md-tabs md-fixed>
  <md-tab id="movies" md-label="Movies">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="music" md-label="Music">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="books" md-label="Books">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab id="pictures" md-label="Pictures">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>
</md-tabs>
    <md-layout md-flex-medium="33">
    <md-card v-for="student in students">
      <md-card-expand>
   <md-card-actions>
    {{student.name}}
     <span style="flex: 1"></span>
     <md-button class="md-icon-button" md-expand-trigger>
       <md-icon>keyboard_arrow_down</md-icon>
     </md-button>
   </md-card-actions>
   <md-card-content>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        <md-bottom-bar>
          <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
        </md-bottom-bar>
   </md-card-content>
 </md-card-expand>
    </md-card>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      students:[{
        name:"Sihle",
        surname:"Mbhamali",
        sname:"Mosaic",
        id:"123456",
        class:"F12"
      },
      {
        name:"Sihle",
        surname:"Mbhamali",
        sname:"Mosaic",
        id:"123456",
        class:"F12"
      },
      {
        name:"Sihle",
        surname:"Mbhamali",
        sname:"Mosaic",
        id:"123456",
        class:"F12"
      }]
    }
  }
}
</script>

<style scoped>
  md-card{
    padding:0;
  }
</style>
