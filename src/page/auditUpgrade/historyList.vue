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
      <span>历史订单</span>
    </div>
    <div class="formValidate">
      <div v-if="auditUp" class="item">
        <div v-for="(item,key) in detailData" class="item_content" v-if="detailData.length>0">
          <div >
            <p>对方ID：{{item.upgrade_id}}</p>
            <p>姓名：{{item.userInfo_nickname}}</p>
            <p>手机号码：{{item.userInfo_tel}}</p>
            <p>微信号：{{item.userInfo_wx}}</p>
          </div>
          <div>
            <p>  <Button type="default"   >已审核</Button></p>
          </div>
        </div>
        <div v-if="detailData.length <= 0" style="padding-top: 5%">暂无历史订单</div>
      </div>
      <div v-if="!auditUp " class="audit">
        暂无历史订单！
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
          detailData: []

      }
    },
    created: function () {
      this.getauditUp();
      this.getList();
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


      getList () {
          let vm = this;
          let params = {
            userInfoId: window.sessionStorage.getItem("userinfoId")
            //userInfoId: 7
          };
        vm.api.historicalOrder(params).then((res) => {
             vm.detailData = res;
        }).catch((error) => {
          vm.$Loading.error();
        });
      },


      submitApply () {
        /* this.$refs[name].validate((valid) => {
         if (valid) {
         this.$Message.success('Success!');
         } else {
         this.$Message.error('Fail!');
         }
         })*/
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
  .historyList{
    line-height: 35px;
    margin: 5px 1% 0 82%;
    background-color: #fff;
    color: #000000;
    /* float: right; */
    width: 133px;
    text-align: center;
    cursor: pointer;
  }
  .formValidate{
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
    div.item{
      width: 90%;
      /*margin: 19% auto;*/
      height: 140px;
      text-align: center;
      font-size: 16px;
      background: #fff;
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
</style>
