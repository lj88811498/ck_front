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
      <span>忘记密码</span>
    </div>
    <div class="formValidate">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" >
        <FormItem prop="newPassord" class="itemContent">
          <Input v-model="formValidate.newPassord" placeholder="请输入您的新密码" type="password">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="userInfoNamePwd" class="itemContent">
          <Input v-model="formValidate.userInfoNamePwd" placeholder="请确认新密码" type="password" @on-change="changeVal()">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
          <small class="login-form-tips" v-if="showErrorPwd">{{tips}}</small>
        </FormItem>
        <FormItem  prop="mail">
          <Input v-model="formValidate.userinfoTel" placeholder="请输入手机号码">
          <Icon type="ios-person-outline" slot="prefix"/>
          </Input>
        </FormItem>


        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
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
          newPassord: '',
          userInfoNamePwd: '',
          userinfoTel: '',
        },
        ruleValidate: {
          newPassord: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            {type: 'string', max: 20, min:6, message: '密码长度为6-20个字符', trigger: 'blur'}
          ],
          userInfoNamePwd: [
            { required: true, message: '请确认密码', trigger: 'blur' },
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

    },
    methods:{

      //新密码确认
      changeVal: function () {
        let vm = this;
        if (vm.formValidate.newPassord != vm.formValidate.userInfoNamePwd) {
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
            vm.api.forgetPwd(vm.formValidate).then((res) => {
              this.$Message.success('提交成功!');
              this.$router.push({'path': '/'});
            }).catch((error) => {
              vm.$Loading.error()
            });
          } else {
            this.$Message.error('提交失败!');
          }
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
    .ivu-input-prefix i, .ivu-input-suffix i{
      line-height: 38px;
      font-size: 3rem!important;
    }
    .register_head .backIcon{
      font-size: 4rem!important;
      margin-top: 13px!important;
    }
    .register_head span{
      font-size: 3rem!important;
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
      font-size: 2.5rem;
      /* vertical-align: unset; */
      margin-top: 9px;
      cursor: pointer;
    }
    span{
      font-size: 1.8rem;
      /*font-weight: bold;*/
    }
  }
  .login-form-tips{
    color: #ed4014;
    float: left;
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
    line-height: 32px;
    font-size: 2rem;
    vertical-align: top;
  }
</style>
