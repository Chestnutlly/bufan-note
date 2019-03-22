## 阴影
- 内阴影 
```
box-shadow: 20px 20px 0 0 blue inset,-20px -20px 0 0 blue inset;
```
## 渐变
- 
```
ackground: linear-gradient(to right,red,orange,yellow,green,#004400,blue,purple);
```
- 兼容写法 兼容谷歌和苹果浏览器 方向不能带 to
```
background: -webket-linear-gradient(left,,red,orange,yellow,green,#004400,blue,purple);)
```
- 镜像渐变 不兼容，必须写私有化前缀
```
background: -webkit-radial-gradient(20% 20%,red,green);
```
## background
- background-size   
    - 百分比的形式  图片也会变形
    - 像素的形式 图片可能会变形
    - content 保证图片内容全部显    示，图片不会变形，会等比缩小
    - cover 图片不变形 的情况下 铺满盒子
- background-origin
    - background-origin(原点，起点)  设置背景定位的原点
    - border-box以边框做为参考原点；
    - padding-box以内边距做为参考原   点；
    - content-box以内容区做为参考     点；
- background-clip
    - background-clip设置背景区域clip(裁切)  
    - border-box裁切边框以内为背景    区 域；
    - padding-box裁切内边距以内为背   景区域；
    - content-box裁切内容区做为背景   区域； 
- background 可以写多个url 实现多背景
## 过度
- transition: all(所有元素) ease(用这个函数) 0.4s（缓动）
- transform变换
    - transform: rotate(角度);
    - transform: translate(x,y)位移
    - transform-origin: center bottom;（旋转点的位置）
## 变换
- 透视 perspective 透视有两种写法
    - 作为属性设置给父类元素，作用于所有的的3D转化的子元素
    - 作为transform 属性的一个值作用于元素自身
- prespective-origin: right bottom;代表视角；
- 3D呈现 transform-style
- flat 默认这些元素在2D平面呈现
- preserve-3D 保留3D空间
- backface-visibility 设置元素背面是否可见
## 动画
- 
```
@keyframes an1{
			0%{
				width: 100px;
				height: 100px;
				background-color: red;
				transform: translateX(0) translateY(0);
			}
			50%{
				width: 200px;
				height: 220px;
				background-color: orange;
				transform: translateX(300px) translateY(300px);
			}
			100%{
				width: 50px;
				height: 100px;
				background-color: pink;
				transform: translateX(600px) translateY(0);		
			}
		}
```
- 通过@keyframes指定动画序列
- 通过百分比将动画的序列分割成多个节点
- 在各节点中分别定义各自的属性
- 通过animate 将动画应用于相应的元素
- 关键属性 
    - animation-name 动画名称
    - animation-duration动画持续的时间
    - animation-timing-function动画函数
    - animation-delay动画延迟
    - animation-iteration-count重复次数
    - animation-direction动画是否重置后在开始播放   
        - alternate从停止的位置开始执行
        - normal 动画第二次直接跳到原始位置开始执行
    - animation-fill-mode动画执行完毕之后的状态
        - forwards 当动画完成后保持最后一个属性值
        - backwards在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
        - both 设置对象状态为动画开始或结束的状态
- 2D旋转补充
    - skew(x,y)沿着x 轴y轴2D旋转
## 动画监听
- xx.addEventListener();
```
d1.addEventListener('transitionend',function () {
			console.log('end...')
		})
```
- animationstart动画开始后触发
- animationiteration 动画重复播放时触发
- animationed 动画完成后触发
- 取消过度效果$`('.swiper').css('transition','none');`
## 字体
- 
```
	@font-face {
	      font-family: 'mzd';
	      src: url('font/mzdzt.ttf');
	    }
         .mzd-box{
	    	font-family: 'mzd';
	    	font-size: 30px;
	    }
```
## 鼠标滚动监听
- window.onmousewheel 鼠标滚轮监听
- wheelDelta 判断鼠标滚动方向 往上滚为正值 往下滚为负值
## 帧动画
- `animation: sec 60s steps(60) infinite both;`只需要把运动方式改为走多少步
## animatecss.css
1. 下载animatecss.css文件，
2. 直接在HTML里面引用
- `$(selector).each(function(index,element))`
- 必需 为每个匹配元素规定运行的函数。
    - index - 选择器的 index 位置
    - element - 当前的元素（也可使用 "this" 选择器）
    ```
    var tags = [];
			$('.box').children().each(function(index,item){
				console.log(index,item);
				if(item.hasAttribute('data-deep')){
					tags.push(item);
				}
			})
    ```