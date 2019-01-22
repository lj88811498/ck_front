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
      <span>我的资料</span>
    </div>
    <p style="margin-top: 10px;">账号设置</p>
    <div class="formValidate">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="70">
        <FormItem  prop="userinfoNickname" class="itemContent" label="姓名">
          <Input v-model="formValidate.userinfoNickname" placeholder="请输入您的姓名" >
          </Input>
        </FormItem>
        <FormItem prop="userinfoTel" class="itemContent" label="手机号码">
          <Input v-model="formValidate.userinfoTel" placeholder="请输入您的手机号码" >
          </Input>
        </FormItem>
        <FormItem prop="userinfoWx" class="itemContent" label="微信账号">
          <Input v-model="formValidate.userinfoWx" placeholder="请输入微信账号" >
          </Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">确认修改</Button>
          <!--<Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>-->
        </FormItem>
      </Form>
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
        showErrorPwd:false,
        formValidate: {
          userinfoNickname: '',
          userinfoTel: '',
          userinfoWx: '',

        },
        ruleValidate: {
          userinfoNickname: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          userinfoWx: [
            { required: true, message: '请输入微信账号', trigger: 'blur' },
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
        }
      }
    },
    created: function () {
       this.getDetail();
    },
    methods:{

      //新密码确认
      getDetail: function () {
        let vm = this;
        let userinfoTel = {
          userinfoTel:window.sessionStorage.getItem("userinfoTel")
        };
        vm.api.baseInfo(userinfoTel).then((res) => {
           vm.formValidate.userinfoNickname = res.userinfoNickname;
          vm.formValidate.userinfoWx = res.userinfoWx;
          vm.formValidate.userinfoTel = res.userinfoTel;
        }).catch((error) => {
          vm.$Loading.error()
        })
      },

      handleSubmit (name) {
        let vm = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            vm.formValidate.userInfoId = window.sessionStorage.getItem("userinfoId");
            vm.formValidate.userinfoHead = "";
            vm.formValidate.userInfoSurname = "";
            vm.formValidate.userInfoSex = "";
            vm.formValidate.userInfoProvince = "";
            vm.formValidate.userInfoCity = "";
            vm.api.updateBaseInfo(vm.formValidate).then((res) => {
              vm.$Message.success("基本信息修改成功");
              //vm.$router.push({'path': '/'});
            }).catch((error) => {
              vm.$Loading.error()
            })
          } else {
            this.$Message.error('修改失败!');
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
</style>
