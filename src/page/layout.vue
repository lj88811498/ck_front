/**
* 作者 ：yhzzy
*
* 日期 ：2018/06/19
*
* 描述 ：公共部分
*/
<template>
  <div class="layout">
    <Layout>

      <Content>
        <router-view/>
      </Content>
      <!--<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>-->
    </Layout>
  </div>
</template>

<script>
  /* eslint-disable indent */

  import Header from '../components/header/header.vue'
  import Navs from '../components/navs/navs.vue'
  import Footer from '../components/footer/footer.vue'

  export default{
    name: 'Layouts',
    components: {
      Header,
      Navs,
      Footer
    },
    data () {
      return {
        isCollapsed: false,
        navsOptions: {
          title: '政务数据交换平台',
          authority: sessionStorage.getItem('authority'),
          data: [
            {
              navId: 9,
              label: '系统概览',
              icon: 'md-speedometer',
              isParent: true,
              childrenUrl: ['/nodeOverview', '/logging'],
              authority: ['admin', 'security', 'auditor', 'user', 'assessor'],
              children: [
                {
                  navId: 91,
                  label: '节点概览',
                  frontUrl: '/nodeOverview',
                  authority: ['admin', 'security', 'auditor', 'user', 'assessor']
                },
                {
                  navId: 92,
                  label: '登录日志',
                  frontUrl: '/logging',
                  authority: ['admin', 'security', 'auditor', 'user', 'assessor']
                },
                {
                  navId: 93,
                  label: '系统通知',
                  frontUrl: '/systemNotification',
                  authority: ['user', 'security','assessor']
                }
              ]

            },
            {
              navId: 1,
              label: '数据资源管理',
              icon: 'logo-buffer',
              isParent: true,
              childrenUrl: ['/source', '/catalog', '/sourceAudit', '/catalogAudit', '/subscriptionAudit'],
              authority: ['user', 'assessor'],
              children: [
                {
                  navId: 11,
                  label: '资源管理',
                  frontUrl: '/source',
                  authority: ['user']
                },
                {
                  navId: 12,
                  label: '目录管理',
                  frontUrl: '/catalog',
                  authority: ['user']
                },
                {
                  navId: 13,
                  label: '资源审核',
                  frontUrl: '/sourceAudit',
                  authority: ['assessor']
                },
                {
                  navId: 14,
                  label: '目录审核',
                  frontUrl: '/catalogAudit',
                  authority: ['assessor']
                },
                {
                  navId: 15,
                  label: '订阅授权',
                  frontUrl: '/subscriptionModeration',
                  authority: ['assessor']
                }
              ]
            },
            {
              navId: 2,
              label: '资源交换管理',
              icon: 'md-sync',
              isParent: true,
              childrenUrl: ['/sourceSubscription', '/allSub', '/sourceManagement', '/sourceManagementAudit'],
              authority: ['user', 'assessor'],
              children: [
                {
                  navId: 21,
                  label: '资源集市',
                  frontUrl: '/sourceSubscription',
                  authority: ['user']
                },
                {
                  navId: 22,
                  label: '所有订阅',
                  frontUrl: '/allSub',
                  authority: ['user']
                },
                {
                  navId: 23,
                  label: '资源管理',
                  frontUrl: '/resourceManagement',
                  authority: ['user']
                },
                {
                  navId: 24,
                  label: '订阅授权',
                  frontUrl: '/subscriptionModeration1',
                  authority: ['assessor']
                }
              ]
            },
            {
              navId: 3,
              label: '审计管理',
              icon: 'md-create',
              isParent: true,
              childrenUrl: ['/logging', '/operation'],
              authority: ['auditor'],
              children: [
                {
                  navId: 31,
                  label: '登录审计',
                  frontUrl: '/logging',
                  authority: ['auditor']
                },
                {
                  navId: 32,
                  label: '操作审计',
                  frontUrl: '/operation',
                  authority: ['auditor']
                }
              ]
            },
            {
              navId: 4,
              label: '机构用户管理',
              icon: 'md-people',
              isParent: true,
              childrenUrl: ['/userManage', '/assignRole'],
              authority: ['admin', 'security'],
              children: [
                {
                  navId: 41,
                  label: '用户管理',
                  frontUrl: '/userManage',
                  authority: ['admin']
                },
                {
                  navId: 42,
                  label: '分配角色',
                  frontUrl: '/assignRole',
                  authority: ['security']
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout{
    /*border: 1px solid #d7dde4;*/
    /*background: #f5f7f9;*/
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
