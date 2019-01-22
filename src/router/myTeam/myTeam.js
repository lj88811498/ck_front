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

import myTeamPage from '@/page/myTeam/myTeam.vue'

export default [{
  path: '/myTeam',
  name: 'MyTeam',
  component: myTeamPage,
  meta: {
    authority: ['admin', 'security', 'auditor', 'user', 'assessor']
  }
}]
