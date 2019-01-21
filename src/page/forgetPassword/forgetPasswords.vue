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
        <FormItem prop="userInfoNamePwd" class="itemContent">
          <Input v-model="formValidate.userInfoNamePwd" placeholder="请输入您的新密码" type="password">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="userInfoNamePwd" class="itemContent">
          <Input v-model="formValidate.userInfoNamePwd" placeholder="请确认新密码" type="password">
          <Icon type="md-lock" slot="prefix"></Icon>
          </Input>
        </FormItem>
        <FormItem  prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入手机号码">
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
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          userInfoNamePwd:''
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
          ],
          userInfoNamePwd: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        }
      }
    },
    created: function () {

    },
    methods:{
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
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
</style>
