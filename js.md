## JS的书写位置 ##
### 内嵌式
    <script type="text/javascript">
    alert('今天是个好天气');
    </script>
- 位置都必须在最后,head的最后或者body的最后
### 外链式
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="js/main.js">
    </script>
## JS常用输出内容
- confirm() 在页面弹出一个对话框,经常与if一起使用.返回了两种状态,true/false,类型为布尔类型

        if(confirm('你确定要走?')){
    			alert('你走吧,永远不要回来!');
    		}else{
    			alert('咱们结婚吧!');
    }
- console.log() 将信息输入到控制台,常用在js调试,以后经常会用到.
- document.write()在页面输出消息  几乎不用
- alert()  在页面弹出一个对话框
## JS注释
- Ctrl+shift+/   //单行 或者  /*  */多行
## 变量 用来存储数据的容器
- 变量的命名规范
 - 不能以数字或者纯数字开头来定义变量名
 - 不能使用中文定义变量名
 - 不能使用特殊符号(除了_和$)
 - 不能使用关键字和保留字定义,关键词不是绝对性词汇
 - 在JS中严格区分大小写!
- 用var声明 名称随便起
## 变量 用来存储数据的容器
- Number   数字类型 包含正数  负数  小数
 -  `Var   age = 20`
-  String 字符串类型 
 - `var  name = ‘张三’;` 
- Boolean 布尔数据类型
 - 只有2个值一个是true, 一个是false
 - `var sex = true; `
-  undefined    变量未初始化
 - 定义了变量，没有给变量赋值
 - `var bak; `
- null  变量未引用  值为空
 - `var say=null;`
## 	判断数据类型 typeof
## 	比较运算符 是布尔类型运算符
- <  >   <=  >=   ==  !=
 - 一个= 是赋值运算
符，==才是比较运算符
- === 恒等于 首先判断数据类型,再判断数值
- 尽量避免两种不同类型的进行比较
## 	算术运算符 
- +加号
 - 字符串＋num 拼接为字符串类型 1+'4'='14'
 - 字符串＋字符串, 拼接为字符串,拼接用的最多
- 减号
 - num-字符串类型数字,结果为num类型,'4'-'1'=3
 - 字符串类型number-字符串类型number,结果为number
 - num-字符串(非number),结果为NaN,是一个数字类型 
- 0作为除数的时候,结果为Infinity,结果为无限大,是一个数字类型
- 在任何时候,如果要使用一个变量,必须先声明变量
- 变量名称不可冲突
- num2=num2+2 可简写为:num+=2;a=a+b简写为a+=b;
- a++ 先使用,再++; ++a 先执行++,再使用a 
## Date对象
- `Date();`返回当前时间日期
- `getDate();`返回一个月中的某一天
- `getMonth();`返回月份 取值范围0-11
- `getFullYear();`返回年
- `getHours();`返回小时
- `getMinutes();`返回分钟部分
- `getSeconds();`返回秒数
- `getday();`返回一周中的某一天(返回值是0-6之间的一个整数)
## 接口API 
- 希望用户调用的方法
## Math对象
- `Math.ceil();`   天花板函数 向上取整.
 - `console.log(Math.ceil(2.1)); //3`
- `Math.floor();`  地板函数 向下取整.
 - `console.log(Math.floor(2.1)); //2`
- `Math.max(x,y);` 求最大值
- `Math.min(x,y);` 求最小值
- `Math.random(); ` 伪随机 范围[0,1)
 - Math.floor(Math.random() *数量+ min) 任意范围的随机数