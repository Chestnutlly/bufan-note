---
title: js基础笔记
date: 2019-02-18 15:53:30
tags:
---

# js基础

## js组成
- 内嵌式（测试时用的比较多）
- 外链式（开发时使用）



## 基本输出语句
- alert（） 弹窗，括号里面输入的是字符串类型的所以必须加引号，可以是单引号也可以是
双引号，每一行语句结束必须写分号
- 字符串内部的双引号必须用转义字符来转义，
 '
document.write('欢迎来到\"中国\"河南！');
 '
- confirm 返回是布尔类型的数据 true/false
- console.log 打印 调试代码用的，开发时用得比较多
- prompt 文本输入的语句
- document.write 浏览器输出



## 变量
- 变量是用var声明的，赋值符号用=，严格区分大小写



## 数据类型
- String 字符串
- Number 数字
- Boolean 布尔类型
- Undefined 未定义-(声明了变量但是没有赋值)
- Null  Null



## 判断数据类型
- typeof可以判断基本数据类型

`console.log(typeof 变量)`

