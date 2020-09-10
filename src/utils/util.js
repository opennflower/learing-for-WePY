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

//对于价格输入框---限制最多只能保留两位小数点---返回的是一个输入长度
export function intPriceUtil(price) {
  let maxlength = price.indexOf('.') + 3;
  if(maxlength==2){
    return 50
  }else{
    return maxlength;
  }
}

export function unitConvert(num) {
  if(num<10000){
    return num;
  }
  var moneyUnits = ["", "万", "亿", "万亿"]
  var dividend = 10000;
  var curentNum = num;
  //转换数字
  var curentUnit = moneyUnits[0];
  //转换单位
  for (var i = 0; i <4; i++) {
      curentUnit = moneyUnits[i]
      if(strNumSize(curentNum)<5){
          break;
      }
      curentNum = curentNum / dividend
  }
  var m = {num: 0, unit: ""}
  m.num = curentNum.toFixed(2)
  m.unit = curentUnit;
  var string = m.num+m.unit;
  return string;
}

function strNumSize(tempNum){
  var stringNum = tempNum.toString()
  var index = stringNum.indexOf(".")
  var newNum = stringNum;
  if(index!=-1){
      newNum = stringNum.substring(0,index)
  }
  return newNum.length
}


// 金额添加千分位,三位隔开
export function formatCurrency(num) {
  if (num) {
      //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
      num = num.toString().replace(/\$|\,/g, '');
      //如果num不是数字，则将num置0，并返回
      if ('' == num || isNaN(num)) {
          return '0.00';
      }
      // num = parseInt(parseFloat(num) * 100) / 100;  // 精度丢失，此方法不能用
      // num = num.toFixed(2).toString();
      //如果num是负数，则获取她的符号
      var sign = '';
      if (num.indexOf("-") > (-1)) {
          sign = '-';
          num = num.substr(1);
      }
      var cents = '';
      if (num.indexOf('.') > 0) {
          //如果存在小数点，则获取数字的小数部分
          cents = (num.indexOf(".") > 0 ? num.substr(num.indexOf("."), 3) + '00' : '').substr(0, 3);
          cents = cents.length > 1 ? cents : '';//注意：这里如果是使用change方法不断的调用，小数是输入不了的
          //获取数字的整数数部分
          num = num.substring(0, (num.indexOf(".")));
      }
      //如果没有小数点，整数部分不能以0开头
      if ('' == cents) {
          if (num.length > 1 && '0' == num.substr(0, 1)) {
              return 'Not a Number ! ';
          }
      }
      //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
      else {
          if (num.length > 1 && '0' == num.substr(0, 1)) {
              return 'Not a Number ! ';
          }
      }
      //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
      /*
       也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
       字符串长度为0/1/2/3时都不用添加
       字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
       */
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      }
      //将数据（符号、整数部分、小数部分）整体组合返回
      return (sign + num + cents);
  } else {
      return '0.00';
  }
}
