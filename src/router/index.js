import Vue from "vue";
import Router from "vue-router";
import User from "../views/User.vue";
import Organ from "../views/Organ.vue";
import Lication from "../views/Lication.vue";
import Program from "../views/Program.vue";
import Authouity from "../views/Authouity.vue";
import Users from "../views/Users.vue";


Vue.use(Router);

export default new Router({
   routes:
   [
    {
      path:'/user',
      component:User,
    },
     {
    path:'/',
    redirect:'/user'
  },
  {
    path:'/organ',
    component:Organ
  },
  {
    path:'/lication',
    component:Lication
  },
  {
    path:'/program',
    component:Program
  },
  {
    path:'/authouity',
    component:Authouity
    
  },
  {
    path:'/users',
    component:Users
  }
]
});
