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
      <span>创客新零售会员注册</span>
    </div>
    <div class="formValidate">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" v-if="registerAuth">
        <FormItem  >
          <Input v-model="formValidate.userinfoCode" placeholder="默认推荐号" readonly disabled>
          <Icon type="ios-person-outline" slot="prefix"/>
          </Input>

        </FormItem>
        <FormItem  prop="userinfoTel">
          <Input v-model="formValidate.userinfoTel" placeholder="请输入下级手机号码" >
          <Icon type="ios-person-outline" slot="prefix"/>
          </Input>
        </FormItem>
        <FormItem prop="userinfoWx">
          <Input v-model="formValidate.userinfoWx" placeholder="请输入下级微信号">
          <Icon type="ios-person-outline" slot="prefix"/>
          </Input>
        </FormItem>
        <FormItem  prop="userinfoNickname">
          <Input v-model="formValidate.userinfoNickname" placeholder="请输入下级姓名">
          <Icon type="ios-person-outline" slot="prefix"/>
          </Input>
        </FormItem>
        <FormItem  prop="userinfoPwd" class="itemContent">
          <Input v-model="formValidate.userinfoPwd" placeholder="请输入下级登录初始密码" type="password">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="userInfoNamePwd" class="itemContent">
          <Input v-model="formValidate.userInfoNamePwd" placeholder="请确认密码" type="password" @on-change="changeVal()">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
          <small class="login-form-tips" v-if="showErrorPwd">{{tips}}</small>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
          <!--<Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>-->
        </FormItem>
      </Form>
      <div v-if="!registerAuth" class="registerAuth">暂无帮助注册权限!</div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  /* eslint-disable indent,semi,no-unused-vars,no-trailing-spaces */
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
// eslint-disable-next-line no-multi-spaces
      return   {
        registerAuth:true,
        showErrorPwd:false,
        formValidate: {
          userinfoCode: '',
          userinfoTel: '',
          userinfoWx: '',
          userinfoNickname: '',
          userinfoPwd: '',
      },
      ruleValidate: {
        userinfoCode: [
          { required: false, message: '推荐号必填', trigger: 'blur' }
        ],
        userinfoTel: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { type: 'number', message: '手机号码格式不正确', trigger: 'blur',transform(value){
              let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myreg.test(value)) {
                  return false;
              } else {
                  return Number(value);
              }
          } }
        ],
        userinfoWx: [
          { required: true, message: '请输入下级微信号', trigger: 'blur' }
        ],
        userinfoNickname: [
          { required: true, message: '请输入商家姓名', trigger: 'blur' }
        ],
        userinfoPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', max: 20, message: '密码长度不超过20个字符', trigger: 'blur' }
        ]
      }
    }
    },
    created: function () {
       this.getUserInfoLv();
    },
    methods:{


        /*获取星级*/
      getUserInfoLv () {
          let vm = this;
          let level = window.sessionStorage.getItem("userinfoLv");
          vm.formValidate.userinfoCode =  window.sessionStorage.getItem("userinfoCode");
          if (level === '0') {
             vm.registerAuth = false;
           } else {
            vm.registerAuth = true;
          }
      },

      //新密码确认
      changeVal: function () {
        let vm = this;
        if (vm.formValidate.userinfoPwd != vm.formValidate.userInfoNamePwd) {
          vm.tips = "两次密码输入不一致";
          vm.showErrorPwd = true;
        } else {
          vm.tips = "";
          vm.showErrorPwd = false;
        }
      },


      handleSubmit (name) {
          let vm = this;
          if (vm.showErrorPwd) {
              return
          }
        this.$refs[name].validate((valid) => {
          if (valid) {
            delete vm.formValidate.userinfoCode;
            delete vm.formValidate.userInfoNamePwd;
            vm.formValidate.userInfoId = window.sessionStorage.getItem("userinfoId");
            vm.api.register(vm.formValidate).then((res) => {
                this.$Message.success('注册成功!');
                this.$router.push({'path': '/nodeOverview'});
            }).catch((error) => {
              vm.$Loading.error()
            })
          } else {
            this.$Message.error('注册失败');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
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
  .formValidate{
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
    form{
      width:96%;
      display: inline-block;
      .itemContent{
        height: 40px;
        input{
          height: 40px;
        }
      }
      button{
        width: 100%;
        height: 40px;
        font-size: 16px;
        background: #ff644e;
        border:none;
      }
    }

  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 42px;
    font-size: 19px;
  }
  .login-form-tips{
    color: #ed4014;
    float: left;
  }
  .registerAuth{
    width: 80%;
    margin: 19% auto;
    text-align: center;
    font-size: 16px;
    color: rgb(26, 196, 199);
  }
</style>
