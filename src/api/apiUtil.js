/* eslint-disable brace-style */
/**
 * 作者 ：yhzzy
 *
 * 日期 ：2018/06/20
 *
 * 描述 ：api请求组件
 */
import axios from 'axios'
import { Notice } from 'iview'
import {stringify} from 'qs'

//let root;
//let rootUrl;
//if (process.env.NODE_ENV === 'development') {
//  root = process.env.API_HOST;
//  rootUrl = process.env.URL_HOST;
//} else {
//  root = location.host;
//  rootUrl = location.host;
//}
const root = process.env.API_HOST;
const rootUrl = process.env.URL_HOST;

const generateApiMap = (map) => {
  let facade = {}
  _.forEach(map, function (value, key) {
    facade[key] = toMethod(value)
  })
  return facade
}

const toMethod = (options) => {
  options.method = options.method || 'post';
  return (params = {}, attachedParams, config = {}) => {
    params = _.extend(params, attachedParams)
    return sendApiInstance(options.method, options.url, params, config)
  }
}

// 创建axios实例
const createApiInstance = (config = {}) => {
  const _config = {
    withCredentials: true, // 跨域
    baseURL: root
  }
  config = _.merge(_config, config)
  return axios.create(config)
}

const err_check = (code, msg, data) => {
  if (code === 200 || code === 0 || code === '0') {
    return true
  } else if (code === '-1' || code === 1) {
    Notice.warning({
      title: '',
      desc: '验证身份过期，请重新登录',
      duration: 1
    });
    setTimeout(function () {
      window.location.href = rootUrl;
    }, 1000);
  }  else if (code === 404){
    Notice.warning({
      title: '',
      desc: msg,
      duration: 3
    })
  }
  else {
    Notice.warning({
      title: '',
      desc: msg,
      duration: 3
    });
    return false;
  }

 return false
}

const sendApiInstance = (method, url, params, config = {}) => {
  if(!url){
    return
  }
  if (url.indexOf('{id}') !== -1) {
    url = url.replace('{id}', params.id);
  }
  if (url.indexOf('{type}') !== -1) {
    url = url.replace('{type}', params.type);
  }
  if (url.indexOf('{userId}') !== -1) {
    url = url.replace('{userId}', params.userId);
  }
  if (url.indexOf('{resourceId}') !== -1) {
    url = url.replace('{resourceId}', params.resourceId);
  }
  let instance = createApiInstance(config)
  instance.interceptors.request.use(
    config => {
      // 这里写死一个token，你需要在这里取到你设置好的token的值
      // const token = '754fb49bd8274b55a5ecac4eefa73eeb';
      const token = window.sessionStorage.getItem("token")
      if (token) {
        // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
        config.headers.accessToken = token;
      }
      return config
    },
    error => {
      return Promise.reject(error)
    });
  instance.interceptors.response.use(response => {
      let code = response.data.code;
      let msg = response.data.msg;
      let data = response.data.page;

      if (err_check(code, msg, data)) {
        return Promise.resolve(data)
      } else {
        console.log("拒绝");
        return Promise.reject(data)
      }
    },
    error => {
      if (error.response.data.message) {
        Notice.warning({
          title: '',
          desc: '请求服务器出错',
          duration: 5
        });
      } else {
        Notice.warning({
          title: '',
          desc: '请求服务器出错！',
          duration: 5
        });
      }
      return Promise.reject(error).catch(res => {
        console.log(res)
      })
    }
  )
  if (typeof params === Array.isArray([]) && method === 'post') {
    params = {
      params: params
    }
  }
  if (typeof params === 'object' && Object.prototype.toString.call(params) === '[object Array]' && method === 'delete') {
    params = {
      data: params
    }
  }
  if (method === 'post') {
    url = `${url}?${stringify(params)}`;
  }
  if (method === 'get' && !params.ID) {
    params = {
      params: params
    }
  }
  if (params && params.ID) {
    url = url + '/' + params.ID;
  }

  return instance[method](url, params, config)
}

export default {
  generateApiMap
}
