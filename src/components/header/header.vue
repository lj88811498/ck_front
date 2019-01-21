/**
* 作者 ：yhzzy
*
* 日期 ：2018/06/19
*
* 描述 ：头部
*/
<template>
  <Header class="layout-header-bar cl">
    <div class="header-opreation">
      <p>ID:</p>
      <p>等级:</p>
      <p>姓名:</p>
      <p>推荐码:</p>
   <!--   <Dropdown trigger="click" placement="bottom-start">
        <a class="user-name" href="javascript:void(0)">
          <Icon type="ios-contact"></Icon>
          <span>{{userName}}</span>
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="item in dropdownMenu" :key="item.navId" class="header-drop-menu" @click.native="personalInfo(item.frontUrl)">
            <Icon :type="item.icon"></Icon>
            {{item.label}}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>-->
      <!--<a class="login-out" href="" @click="logout">登录</a>-->
    </div>
    <img src="../../../static/images/set.png" @click="setting()">
  </Header>
</template>

<script>
  export default{
    data () {
      return {
        dropdownMenu: [
          {
            navId: 9,
            show: true,
            label: '个人资料',
            icon: 'pricetags',
            isParent: false,
            frontUrl: ''
          },
          {
            navId: 10,
            show: true,
            label: '修改密码',
            icon: 'wrench',
            isParent: false,
            frontUrl: '/changePassword'
          }
        ],
        userName: window.sessionStorage.getItem("userName")
      }
    },
    methods: {
      logout () {
        window.sessionStorage.setItem("authority", "");
      },
      personalInfo (frontUrl) {
        this.$router.push({'path': frontUrl});
      },

      setting () {
        let vm = this;
        vm.$router.push({'path': '/setting'});
      }
    }
  }
</script>

<style lang="less" scoped>
  .ivu-icon-ios-contact{
    font-size: 28px;
    margin-bottom: 2px;
  }
  .layout-header-bar{
    /*background: #fff;*/
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    /*padding: 0 20px;*/
    z-index: 1;
    /*height:200px;*/
    /*background: #01ccda;*/
    background: url('../../../static/images/bg3.gif') no-repeat;
    height: 135px;
    position: relative;
    background-size: 100% 100%;
    padding: 20px;
    .header-opreation{
      /*float: right;*/
    p{
      padding: 2px;
      line-height: 20px;
    }
    }
    img{
      width: 25px;
      height: 25px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
</style>
