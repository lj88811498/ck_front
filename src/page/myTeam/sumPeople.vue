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
      <span>审核统计</span>
    </div>
    <div class="formValidate">
      <ul>
        <li v-for="(item,key) in detailData" v-if="detailData.length>0">
          <p>姓名: {{item.userInfo_nickname}}</p>
          <p>手机号码：{{item.userInfo_tel}}</p>
          <p>微信号：{{item.userInfo_wx}}</p>
          <p>审核次数：{{item.count}}次</p>
          <p>等级：{{item.userInfo_lv}}</p>
        </li>
        <li v-if="detailData.length <=0">暂无信息</li>

      </ul>
      <Page :total="totalSum" show-total class="pageTotal" show-sizer :page-size="5" :page-size-opts="[3,5,10]" @on-change="changeNum" @on-page-size-change="changePageSize"/>
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
        detailData:[],
        totalSum :0,
        current:1,
        showSize:5

      }
    },
    created: function () {
      this.getDetailData();
    },
    methods:{
      getDetailData () {
        let vm = this;
        let userInfoId = {
          userInfoId: 20001,
          curPage: vm.current,
          size: vm.showSize
          // userInfoId: 9
        };
        vm.api.auditorTotal(userInfoId).then((data) => {
          let res = data.records;
          vm.totalSum = data.total;
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
          vm.$Loading.error()
        })
      },


      changeNum (value) {
        // console.log(value);
        let vm = this;
        vm.current = value;
        vm.getDetailData();
      },


      changePageSize (size) {
        // console.log(size);
        let vm = this;
        vm.showSize = size;
        vm.getDetailData();
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
        /*height: 98px;*/
        /* line-height: 32px; */
        margin-top: 40px;
        padding-top: 11px;
        text-align: left;
        padding-bottom: 20px;
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
  .pageTotal{
    text-align: center;
    margin-top: 20px!important;
  }
</style>
