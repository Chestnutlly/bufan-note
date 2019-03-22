---
title: js补充
---
# js补充
## 代码为什么要压缩
+ 不论js/css/html都可以被压缩,体积会减小. 空格 回车 注释等无效字符都会被去掉
+ 体积小,网络加载速度快
+ js代码的引擎解析速度快
+ 相对安全.前端的页面基本上是，所见即所得.
+ js混淆 一般是没有办法反编译的. 
## 代码怎么压缩
+ 在网上找到压缩代码的工具
+ 后期会介绍一些工具 帮助我们压缩代码,比如gulp,比如webpack等.
## arguments
+ 伪数组，通过domapi获取dom元素的时候得到的也是伪数组，取第一个元素可以得到。
+ arguments.length;  返回的是实参的个数。    
    - 但是这个对象有讲究，他只在正在使用的函数内使用
        ```
            <script>
                //可以用来实现n个值累加，当然还有es6的新方法 比如不定参数。
                //arguments对象，是伪数组，长度定，这样累加函数的人时候可以传入多个参数放入数组中进行求和。
                //后期学了面向对象可以通过instanceof判断arguments对象的数据类型。
                var sum = 0;
                function add(){
                    for(i=0;i<arguments.length;i++){
                        sum += arguments[i];
                    }
                    return sum;
                }
                alert(add(5,6,8,9));
            
            </script>
        ```
+ arguments.calle;  返回的是正在执行的函数。 也是在函数体内使用。 在使用函数递归调用时推荐使用arguments.callee代替函数名本身.
```
    <script>
		// 1. 斐波那契数列
		// 1 1 2  3  5  8  13 ...
		function fb(n){
			// arguments.callee 指的就是函数本身
			// 2. 递归函数必须有跳出条件
			if(n==1 || n==2){
				return 1;
			}
			return arguments.callee(n-1)+arguments.callee(n-2);
		}

		alert(fb(7));

		function  say(){
			console.log('this is  a  test method ...');
			// 函数如果直接被打印 不会执行,必须加上() 才能执行
			console.log(arguments.callee);
			console.log(say);
		}
		say();
    </script>
```
## 立即执行函数
+ 格式
```
        //注意前面的分号和后面的括号。
        //这样立即执行的函数无需再声明一个变量。
        ;(function say(){
			// alert('hello!');
			console.log('hello');
		})();

```
+ 应用，用于循环绑定事件
```
//监听页面dom元素加载完毕后执行
//因为js写在了li的前面，所以在找节点的时候还没有把后面的li加载出来。需要这一句让所有的页面元素加载出来.
window.onload = function(){
	var ulEl = document.getElementsByClassName('ul')[0];
	//给每一个li绑定事件 使其点击后 追加当前时间
	var lis = ulEl.children;
	for(var i = 0 ; i < lis.length ; i ++){
		//如果等for循环执行完毕,点击事件并没有被执行
		// 当执行点击事件的时候 i已经被变为6
		// 处理方式1: 
		// lis[i].index = i;
		// lis[i].onclick = function(){
		// 	console.log(this.index);
		// }
		// 立即执行函数是可传参的
		lis[i].onclick = (function(a){
			return function(){
				// 实际是一种"闭包"的写法
				console.log('立即执行函数形式: ',a);
			}
		})(i); //实参
	}
	alert(i);
}
```
## 绑定监听
+ 一个对象 只能通过 onclick绑定一个事件
+ xx.addEventListener(type,listener,iscapture]);绑定监听事件，这样的话可以给一个对象绑定很多的事件，并且所有的事件都可以发生，不会被下面的事件覆盖掉。第一个参数是事件名称，注意要去掉on，例如onclick要写成click。第二个参数为回调函数。第三个参数为:是否捕获执行 默认false。
## 冒泡与捕获
+ 默认onclick绑定的事件是从内往外,称之为冒泡执行，就是如果是两个嵌套的事件，则事件从里到外开始执行。
+ 这时在绑定事件时使用xx.addEventListener(type,listener,iscapture]);通过改变第三个参数为true来改变事件的触发顺序，改为由外而内。
```
    <body>
    //这样的话，在点击box2的时候先弹出this is box1，再弹出this is  box2。
	<div class="box">box1
		<div class="inner-box">box2</div>
	</div>
	<script>
		var box1 = document.getElementsByClassName('box')[0];
		var innerBox = document.getElementsByClassName('inner-box')[0];
        //第三个参数改为true
		box1.addEventListener('click', function(){
			alert('this is box1');
		},true)
		innerBox.addEventListener('click', function(){
			alert('this is  box2');
		},true)
	</script>
    </body>

```
## 事件的注销
+ xx.removeEventListener(type,listener,iscapture);参数和addEventListener一样。
+ 如果同一个监听事件分别为“事件捕获”和“事件冒泡”注册了一次，一共两次，这两次事件需要分别移除。两者不会互相干扰。
+ 移除的事件必须为外部事件；
## 兼容性
+ ie8是用xx.attachEvent(type, listener);这时事件的名称需要把on加上。
```
        //添加事件
        btn1.onclick = function () {
			// 兼容写法: 先判断有没有事件
			if(d1.attachEvent){
				d1.attachEvent('onclick',say);
			}else{
				d1.addEventListener('click',say,false);
			}
		}
		//取消事件
		btn2.onclick = function(){
			if(d1.detachEvent){
				d1.detachEvent('onclick',say); 
			}else{
				d1.removeEventListener('click',say,false);
			}
			
		}
```
## 计时器
+ 延迟执行 setTimeout()单位是毫秒； 
```
        // 1.延迟执行
        //这是一个嵌套，就是在网页打开3000毫秒后adsEl弹出，弹出5000毫秒后再关闭。
		timer2 = setTimeout(function(){
			//显示
			adsEl.style.display = 'block';
			timer = setTimeout(function(){
				// 隐藏
				adsEl.style.display = 'none';
			},5000)
		},3000);
```
+ 清除定时器 clearTimeout();
```
        btn1.onclick = function(){
			//清除定时器
			clearTimeout(timer);
			console.log('已清除...');
		}

```
+ 循环执行 setInterval()
```
        //就是1000执行一次函数
        setInterval(function(){
            ...
		},1000);

```
+ 清除 clearInterval()




