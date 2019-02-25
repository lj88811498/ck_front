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

    </Layout>
    <Footer class="layout-footer-center">
      <div style="width:300px;margin:0 auto;">
        <p>蜀ICP备19004437号-1</p>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000359" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="../../static/images/beian.png" style="float:left;">
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">川公网安备 51012402000359号</p></a>
      </div>
    </Footer>
  </div>
</template>

<script>
  /* eslint-disable indent */

  import Header from '../components/header/header.vue'
  import Navs from '../components/navs/navs.vue'
//  import Footer from '../components/footer/footer.vue'

  export default{
    name: 'Layouts',
    components: {
      Header,
      Navs,
//      Footer
    },
    data () {
      return {
        isCollapsed: false,

      }
    }
  }
</script>
<style>
  @media only screen and (max-width: 768px) {
  /*  .layout{
      min-height: 850px!important;
    }
    .layout-footer-center{
      left: 12%!important;
    }*/

  }
  .ivu-layout{
  flex:1 0 auto!important;
  }
  .ivu-layout-footer{
    padding: 0!important;
    background: none!important;
  }
</style>
<style lang="less" scoped>
  #app{

  }
  .layout{
    /*border: 1px solid #d7dde4;*/
    /*background: #f5f7f9;*/
    /*position: relative;*/
    /*flex: 1;*/
    display: flex;
    display: -webkit-flex; /* Safari */
    min-height: 100vh;
    flex-direction: column;

    border-radius: 4px;
    /*overflow: hidden;*/
    /*min-height: 970px;*/
    /*height: 100%;*/
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
    background: none!important;
    /*padding: 24px 50px;*/
    color: #515a6e;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    /*position: fixed;*/
    bottom: 0;
    /*left: 30%;*/
    flex:0 0 auto;
  }
</style>
