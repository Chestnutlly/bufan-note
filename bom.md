## BOM
### browser object model 浏览器对象模型 
- 包括定时器,浏览器滚动监听,浏览器宽高....
- 包括三大家族(offset/scroll/client)和一个事件对象event
### offset家族
- offsetWidth和offsetHight （检测盒子自身宽高+padding+border）
 - offset宽/高  =  盒子自身的宽/高 + padding +border；
-  offsetLeft和offsetTop  （检测距离父盒子有定位的左/上面的距离）
 - 如果父级都没有定位则以body为准
-  offsetParent   （检测父系盒子中带有定位的父盒子节点）
 - 返回该对象的父级 （带有定位）
 - 如果当前元素的父级元素没有进行CSS定位,offsetParent为body
 - 如果当前元素的父级元素中有CSS定位,offsetParent取最近的那个父级元素。
### offsetLeft和style.left区别
- style只能获取行内样式的值
- style获取结果是css样式,单位带px,而 offsetLeft获取的是Number类型
- **offsetWidth 只能获取整数值**
- offsetWidth只读属性,不能赋值;style.width可读写,可以赋值
### 匀速动画
- 原理:盒子的位置 = 盒子本身所在位置+步长
- 案例 焦点图
### 缓动动画
 - **公式:leader = leader +(tardet-leader)/10**
 - 案例 无限轮播
### scroll 家族
- ScrollWidth和scrollHeight
 - 检测盒子的宽高
 - 调用者：节点元素.属性。
 - 盒子内容的宽高。（如果有内容超出了，显示内容的高度）
-  scrollTop和scrollLeft
 - 网页，被浏览器遮挡的头部和左边部分.也就是被卷进去的头部和左边部分
 - scrollLeft 不经常用
- 兼容性问题
 - `document.documentElement.scrollTop`
 -  `window.pageYOffset`
### 获取title、body、head、html标签
- document.title --- 文档标题
- document.head --- 文档的头标签
- document.body --- 文档的body标签
- **document.documentElement --- html** 表示文档的html标签
### scrollTop
- document.documentElement.scrollTop 可以获取或设置一个元素的内容垂直滚动的像素数。
### onscroll事件
- 可以监听浏览器的滚动事件
- 只要页面滚动无论向左向右，向上向下，哪怕只有1px，都会触动这个事件
- 用法:window.onscroll
### window.scrollTo 屏幕跳转
- 可把内容滚动到指定的坐标
- 格式:window.scrollTo(x,y);
