/**
* 作者 ：fyc
*
* 日期 ：2019/01/17
*
* 描述 ：首页
*/
<template>

  <div class="cl">

    <div class="main-content cl">
      <Header></Header>
      <Card class="infoCard" :dis-hover="true">
        <ul class="infoList cl">
          <li @click="pageHref('注册')">
            <img src="../../../static/images/help1.png">
            <!--<Icon type="ios-create" class="liIcon"/>-->
            <div>
             帮助注册
            </div>
          </li>
          <li @click="pageHref('申请升级')">
            <img src="../../../static/images/help2.png">
            <!--<Icon type="md-cloud-upload" class="liIcon"/>-->
            <div> 申请升级</div>
          </li>
          <li @click="pageHref('审核升级')">
            <img src="../../../static/images/help3.png">
            <!--<Icon type="ios-browsers" class="liIcon"/>-->
            <div> 审核升级</div>
          </li>
          <li @click="pageHref('我的团队')">
            <img src="../../../static/images/help4.png">
            <!--<Icon type="ios-people" class="liIcon"/>-->
            <div>我的团队</div>
          </li>
        </ul>
      </Card>
      <div class="node-footer">
        <p>客服姓名:  {{name}}</p>
        <p>客服电话:  {{tel}}</p>
        <p>客服QQ:  {{qq}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable indent,semi,spaced-comment */
  import Header from '../../components/header/header.vue'
  import ContentTitle from '../../components/contentTitle/contentTitle.vue'
  import Data from '../../config/nodeOverview/nodeOverview'
  export default{
    name: 'nodeOverview',
    components: {
      Header,
      ContentTitle,
    },
    data () {
      let vm = this;
      return {
          name: '',
          tel: '',
          qq: ''
      }
    },
    created: function () {
      this.list();
    },
    methods:{
      list () {
        let vm = this;
        vm.api.customerServiceNumbers().then((res) => {
           vm.name = res[0].name;
           vm.tel = res[0].phone;
           vm.qq = res[0].qq;
        }).catch((error) => {
          vm.$Loading.error();
        });
      },

      pageHref (name) {
          let vm = this;
          if (name === "注册") {
            vm.$router.push({'path': '/register'});
          } else if (name === "申请升级") {
            vm.$router.push({'path': '/ApplyUpgrade'});

          } else if (name === "审核升级") {
            vm.$router.push({'path': '/auditUpgrade'});
          } else if (name === "我的团队") {
            vm.$router.push({'path': '/myTeam'});
          }
      }
    }
  }
</script>
<style>
  .ivu-layout{
    background: none!important;
  }
  .ivu-card{
    background: none!important;
  }
  /*适配手机  媒体查询*/
  @media only screen and (max-width: 768px) {
    body{
      background: #eee!important;
    }
    .infoList{
      width:95%!important;
      text-align: center;
    }
    .infoList li{
      /*float: left;*/
      display: inline-block;
      width:44%!important;
      height:140px!important;
      border:1px solid #dcdcdc;
      margin-bottom: 6%;
      margin-right: 5%!important;
      border-radius: 10px;
  }
  .infoList li:nth-of-type(2n){
    margin-right: 0;
  }
  }
</style>
<style lang="less" scoped>


.infoCard{
  text-align: center;
  border:1px solid #ececec;
  padding-top: 6%;
  .infoList{
    padding: 0;
    margin: 0;
    text-align: center;
    display: inline-block;
    width:94%;
    li{
      /*float: left;*/
      display: inline-block;
      background: #fff;
      width: 40%;
      height: 165px;
      border: 1px solid #dcdcdc;
      margin-bottom: 6%;
      margin-right: 10%;
      border-radius: 10px;
      cursor: pointer;
      &:nth-of-type(2n){
        margin-right: 0;
      }
      img{
        width:50px;
        height:50px;
        margin-top: 14%;
        margin-bottom: 10px;
      }
      .liIcon{
        font-size: 42px;
        margin-top: 24px;
      }

    }
  }
}
.node-footer{
  margin-top: 40px;
  border:1px solid rgba(0, 0, 0, 0.25098039215686274);
  border-radius: 10px;
  margin: 0 7.5%;
  padding: 5px 9px;
  p{
    height: 35px;
    line-height: 35px;
  }
}
</style>
