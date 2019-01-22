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
      <span>申请升级</span>
      <span @click="merchantInfo()">商家信息</span>
    </div>
    <div class="formValidate">
      <div>
        <p>您当前的等级：{{currentLevel}}</p>
        <p>您可申请升级的等级：{{applyLevel}}</p>
        <p v-if="showNotButton">是否提交申请？</p>
      </div>
      <Button type="primary"  @click="submitApply()" v-if="showNotButton">提交申请</Button>
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
         currentLevel:'',
         applyLevel:'',
         showNotButton:true,
      }
    },
    created: function () {
      this.getLevel();
    },
    methods:{

      getLevel () {
          let vm = this;
          let level = window.sessionStorage.getItem("userinfoLv");
        switch (level) {
          case "0":
             vm.currentLevel = '普通会员';
             vm.applyLevel = '一星会员';
            break;
          case "1":
            vm.currentLevel = '一星会员';
            vm.applyLevel = '二星会员';
            break;
          case "2":
            vm.currentLevel = '二星会员';
            vm.applyLevel = '三星会员';
            break;
          case "3":
            vm.currentLevel = '三星会员';
            vm.applyLevel = '四星会员';
            break;
          case "4":
            vm.currentLevel = '四星会员';
            vm.applyLevel = '五星会员';
            break;
          case "5":
            vm.currentLevel = '五星会员';
            vm.applyLevel = '六星会员';
            break;
          case "6":
            vm.currentLevel = '六星会员';
            vm.applyLevel = '七星会员';
            break;
          case "7":
            vm.currentLevel = '七星会员';
            vm.applyLevel = '八星会员';
            break;
          case "8":
            vm.currentLevel = '八星会员';
            vm.applyLevel = '九星会员';
            break;
          case "9":
            vm.currentLevel= '九星会员';
            vm.applyLevel = '暂无';
            vm.showNotButton = false;
            break;
        }
         // vm.currentLevel = window.sessionStorage.getItem("userinfoLv");
      },


      merchantInfo () {
          let vm = this;
        vm.$router.push({'path': '/merchantInfo'});
      },

      submitApply () {
        let vm = this;
        let userInfoId = {
          userInfoId: window.sessionStorage.getItem("userinfoId")
        };
        vm.api.addUpGrade(userInfoId).then((res) => {
            vm.$Message.success("正在申请中，请等待审核！");
            //vm.$router.push({'path': '/nodeOverview'});
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
    span:last-of-type{
      position: absolute;
      top: 0;
      right: 11px;
      color: #428bca;
      cursor: pointer;
    }
  }
  .formValidate{
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
    div{
      width: 85%;
      margin: 0 auto;
      margin-top: 15%;
      margin-bottom: 15%;
      padding: 20px;
      background-color:#f9f9f9;
      position: relative;
      text-align: left;
    }
    button{
      width: 40%;
      margin: 0 auto;
      line-height: 40px;
      border-radius: 7px;
      background-color:#f9f9f9;
      text-align: center;
      border: 1px solid rgb(27, 25, 25);
      color: #428bca;
      font-size: 16px;
    }

  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 42px;
    font-size: 19px;
  }
</style>
