import wepy from 'wepy';
import tip from './tip'

const base_url = 'http://localhost:3000'

/**
param = {
  url: '',
  header: {},
  method: '',
  data: {},
  loading: false,
}
 */
export default async (param) => {
  // 添加token请求头
  let header =  { 'Content-Type': 'application/json' }
  let token = wepy.getStorageSync('token');
  if (token) {
    header.Authorization = 'Bearer ' + token
  }
  if (param.header) {
    header = {...header, ...param.header}
  }
  // 加载效果
  if (param.loading) {
    tip.loading(param.loading);
  }
  // 发起请求
  let response = await wepy.request({
      url: base_url + param.url,
      method: param.method || 'GET',
      data: param.data,
      header: header,
  })
  if (param.loading) {
    tip.loaded();
  }
  // 响应数据
  const res = response.data
  if (res.code !== 0) {
    tip.toast(res.msg || '请求失败，请重试')
    // 401清除登录信息
    if (res.code === 401) {
      wepy.removeStorageSync('token')
    }
    // 抛出异常，阻止调用者继续执行，调用者可通过.catch抓取该异常后继续执行
    return Promise.reject(res);
  }
  return res;
};

