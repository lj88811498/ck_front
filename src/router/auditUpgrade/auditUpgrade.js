/**
 * Created by Administrator on 2019/1/22 0022.
 */
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

import auditUpgradePage from '@/page/auditUpgrade/auditUpgrade.vue'
import historyListPage from '@/page/auditUpgrade/historyList.vue'

export default [{
  path: '/auditUpgrade',
  name: 'AuditUpgrade',
  component: auditUpgradePage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
},
  {
    path: '/historyList',
    name: 'HistoryList',
    component: historyListPage,
    meta: {
      authority: ['admin', 'security', 'auditor', 'user', 'assessor']
    }
  }]
