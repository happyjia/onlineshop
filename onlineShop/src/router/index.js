import Vue from 'vue'
import Router from 'vue-router'
import getList from '../components/getList'
import login from '../components/login'
import selectNext from '../components/selectNext'
import manager_delete from '../components/manager_delete'
import newApplication from '../components/newApplication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'getList',
      component: getList
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/SelectNext',
      name: 'SelectNext',
      component: selectNext
    },
    {
      path: '/managerDelete',
      name: 'managerDelete',
      component: manager_delete
    },
    {
      path: '/newApplication',
      name: 'newApplication',
      component: newApplication
    }
  ]
})
