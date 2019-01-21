/**
 * Created by Administrator on 2019/1/17 0017.
 */
import registerPage from '@/page/register/register.vue'

export default [{
  path: '/register',
  name: 'Register',
  component: registerPage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
}]
