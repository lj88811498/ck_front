/**
* 作者 ：fyc
*
* 日期 ：2019/01/17
*
* 描述 ：首页
*/
<template>
  <div>
    <div class="register_head">
      <Icon type="ios-arrow-back" class="backIcon" @click="back()"/>
      <span>商家信息</span>
    </div>
    <div class="formValidate">
      <ul>
        <li v-for="(item,key) in detailData" v-if="detailData.length>0">
          <p>姓名: {{item.userinfoName}}</p>
          <p>手机号码：{{item.userinfoTel}}</p>
          <p>微信号：{{item.userinfoWx}}</p>
        </li>
        <li v-if="detailData.length <=0">暂无商家信息</li>

      </ul>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  /* eslint-disable indent,semi */
  import Header from '../../components/header/header.vue'
  import ContentTitle from '../../components/contentTitle/contentTitle.vue'
  //  import Data from '../../config/nodeOverview/nodeOverview'
  export default{
    name: 'nodeOverview',
    components: {
      Header,
      ContentTitle,
    },
    data () {
      let vm = this;
      return   {
       detailData:[]

      }
    },
    created: function () {
      this.getDetailData();
    },
    methods:{
      getDetailData () {
        let vm = this;
        let userInfoId = {
          userInfoId:window.sessionStorage.getItem("userinfoId")
         // userInfoId: 9
        };
        vm.api.getMerchants(userInfoId).then((res) => {
         vm.detailData = res;
        }).catch((error) => {
          vm.$Loading.error()
        })
      },


      back () {
        history.back(-1);
      }
    }
  }
</script>
<style>
  .ivu-input{
    height: 40px;
    font-size: 16px;
  }
  .ivu-layout{
    background: none!important;
  }
  .ivu-card{
    background: none!important;
  }
  /*适配手机  媒体查询*/
  @media only screen and (max-width: 768px) {
    .formValidate{
      text-align: center;
      margin-right: 10px;
    }
    .formValidate form{
      width:100%!important;
      display: inline-block;
    }
  }
</style>
<style lang="less" scoped>

  body{
    background: #fff!important;
  }
  .register_head{
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
    border-bottom: 1px solid #e8e8e8;
    color:#000;
    text-align: center;
    position: relative;
    .backIcon{
      text-align: left;
      float: left;
      font-size: 30px;
      /* vertical-align: unset; */
      margin-top: 9px;
      cursor: pointer;
    }
    span:first-of-type{
      font-size: 16px;
      /*font-weight: bold;*/
    }

  }
  .formValidate{
    ul{
      padding: 0;
      margin: 0;
      width:100%;
      li{
        width:100%;
        border-bottom:1px solid #e8e8e8;
        padding-left: 15px;
        background: #fff;
        height: 98px;
        /* line-height: 32px; */
        margin-top: 40px;
        padding-top: 11px;
        /*line-height: 32px;*/
        p{
          height: 25px;
        }

      }
    }

  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 42px;
    font-size: 19px;
  }
</style>
