export function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep; //20160614134947
}

//验证是否是手机号码
export function validPhone(number) {
  let flag = false;
  let myreg = /^1[345678]{1}\d{9}$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}

//浮点型转换最终结果
export function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}

// 去除字符串所有空格
export function sTrim(text) {
  return text.replace(/\s/ig, '')
}

export function sleep(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

//订单倒计时
export function orderTime(endtime) {
  var downTime = parseInt(new Date(endtime.replace(/-/g, "/")).getTime() - new Date().getTime());
  var d = parseInt(downTime / 1000 / 3600 / 24);
  var h = parseInt(downTime / 1000 / 3600 % 24);
  var m = parseInt(downTime / 1000 / 60 % 60);
  var s = parseInt(downTime / 1000 % 60);
  d < 10 ? d = '0' + d : d;
  h < 10 ? h = '0' + h : h;
  m < 10 ? m = '0' + m : m;
  s < 10 ? s = '0' + s : s;

  var timeValue = {
    day: d,
    hour: h,
    minute: m,
    second: s,
  }

  return timeValue;
}
