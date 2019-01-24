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
      <Carousel
        v-model="value3"
        :autoplay="true"
        :autoplay-speed="2000"
        :dots="dots"
        :arrow="arrow"
      >
        <CarouselItem>
          <div class="demo-carousel"><img src="../../../static/images/s1.jpg"></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../../../static/images/s2.jpg"></div>
        </CarouselItem>
      </Carousel>
      <div style="background:#333;">
        <div id="tgBigox" ref="tgBigox" style="color:red">
          <div id="tgGoox" ref="tgGoox">
            <a>本系统只是客户商家信誉体系评定推送工具，全为自由自愿加入.所有商业环节与系统无关，系统不收费,不卖产品，无分销,无代理.无奖金.为社交私域流量新生态 打造精准粉丝！各自诚信为本!感恩遇见!只是提供互联网本质属性的工具。所有社交原则自律、一经投诉及查实出假，大，空问题，将冻结账号</a>
          </div>
        </div>
      </div>

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
        <!--<p>客服电话:  {{tel}}</p>-->
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
//  import   '../../../static/js/jquery.min'
  import   '../../config/jquery.min.js'
  export default{
    name: 'nodeOverview',
    components: {
      Header,
      ContentTitle,
    },
    data () {
      let vm = this;
      return {
         value3:0,
         dots:'none',
         timer:null,
         arrow:'never',
          name: '',
          tel: '',
          qq: '',
          index:0,
         /* scrollWidth: 768,
          textWidth: 750*/
        scrollWidth: 0,
        textWidth: 0
      }
    },
    mounted: function () {
      setTimeout(this.scrolls(),1000);
    },
    updated: function () {

     /* console.log(this.$refs["tgBigox"].style);
      console.log(this.$refs["tgBigox"]);*/

    },
    created: function () {
      this.list();
     // this.scroll()
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

      //文字滚动
      scrolls () {
        let vm = this;
        this.$nextTick(() =>
        {
          this.scrollWidth = $("#tgBigox").width();
          this.textWidth = $("#tgGoox").width();
        })

        //console.log(document.getElementById("tgBigox").style.width);
        let i = vm.scrollWidth;
        this.timer = setInterval(function() {
          i--;
          if(i < -vm.textWidth ) {
            i = vm.scrollWidth;
          }
          $('#tgGoox').animate({'left': i+'px'}, 20);
        }, 20);

      },
      //window.onload=function(){setTimeout(start,1000)},
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
    },
    destroyed(){
      if(this.timer) { //如果定时器在运行则关闭
        clearInterval(this.timer);
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
      padding-left: 10px!important;
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
  #tgBigox{
    position: relative;
    width: 100%;
    margin:0 auto;
    height:30px;
    line-height:30px;
    padding-right:65px;
    overflow:hidden;
    display: block;
  }
  #tgGoox{
    position: absolute;
    height:30px;
    line-height:30px;
    top: 0px;
    left: 60%;
    display: block;
    word-break: keep-all;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  #tgGoox a{
    color:#fff;
    margin-left:8px;
    float:left;
  }
  #tgGoox a:hover{
    color:#57bc54;
  }


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
.demo-carousel{
  width:100%;
  height:172px;
  img{
    width:100%;
    height: 100%;
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
