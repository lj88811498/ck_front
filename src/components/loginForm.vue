<template>
  <div>
    <div class="register_head">
      <span>创客新零售会员登录</span>
    </div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="login" class="login-form">
      <FormItem prop="user" class="login-form-item">
        <Input type="text" v-model="formInline.user" placeholder="请输入您的手机号码" class="item">
        <Icon type="ios-person-outline" slot="prefix"/>
        </Input>
      </FormItem>
      <FormItem prop="password" class="login-form-item">
        <Input type="password" v-model="formInline.password" class="item" placeholder="请输入您的密码">
        <Icon type="md-lock" slot="prefix"></Icon>
        </Input>
      </FormItem>
      <FormItem class="login-form-item">
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
    <div class="forgetPassword" @click="forgetPassword()">忘记密码</div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!')
            this.$router.push({'path': '/nodeOverview'});
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },

      forgetPassword () {
          let vm = this;
          vm.$router.push({'path': '/forgetPassword'});
      }
    }
  }
</script>
<style>
.ivu-input{
  height: 40px;
}
</style>
<style lang="less" scoped>
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
  #login {
    /*background-image: url('./img/login_bg.jpg');*/
    /* background-size: cover; */
    /*background-color: #2d81bb;*/
    background-position: center;
    /*height: 100vh;*/
    overflow: auto;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    background-repeat: no-repeat;
    margin-top: 27px;
    margin-left: 20px;
    .item{
      width: 100%;
      height: 40px!important;
      // border: none;
      background: none;
      outline: none;
      color: #444;
      letter-spacing: 2px;
      font-size: 14px;
      input.ivu-input{
        height: 40px!important;
      }
      &:focus{
        box-shadow: none;
      }
    }
    button{
      width: 100%;
      height: 40px;
      font-size: 16px;
      background: #ff644e;
      border:none;
    }
    .login-form-item{
      height: 40px;
      input{
        height: 40px;
      }
    }
    .login-form{
      position: absolute;
      width:418px;
      height: 434px;
      text-align: center;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: #ffffff;
      padding-top: 15px;
      border-radius: 10px;
      box-shadow: 0px -6px 35px 0px rgba(23, 45, 124, 0.3);
      .ivu-tooltip{
        position: absolute;
        left: 30px;
        top: -2px;
      }
      .login-help{
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        padding: 0!important;
        span{
          margin-top: 0px;
          display: inline-block;
          /* margin-right: 38px; */
          font-size: 12px;
          margin-left: 1px;
          color: #999;
        }
      }
      .login-logo{
        height: 77px;
        width:76px;
        vertical-align: top;
        margin-top: 5px;
      }
      .login-form-title{
        font-size: 24px;
        font-weight: 600;
        border-bottom: none;
        margin-bottom: 30px;
        margin-top: 30px;
        color: #2d81bb;
      }
      .login-form-item{
        height: 40px;
        margin-bottom:24px;
        margin-left: 40px;
        //border-bottom: 1px solid #e5e5e5;
        .login-form-input{
          input{
            width: 100%;
            height: 40px;
            // border: none;
            background: none;
            outline: none;
            color: #444;
            letter-spacing: 2px;
            font-size: 14px;
            &:focus{
              box-shadow: none;
            }
          }
          .ivu-input-group-prepend{
            border: none;
            background-color: transparent;
            color: #a8a8a8;
            font-size: 24px;
            font-weight: bold;
          }
        }
        .ivu-form-item-error-tip{
          left: 22px;
          /* right: 0; */
          top: 34px;
        }
      }
      .login-form-btn{
        /*margin-top: 35px;*/
        .login-form-submit{
          height: 40px;
          //  font-size: 22px;
          border: none;
          outline: none;
          border-radius: 5px;
          box-shadow: 0 1px 10px #8a94b8;
          background: #2d81bb;
          font-size: 16px;
          width:368px;
        }
        .login-form-tips{
          color: #676a6c;
        }
      }
    }
  }

  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height: 40px;
    font-size: 19px;
  }
  .forgetPassword{
    color: #999;
    padding-right: 3%;
    float: right;
    cursor: pointer;
  }
</style>
