/**
 * Created by Administrator on 2019/1/22 0022.
 */
/**
 * 作者 ：yhzzy
 *
 * 日期 ：2018/09/11
 *
 * 描述 ：节点概览路由
 */

import applyUpgradePage from '@/page/applyUpgrade/applyUpgrade.vue'
import merchantInfoPage from '@/page/applyUpgrade/merchantInfo.vue'


export default [{
  path: '/applyUpgrade',
  name: 'ApplyUpgrade',
  component: applyUpgradePage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
},
  {
    path: '/merchantInfo',
    name: 'MerchantInfo',
    component: merchantInfoPage,
    meta: {
      authority: ['admin', 'security', 'auditor', 'user', 'assessor']
    }
  }]
