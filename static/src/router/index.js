import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Student from 'components/Student'
import User from 'components/User'
import Class from 'components/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/student',
      name:'Student',
      component:Student
    },
    {
      path:'/users',
      name:'User',
      component:User
    },
    {
      path:'/classes',
      name:'Class',
      component:Class
    }
  ]
})
