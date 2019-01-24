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
      <p>ID: {{userinfoId}}</p>
      <p>等级: {{userinfoLv}}</p>
      <p>姓名: {{userinfoNickname}}</p>
      <p>推荐码: {{userinfoCode}}</p>
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
    <Icon type="ios-cog" class="img" @click="setting()"/>

    <!--<img src="../../../static/images/set.png" @click="setting()">-->
  </Header>
</template>

<script>
  /* eslint-disable indent */

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

      }
    },
    created: function () {
     this.detail();
    },
    methods: {
      logout () {
        window.sessionStorage.setItem("authority", "");
      },
      personalInfo (frontUrl) {
        this.$router.push({'path': frontUrl});
      },
      detail () {
          let vm = this;
          vm.userinfoLv = window.sessionStorage.getItem("userinfoLv");
          vm.userinfoId  = window.sessionStorage.getItem("userinfoId");
          vm.userInfoTel = window.sessionStorage.getItem("userInfoTel");
          vm.userinfoNickname = window.sessionStorage.getItem("userinfoNickname");
          vm.userinfoCode = window.sessionStorage.getItem("userinfoCode");
        if (vm.userinfoCode === "" || vm.userinfoCode === 'null') {
          vm.userinfoCode = '暂无'
        }
        switch (vm.userinfoLv) {
          case "0":
            return   vm.userinfoLv = '普通会员';
          case "1":
            return   vm.userinfoLv = '一星会员';
          case "2":
            return    vm.userinfoLv= '二星会员';
          case "3":
            return    vm.userinfoLv= '三星会员';
          case "4":
            return  vm.userinfoLv= '四星会员';
          case "5":
            return   vm.userinfoLv= '五星会员';
          case "6":
            return   vm.userinfoLv= '六星会员';
          case "7":
            return  vm.userinfoLv= '七星会员';
          case "8":
            return   vm.userinfoLv= '八星会员';
          case "9":
            return   vm.userinfoLv= '九星会员';
        }
      },
      setting () {
        let vm = this;
        vm.$router.push({'path': '/setting'});
      }
    }
  }
</script>
<style>
  /*适配手机  媒体查询*/
  @media only screen and (max-width: 768px) {
    .layout-header-bar .header-opreation p{
      font-size: 2.5rem!important;
    }
  }
</style>
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
      font-size: 1.5rem;
    }
    }
    .img{
      font-size: 24px;
      width: 25px;
      height: 25px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
</style>
