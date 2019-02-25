/**
* 作者 ：yhzzy
*
* 日期 ：2018/06/19
*
* 描述 ：底部
*/
<template>
  <Footer class="layout-footer-bar cl">
    <div class="copyRights">
      <div style="width:300px;margin:0 auto; padding:20px 0;">
        <p>蜀ICP备19004437号-1</p>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000359" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="../../static/images/beian.png" style="float:left;">
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">川公网安备 51012402000359号</p></a>
      </div>
    </div>
  </Footer>
</template>

<script>
  export default{
    data () {
      return {
        copyRights: {
          rights: '© 2018 ',
          company: '优易数据',
          href: 'http://www.youedata.cn/'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout-footer-bar{
    background: #fff;
    box-shadow: 0 -1px 1px rgba(0,0,0,.1);
    padding: 15px 20px;
    .copyRights{
      float: right;
    }
  }
</style>
