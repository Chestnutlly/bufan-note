---
title: HTML5
---
## Html5
- 结构化语义化的标签
    - scetion表示页面中的一个内容区块，比如章节，页眉，页脚，或者页面的其他部分，可以和h1 h2 等结合起来使用，表示文档结构
    - article 表示页面中与上下不想关的独立内容，比如一篇文章
    - aside 表示article元素内容之外的、与article元素内容相关的辅助信息
    - header元素 表示页面中一个内容区块或真个页面的标题
    - hgroup元素 表示对整个页面或页面中的一个内容区块的标题进行组合
    - fotter元素 表示整个页面或页面中一个内容区块的脚注。一般来说，他会包含创作者的姓名、创作日期以及创作者的联系信息
    - nav元素 表示页面中导航链接的部分。
    - figure元素 表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元。
## seo优化
- 带后台，伪静态
- 优化标题关键词
- h1标签权重很高，logo权重很高
- 流量 ，内链，外链
- 经常更新内容
- 原创作品
## 新增全局属性
- contentEditable 单独某一个标签的属性，可以使内容能被编辑
```
<div class="d1" contentEditable>
		
	</div>
```
```
<script>
 	// 全局页面都可以被编辑
 	document.designMode ='on';

 </script>
```
## 兼容处理
- CSS hack
```
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
	<!-- gte greeter than equal -->
	<!--[if lte IE 8]> <link rel="stylesheet" href="ie8.css"> <![endif]-->
	<!-- 因为在ie8不能识别html5 的新标签比如section aside  header nav ..,
	需要依赖 html5shiv.min.js把所有的标签转换为div-->
	<!--[if lte IE 8]> <script src="html5shiv.min.js"></script> <![endif]-->
</head>

```
## 表单的新增属性
- email 输入email格式
`邮箱:<input type="email">`
- tel 手机号码
- url 网址，只能输入url格式
- number 只能输入数字
- search 搜索框
- range 范围滚动条
- color 拾色器
- time时间
- date日期
- month 月份
- week 星期
- datelist 数据列表，自动补全，与input 配合使用
`性别: <input type="text" list="data">`
- placeholder 占位符
- autofocus 获取焦点
- multiple 文件上传多选或者多个邮箱地址
## 多媒体
- 音频 <audio src="音频路径"></audio>
    - autoplay 自动播放
    - controls 是否显示默认播放控件
    - loop 循环播放
    - preload 预加载
- 视频 <video src="视频路径"></video>
## dom扩展
- 新增选择器 document.querySelector('参数是css选择器参数')，选择选中的第一个;
- document.querySelectorAll('')选择多个
## 类名操作
- node.classList.add('class')添加class对应的名
- node.classList.remove('')移除class
- node.classList.toggle('')切换class，有则移除，无则添加
- node.classList.contains('')检测是否存在class
## 自定义属性
- data-color = "blue";
`<button data-color="blue" data-text="今天郑州天气晴朗万里无云" class="btn news">新闻</button>`
## 圆角
- border-top-right-radius: 4px; 
## CSS3新增选择器 属性选择器
- 属性选择器是补充作用，一般用[];
```
.p1[title="p-1"]{
			color: blue;
		}
        //p开头的都选中
        .p1[title^="p"]{
			color: blue;
		}
<body>
<p class="p1" title="p-1">这是p1</p>
</body>
```
## 伪类选择器
- E:first-child第一个子元素
- E:last-child最后一个子元素
- E:nth-child(n) 第n个子元素
- E:nth-last-child(n) 同E:nth-child(n) 相似，只是倒着计算；
- 重点通过E来确定元素的父元素，多用于ul列表 ul>li:first-child{};
## 锚点
- 
```
<head>
/*当li的锚点被触发时候的样式*/
li:target{
			font-size: 30px;
			color: blue;
		}
</head>
<body>
<a href="#li3">点我</a>
</body>
```
## 伪标签
- 相当于在盒子的前后加了一个内容，任何一个标签都具有伪标签
```
.d1::before{
			content: '你好';
			color: pink;
			font-size: 30px;
		}
.d1::after{
			content: '你好';
			color: pink;
			font-size: 30px;
		}
        <body>
        <div class = "d1"></div>
        </body>
```
## 文本伪标签
- .p1::first-letter 选中文本第一个字
- .p1::first-line 选中文本的第一行
- .p1::selection 选中文本被鼠标选择的部分
## 透明度
- opacity 内容也透明
- rgba(0,0,0,.3)内容不透明
- transparent 完全透明
## 阴影
- text-shadow: -10px 10px 10px red,（X轴位移，Y轴位移，模糊度，颜色）
- box-shadow: 20px 20px 50px -10px red；（X轴位移，Y轴位移，模糊度，扩散半径，颜色）
## CSS3盒子模型
- box-sizing: border-box；添加之后padding 和 border 不会影响盒子大小
## 新增API，多媒体
- 方法：
	- load()加载
	- play() 播放
	- pause() 暂停
- 属性
	- currentTime 视频播放的当前进度
	- duration 视频的总时间
	- paused 视频播放的状态
- 事件
	- oncanplay: 事件在用户开始播放音频视频时开始播放
	- ontimeupdate: 通过该事件来报告当前的播放进度
	- onended: 视频播放完时触发
- 全屏
	- video.webkitRequestFullScreen();
## 拖拽
- 先设置元素是否可以拖拽
	- `draggable="true"`
- 拖拽元素
	- ondrag 应用于拖拽元素，整个拖拽过程都会调用
	- ondragstart 应用于拖拽元素，当拖拽开始时调用
	- ondragleave	应用于拖拽元素，当鼠标离开拖拽元素时调用
	- ondragend	应用于拖拽元素，当拖拽结束时调用
- 目标元素
	- ondragenter	应用于目标元素，当拖拽元素进入时调用
	- ondragover	应用于目标元素，当停留在目标元素上时调用
	- ondrop   应用于目标元素，当在目标元素上松开鼠标时调用
	- ondragleave	应用于目标元素，当鼠标离开目标元素时调用
## web存储
- sessionStorage 暂时存储 存储空间5M window.sessionStorage
- localStorage 长期存储 存储空间20M window.localStorage
- 都是智能存储字符串
- 方法
	- setItem(key, value) 设置存储内容
	- getItem(key) 读取存储内容
	- removeItem(key) 删除键值为key的存储内容
	- clear() 清空所有存储内容
	- key(n) 以索引值来获取存储内容
## 全屏
- 开启全屏
	- requestFullscreen() 开启全屏显示
	- exitFullscreen () 关闭全屏显示
```
if (document.exitFullscreen) {
          document.exitFullscreen();
      }
      else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      }
      else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      }
```
- 检测当前是否处于全屏 ⦁	通过document.fullScreen检测当前是否处于全屏
```
function fullscreen() {
        return document.fullscreen ||
               document.webkitIsFullScreen ||
               document.mozFullScreen ||
               false;
    }
```
- 全屏伪类
```
:full-screen .box {}、:-webkit-full-screen {}、:moz-full-screen {}
```
## onmouseenter&onmouseleave与onmouseover&onmouseout的区别
- onmouseenter&onmouseleave只要穿过一次内部元素都会触发事件
- onmouseover&onmouseout的区别穿过内部元素不会触发事件
## append 
- 注意插入元素时会删除原来的元素
-  autocomplete = "off" 表单是否允许自动填充 
