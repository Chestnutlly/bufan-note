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
  -  Math.floor(Math.random() *数量+ min) 任意范围的随机数
-  `Math.pow(x,y)`  返回x值的y次方
-  `Math.round(x)` 四舍五入 ,不推荐使用,本身会出错
##  关系运算符
- 关系运算符，得到的结果都是布尔值，也就是说得到的东西要么是true，要么是false
- 在JS中=符号表示赋值！
如果想判断两个东西，是否相等，需要使用符号==,不能用一个等号，来表示等于的关系
- ==不严谨，会将不同类型的东西，转为相同类型进行比较
- != 就是==的反面；   !==就是===的反面
## 逻辑运算符
- && 与（且）都真才真
- ||	或
- !	非
- 连比是错误的.不支持!
## if语句
    if(条件表达式){
    	条件为真的时候做的事情
    }else{
    	条件为假的时候做的事情
    }

- 最后都要执行if结构体后面的语句
- 条件表达式，要么是true、要么是false
- if语句条件分支 用else if
## Switch语句
- Switch语句后面的变量数据类型必须和case后面的数据类型保持一致
- `parseInt('3')` == 3    int 整数类型
- `parseFloat('3.3')` == 3.3 float 浮点类型(小数)
- 果是通过对"枚举类型"的判断,用switch比较清晰

## While循环
- 语法
 -        ` while(条件表达式){`
      当条件表达式结果为true,会一直执行while循环体内的代  码。
       当条件表达式的结果为false，while循环不再执行。
    }
- 一定要有一个跳出条件 
## Do..while循环
- 语法    Do{
     	   循环体;
     }while(条件表达式);
- 先斩后奏
- 在条件不满足的情况下会比while循环多执行一次代码
## for循环
- 语法  for(var i=0; i<=10; i++){
			     循环体代码
    }
- 执行顺序：
 - 首先进行变量初始化，并进行条件判断
 - 如果条件结果为true，那么执行循环体内的代码，然后执行 i++;
 - 判断条件是否为true,继续执行循环体内代码。否则跳出循环
- for循环 是可以嵌套的.内部的变量不能和外部一样
## Break语句
- 一旦break 循环体被结束,当前循环体内部break后面的代码也不再执行.当前循环指的是break语句所在的循环体.
## Continue语句
- Continue语句指的是跳出本次循环，该语句后面的代码不再执行
## 数组
- 通过对象形式创建数组
 - `var arr = new Array();`
- 直接创建空数组 (常用)
 - `var arr2 = [25,33,44,70];`
- 可通过下标赋值 也可以通过下标取值
 - `console.log(arr2);`
 - `console.log('arr[2]==>',arr[2]);`
- 数组的下标是从0开始的
- xx.abc abc是xx的属性;
- xx.def() def是xx的方法;
- 数组里面的值 可以是任意类型.但是最好是同一类数据
- 不要出现下标越界的情况!!
## 数组常用的方法
- concat() 拼接 并不会影响原来的数组
 -     `var arr = [1,2,3];`
       `var arr2 = [4,5,6];`
      `var arr3 = arr.concat(arr2);`
- join() 把数组转换为字符串,默认是,
 - `var arr4 = ['a','b','c'];``console.log(arr4.join(','));`
- split() 把字符串打断为数组
 - `var str = 'it is a fineday today';`
		`var arr5 = str.split(' ');`
- push()   从后面推进去
- unshift()  从数组的前面放入
- pop()    删除最后一个元素
- shift()   删除第一个元素
## 冒泡排序和选择排序
## 函数function
### 函数的声明方法
- 自定义函数 可以先使用,后声明.**平时用的最多**
 -  `say();``function  say(){alert('hello,world!');}`
-  匿名函数  必须先声明,后使用
 -  `var run = function(){alert('Hi  i  am  running...');}``run();`
### 函数注意
- 函数如果不调用是不会执行的
- 函数可以封装一部分功能,解决重复问题
- 学编程  面向对象编程  继承,封装,多态,函数本身就是封装的体现.
- 复杂数据类型 对象类型,数组类型,函数类型.
### 函数的参数
- 函数是可以接受参数的,参数是函数体与外部程序的桥梁.
 - `function add(x,y){alert(x+'+'+y+'='+(x+y));}`//x,y为函数的形参,占位符. `add(3,5);`//3,5为函数的实参.
