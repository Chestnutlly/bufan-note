---
title: js内置对象
date: 2019-02-18 15:53:30
tags:
---

## Date 日期对象，用于获取年月日，程序获取的都是北京时间
```
	var day = date.getDate();
	var hour = date.get.Hours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
```

- 月的范围是0~11
- 获取年份用gteFullYear

## Math对象 - 是静态的，不需要New
- Math.random ()区间是[0~1) 随机数
- 任意区间求随机数Mtath.floor(Math.random()*区间个数+最小数)	
- 天花板函数 Math.ceil();
- 地板函数 Math.floor();
- 求最大值 Math.max();
- x值的y次方 Math.pow(x ,y);



## 逻辑运算符
- && 与
- ||或
- ！ 非



## 基本逻辑判断语句
```
 if(满足的条件){
 alert();
}
 else(满足的条件）{
 alert();
}
  
```
- 如果if后面只有一条语句，那么可以省略大括号，但是不推荐
-三元表达式：
```
 if(3>2){
 consol.log('ok!');
}
 else{
	consol.log('not oh');

}
<!-- 他的三元表达式是： -->
 var rs =3>2?'ok':'not ok!';
 consol.log(rs);
 1
```
- parseInt 把字符串转为整数number类型 
- parseFloat 把字符串转换为小数number类型