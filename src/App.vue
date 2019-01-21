<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<LoginForm></LoginForm>-->
    <router-view/>
  </div>
</template>

<script>
import LoginForm from './components/loginForm'

  export default {
  name: 'App',
    components: {
      'LoginForm': LoginForm
    }
}
</script>

<style lang="less">
  @import "./assets/less/common.less";
  #app{
    height: 100%;
  }
  .ivu-layout-sider-trigger{
    display: none;
  }
  .tableList{
    margin: 0 20px 20px 20px;
  th{
    font-size: 16px;
    text-align: center;
  }
  td{
    font-size: 14px;
    padding: 5px 0;
    text-align: center;
  }
  }
  .tablePager{
    margin: 0 20px 20px 20px;
    float: right;
  }
  .main-content{
    /*margin: 20px;*/
    /*background-color: #ffffff;*/
    /*padding: 15px 10px;*/
  }
  .ivu-message{
    z-index: 9999!important;
  }
  .tree-nodes {

  ul {
    font-size: 14px !important;
    li{
      list-style: none;
    }
  }

  }
</style>
