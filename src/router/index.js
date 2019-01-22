import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NotFound from './notFound/notFound'
import Login from '@/components/loginForm.vue'
import NodeOverview from './nodeOverview/nodeOverview'
import Register from './register/register'

import Setting from './setting/setting'
import ForgetPassword from './forgetPassword/forgetPassword'
import ApplyUpgrade from './applyUpgrade/applyUpgrade'
import AuditUpgrade from './auditUpgrade/auditUpgrade'
import MyTeam from './myTeam/myTeam'

Vue.use(Router)
const Layout = r => require.ensure([], () => r(require('@/page/layout.vue')), 'Layout');
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        authority: ['admin', 'security', 'auditor', 'user', 'assessor']
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Layout,
      children:[
        ...NodeOverview,
        ...Register,
        ...Setting,
        ...ForgetPassword,
        ...ApplyUpgrade,
        ...AuditUpgrade,
        ...MyTeam
      ]
    },
    {
      path: '*',
      component: Layout,
      children:[
        ...NotFound
      ],
      meta: {
        authority: ['admin', 'security', 'auditor', 'user', 'assessor']
      }
    }
  ]
})
