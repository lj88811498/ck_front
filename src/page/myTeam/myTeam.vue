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
      <span>我的团队({{myGroupSum}}人)</span>
    </div>
    <div class="formValidate">
      <ul>
        <li>
          <p>成员信息</p>
          <p>一星及一星以上人数：{{total}}人</p>
        </li>
        <li v-for="(item,key) in detail">
          <div>
            <p>昵称：{{item.userinfoNickname}}</p>
            <p>手机号：{{item.userinfoTel}}</p>
          </div>
          <div>
            <p>等级：{{item.userinfoLv}}</p>
            <p>微信：{{item.userinfoWx}}</p>
          </div>
        </li>
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
        total:0,
        myGroupSum:0,
        detail:[]

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
         };
         vm.api.myGroup(userInfoId).then((res) => {
          vm.total = res.sum;
          vm.myGroupSum = res.myGroupSum;
          for (let i = 0; i < res.data.length; i++) {
              console.log(res.data[i].userinfoLv)
            if (res.data[i].userinfoLv === '0') {
              res.data[i].userinfoLv = '普通会员';
            } else if (res.data[i].userinfoLv === '1') {
              res.data[i].userinfoLv = '一星会员';
            } else if (res.data[i].userinfoLv === '2') {
              res.data[i].userinfoLv = '二星会员';
            } else if (res.data[i].userinfoLv === '3') {
              res.data[i].userinfoLv = '三星会员';
            } else if (res.data[i].userinfoLv === '4') {
              res.data[i].userinfoLv = '四星会员';
            } else if (res.data[i].userinfoLv === '5'){
              res.data[i].userinfoLv = '五星会员';
            } else if (res.data[i].userinfoLv === '6') {
              res.data[i].userinfoLv = '六星会员';
            } else if (res.data[i].userinfoLv === '7') {
              res.data[i].userinfoLv = '七星会员';
            } else if (res.data[i].userinfoLv === '8') {
              res.data[i].userinfoLv = '八星会员';
            } else if (res.data[i].userinfoLv === '9') {
              res.data[i].userinfoLv = '九星会员';
            }
          /*  switch (res.data[i].userinfoLv) {
              case "0":
                return   res.data[i].userinfoLv = '普通会员';
              case "1":
                return  res.data[i].userinfoLv = '一星会员';
              case "2":
                return   res.data[i].userinfoLv = '二星会员';
              case "3":
                return   res.data[i].userinfoLv = '三星会员';
              case "4":
                return  res.data[i].userinfoLv = '四星会员';
              case "5":
                return  res.data[i].userinfoLv = '五星会员';
              case "6":
                return  res.data[i].userinfoLv = '六星会员';
              case "7":
                return  res.data[i].userinfoLv = '七星会员';
              case "8":
                return  res.data[i].userinfoLv = '八星会员';
              case "9":
                return  res.data[i].userinfoLv = '九星会员';
            }*/
          }
          console.log(res.data);
          vm.detail = res.data;
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
       border-bottom:1px solid #eaeaea;
       padding-left: 15px;
       background: #fff;
       height: 70px;
       line-height: 32px;
       &:first-of-type{
         line-height: 46px;
         height: 46px;
         p{
           display: inline-block;
           &:first-of-type{
             float: left;
           }
           &:last-of-type{
             float: right;
             margin-right: 15px;
           }
         }
       }
       div{
         display: inline-block;
         &:first-of-type{
           float: left;
         }
         &:last-of-type{
           float: right;
           margin-right: 15px;
         }
       }
     }
   }

  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 42px;
    font-size: 19px;
  }
</style>
