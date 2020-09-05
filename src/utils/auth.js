import wepy from 'wepy'

// 检查是否登录，未登录跳转登录页，抛出异常中断后续操作
export function isLogin() {
  return new Promise((resolve, reject) => {
    let token = wepy.getStorageSync('token');
    if (!token) {
      wepy.navigateTo({
        url: '/pages/login'
      })
      return reject('未登录');
    }
    return resolve('已登录');
  });
}