- 如果实参比形参多,多余的实参 会被忽略.
- 如果形参比实参多,则会出现错误.
- 一般情况下,实参跟形参实一样多的.
- 形参就相当于 函数的局部变量
### 方法的重载
- 如果函数名重复的话,后面会覆盖前面的方法,但是这个在java中是可以被当做两个方法正常使用过的,那么称为方法的重载.
- js中没有方法重载!!!(**面试题**)
### 函数的返回值
- return之后的代码不再执行
- 返回函数的执行结果,可以外部使用
## 函数变量的作用域
- 在window对象里声明的变量,在函数里都可以使用
- 函数内部不能调用其他函数内部的变量
- 在window作用域不能调用函数内部的变量
- script标签可以认为是js的window对象
## 函数递归
- `function jcDg(n){if(n==1){return 1;}return n*jcDg(n-1);}`
- **递归要有跳出条件**
- 不适合很大的数 会造成内存溢出
- 文件的查找要用到递归
## 隐式全局变量
- `age=20;`
- 这是错误的 在严格模式下 会报错
## 匿名函数
-  `;(function(){console.log('hello,world!');})();`
-  如果只需要封装一个代码块  只需要执行一次 不需要变量名 用匿名函数
-  假如一个函数不会被其他地方调用，同时又想让其执行，就使用()()使函数立即执行
##函数作为参数
- 函数体本身也能作为参数传递,这种称之为回调函数(了解)
- 在处理异步的情况的时候比较常见
## JS中的对象 Object
- js有一个Object的顶级对象,所有的对象都是继承自这个对象
- "构造函数对象"一般都是首字母大写
- new出来的对象为该构造函数对象的一个"实例对象"
- 一个字面量形式表示的对象 只有一个大括号,里面是键值对
 - `var zs = {name: '张三',age: 20,sex: '女',}`
##自定义构造函数创造对象
- 在js中,所有的对象都是函数,反过来所有的函数又都是对象
- 如果一个函数用于表示(构造函数)对象,那么首字母必须大写
- 全局的属性都是属于window对象的,但是window对象可以默认省略不写
- 创建一个自定义的构造函数
 - `function User(){this.name = '张三';this.age = 20;}`
## this指针
-  js中,this一般在书写的时候 并不能明确的知道它指向谁,必须当代码运行的时候才能知道
-  **this指向调用者**
 - `new People(); ` People中的this代指被创建的对象实例
## 对象和Json
- 在 JS 语言中，一切都是对象  对象表示为键值对,数据由逗号分隔,花括号保存对象,方括号保存数组.
- JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
 - 对象  `var user = {name:’zhangsan’,age:20}`
 - json  `var user = ‘{“name”:”zhangsan”,”age”:20}`’
-  要实现从对象转换为 JSON 字符串，使用 JSON.stringify() 方法
 -  `var  json = JSON.stringify({name:’zhangsan’,age:20});`
-  要实现从 JSON 转换为对象，使用 JSON.parse() 方法：
 -  `var user = JSON.parse(‘{“name”:”zhangsan”,”age”:20}’);`
## 数组高级API
-  toString()		//把数组转换成字符串，每一项用,分割
-  reverse()	//翻转数组
-  sort();    //给数组排序，返回排序后的数组。如何排序看参数。
-  indexOf()、lastIndexOf()   //如果没找到返回-1
-  slice() //从当前数组中截取一个新的数组，不影响原来的数组，参数start从0开始,end从1开始
 - 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
-  splice()//删除或替换当前数组的某些项目，参数start,deleteCount,options(要替换的项目)
-  清空数组 array = []; 
##  字符串对象的常用方法
- charAt获取相应位置字符
- charCodeAt 返回指定位置的字符的ASCII编码
- indexOf lastindexOf  返回字符在字符串中的位置
- concat() 连接字符串
- slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
- **substr() 常用** substr(起始位置,[取的个数]) 
- toUpperCase() 大写 ;  toLowerCase() 小写
- Math.fixed(); 保留小数位数