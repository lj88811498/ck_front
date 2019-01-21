/**
 * Created by Administrator on 2019/1/21 0021.
 */
/**
 * 作者 ：yhzzy
 *
 * 日期 ：2018/09/11
 *
 * 描述 ：节点概览路由
 */

import forgetPasswordPage from '@/page/forgetPassword/forgetPasswords.vue'

export default [{
  path: '/forgetPassword',
  name: 'ForgetPassword',
  component: forgetPasswordPage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
}]
