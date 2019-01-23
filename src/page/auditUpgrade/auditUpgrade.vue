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
      <span>审核升级</span>
    </div>
    <div class="historyList" @click="historyList()">历史订单</div>
    <div class="formValidate">
      <div v-if="auditUp" class="item" v-for="(item,key) in detailData">
        <div  class="item_content" v-if="detailData.length > 0 && status">
          <div >
            <p>对方ID：{{item.upgrade_id}}</p>
            <p>姓名：{{item.userInfo_nickname}}</p>
            <p>准等级：{{item.userInfo_lv}}</p>
            <p>手机号码：{{item.userInfo_tel}}</p>
            <p>微信号：{{item.userInfo_wx}}</p>
          </div>
          <div>
            <p>  <Button type="default"  @click="submitApply('1',item.upgrade_id,item.userInfo_id)" >同意</Button></p>
            <p>  <Button type="default"  @click="submitApply('2',item.upgrade_id,item.userInfo_id)">拒绝</Button></p>
          </div>
        </div>
        <div v-if="detailData.length <= 0" class="noContent">暂无审核内容</div>
      </div>
      <div v-if="!auditUp" class="audit">
        暂无审核升级权限！
      </div>
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
    auditUp:false,
    data () {
      let vm = this;
      return   {
         detailData:[],
        status:true
      }
    },
    created: function () {
      this.getauditUp();
      this.getDetail();
    },
    methods:{

      getauditUp () {
         let vm = this;
         let level = window.sessionStorage.getItem("userinfoLv");
         if (level === '0') {
          vm.auditUp = false;
         } else {
          vm.auditUp = true;
         }
      },

      getDetail () {
          let vm = this;
          let userInfoId = {
            userInfoId: window.sessionStorage.getItem("userinfoId")
            //userInfoId: 7
          };
          vm.api.orderList(userInfoId).then((res) => {
            for (let i = 0; i < res.length; i++) {
              if (res[i].userInfo_lv === '0') {
                res[i].userInfo_lv = '普通会员';
              } else if (res[i].userInfo_lv === '1') {
                res[i].userInfo_lv = '一星会员';
              } else if (res[i].userInfo_lv === '2') {
                res[i].userInfo_lv = '二星会员';
              } else if (res[i].userInfo_lv === '3') {
                res[i].userInfo_lv = '三星会员';
              } else if (res[i].userInfo_lv === '4') {
                res[i].userInfo_lv = '四星会员';
              } else if (res[i].userInfo_lv === '5'){
                res[i].userInfo_lv = '五星会员';
              } else if (res[i].userInfo_lv === '6') {
                res[i].userInfo_lv = '六星会员';
              } else if (res[i].userInfo_lv === '7') {
                res[i].userInfo_lv = '七星会员';
              } else if (res[i].userInfo_lv === '8') {
                res[i].userInfo_lv = '八星会员';
              } else if (res[i].userInfo_lv === '9') {
                res[i].userInfo_lv = '九星会员';
              }
            }
            vm.detailData = res;
          }).catch((error) => {
             vm.$Loading.error();
          });
      },

      historyList () {
          let vm = this;
        vm.$router.push({'path': '/historyList'});
      },

      submitApply (status,upgradeId,userInfoId) {
          let vm = this;
          let params = {
            upgradeId: upgradeId,
            upgradeStatus: status,
            userinfoId: userInfoId
          };
        vm.api.auditEscalation(params).then((res) => {
          if (status === '1') {
              vm.$Message.success('审核通过');
          }
          if (status === '2') {
            vm.$Message.error('审核未通过');
          }
          vm.status = false;
          vm.$router.push({'path': '/nodeOverview'});
        }).catch((error) => {
          vm.$Loading.error();
        });

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
    .formValidate div.item{
      font-size: 2.3rem!important;
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
  .historyList{
    line-height: 35px;
    margin: 5px 1% 0 82%;
    background-color: #fff;
    color: #000000;
    /* float: right; */
    /*width: 133px;*/
    text-align: center;
    cursor: pointer;
  }
  .formValidate{
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
    div.item{
      width: 100%;
      /*margin: 19% auto;*/
      height: 140px;
      text-align: center;
      font-size: 1.5rem;
      background: #fff;
      margin-bottom: 20px;
      /*color: rgb(26, 196, 199);*/
      .item_content{
        div:first-of-type{
          float: left;
          padding-left: 10px;
          padding-top: 10px;
          p{
            text-align: left;
          }
        }
        div:last-of-type{
          float: right;
          padding-right: 20px;
          margin-top: 20px;
          p{
            margin-bottom: 20px;
          }
        }
      }

    }


  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 42px;
    font-size: 19px;
  }
  .noContent{
   padding-top: 5%;
  }
  .audit{
    width: 80%;
    margin: 19% auto;
    text-align: center;
    font-size: 16px;
    color: rgb(26, 196, 199);
  }
</style>
