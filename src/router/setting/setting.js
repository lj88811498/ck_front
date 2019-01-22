/**
 * Created by Administrator on 2019/1/21 0021.
 */

import settingPage from '@/page/setting/setting.vue'
import changePasswordPage from '@/page/setting/changePassword.vue'
import myBaseInfoPage from '@/page/setting/myBaseInfo.vue'

export default [{
  path: '/setting',
  name: 'Setting',
  component: settingPage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
},
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: changePasswordPage,
    meta: {
      authority: ['admin', 'security', 'auditor', 'user', 'assessor']
    }
  },
  {
    path: '/myBaseInfo',
    name: 'MyBaseInfo',
    component: myBaseInfoPage,
    meta: {
      authority: ['admin', 'security', 'auditor', 'user', 'assessor']
    }
  }]
