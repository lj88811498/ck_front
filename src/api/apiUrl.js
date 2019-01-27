/* eslint-disable standard/object-curly-even-spacing */
/**
 * 作者 ：yhzzy
 *
 * 日期 ：2018/06/20
 *
 * 描述 ：api请求地址
 */
export default {
  // 登录
  login: { url: '/userInfo/login', method: 'post' },

  // 注册
  register: { url: '/userInfo/add', method: 'post' },

  // 我的团队
  myGroup: {url: '/userInfo/myGroup', method: 'get'},

  // 修改密码
  changePwd: { url: '/userInfo/changePwd', method: 'post' },

  //基本信息
  baseInfo: { url: '/userInfo/detail', method: 'get' },

  //修改基本信息
  updateBaseInfo: { url: '/userInfo/update', method: 'post' },

  //客服
  customerServiceNumbers: { url: '/userInfo/customerServiceNumbers', method: 'get'},

  //商家信息
  getMerchants: { url: '/userInfo/getMerchants', method: 'get'},

  //申请升级
  addUpGrade: { url: '/upgrade/add', method: 'post'},

  //忘记密码
  forgetPwd: { url: '/userInfo/forgetPwd', method: 'post'},

  //退出账户
  logout: { url: '/userInfo/logout', method: 'post'},

  //审核升级列表详情
  orderList: { url: '/upgrade/orderList', method: 'get'},

  //审核升级
  auditEscalation: { url: '/upgrade/auditEscalation', method: 'post'},

  //历史订单
  historicalOrder: { url: '/upgrade/historicalOrder', method: 'get'},

  //人数统计
  auditorTotal: { url: '/upgrade/auditorTotal', method: 'get'}

}
