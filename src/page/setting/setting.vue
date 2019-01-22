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
      <span>设置</span>
    </div>
    <div class="setting-content">
      <div class="avatar" @click="updateInfo()">
        <img src="" >
        ID: {{id}}
        <Icon type="ios-arrow-forward" class="forward"/>
      </div>
       <div class="item" @click="changePassword()">
         <span>修改密码</span>
         <Icon type="ios-arrow-forward" class="forward"/>
       </div>
      <Button type="primary" @click="handleSubmit('formValidate')">退出账户</Button>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  /* eslint-disable indent,semi */
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
      return   {
        id:window.sessionStorage.getItem("userinfoId"),

      }
    },
    created: function () {

    },
    methods:{

      updateInfo () {
        let vm = this;
        vm.$router.push({'path': '/myBaseInfo'});
      },

      changePassword () {
          let vm = this;
          vm.$router.push({'path': '/changePassword'});
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
    .backIcon{
      text-align: left;
      float: left;
      font-size: 30px;
      /* vertical-align: unset; */
      margin-top: 9px;
      cursor: pointer;
    }
    span{
      font-size: 16px;
      /*font-weight: bold;*/
    }
  }
 .setting-content{
   margin-top: 20px;
   width:100%;
   .avatar{
     width: 100%;
     background: #fff;
     height: 90px;
     line-height: 90px;
     border-bottom: 1px solid #ececec;
     /* padding: 10px 20px; */
     padding-left: 15px;
     cursor: pointer;
     img{
       width: 70px;
       height: 70px;
       margin-right: 5px;
       /*display: block;*/
       border-radius: 50%;
     }
     .forward{
       float: right;
       margin-top: 42px;
       margin-right: 10px;
     }
   }
   .item{
     width: 100%;
     background: #fff;
     height: 45px;
     line-height: 45px;
     padding-left: 15px;
     font-size: 16px;
     cursor: pointer;
   .forward{
     float: right;
     margin-top: 15px;
     margin-right: 10px;
   }
   }
   button{
     margin-top: 20px;
     width:100%;
     height: 45px;
     line-height: 36px;
     background: #e45050;
     font-size: 15px;
     border:none;
   }
 }
</style>
