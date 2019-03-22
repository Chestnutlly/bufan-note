---
title: html+css基础
date: 2019-02-18 15:53:30
tags: 011
---
## Html CSS知识点总结
## html 基础知识
- Head 												面的标签不会在页面中显示，只是辅助浏览器解析使用。
- Mate 用于设置网页的元数据
- Title 用于设置页面显示的标题，在浏览器的选项卡头部显	 示，可能对seo有帮助
- H1~h6标签为标题标签，且每个程序只允许出现一个h1标签 .h标签不能嵌套。
- P标签为段落标签，注意p 标签不能嵌套p标签和h标签，
- a标签为超链接标签：target=self(默认) blank top parent  a 标签不会继承父类的颜色。
- 清除a标签下面的下划线 text-decoration:none;
- 文本居中方式：text-align;center
- iframe 画中画src 内容的链接 widht heigth - 显示的宽和高 frameborder=0去掉默认边框。
- img插入图片的标签：路径分为网络绝对路径，本地绝对路径 同级路径 上级路径wigth height 分别为图片的长和宽，单位是像素
- 列表标签:ul li 无序列表 ol li 有序列表 dl dt dd 自定义列表
- 清除列表的默认边框 list-style:none;
- 段落标签：br 换行 hr下划线换行 
- 字体标签：em 字体倾斜 strong 字体加粗 i字体倾斜 b 字体加粗 sup上标 sub 下标

## 列表内容
  - 列表的使用:列表内容必须放在form内， name 是表单特有的属性：
- input: 单行文本输入框，输入类型由type决定，input属性还有name value id 其中比特殊的标签有readonly(只读)  disabled(不可用)  hidden(用户看不见但是后台需要获取的内容)
- 输入文字以及数字type类型为text,
- 单项选择type类型为radio，
- 多选时type类型为checkbox,
- 下拉框用标签：select option
- 文本框标签用textaera   cols rows :设置文本框几行几列
- fieldset  legend 可以实现表单的分组。
- Type=file 上传，当选中时实际文件并没有被选上来。
- 提交方式属性为sumbit
- 重置属性为reset
- border: none; 去掉默认边框
- outline: none;去掉input输入框获取焦点默认边框
- Label 用于包括输入框的头部和输入框，使之成为一体，多用于单选和多选。
这几标签都要有name属性和value 属性，方便反馈后台的内容。

## 表格标签：
- Table 它里面的属性有 bgcolor（背景颜色） cellspacing（单元格间距） - cellpadding（字体和单元格之间的间距） align（表格位置）border(边框加粗)
- Rowspan用于合并行类单元格
- Colspan 用于合并列单元格
- Tr表示表格的一行，属性有bgcolor 
- Th表示表头
- Td表示表内数据
## CSS书写样式
- 行内样式
` { <p > style=” color=red”} `
严重耦合，用的非常少。
	- 内部样式
	`style p{ color=”red” }/style
	`测试时使用，
	- 引入样式`<link rel=stylesheet href=” style.css”>`开发使用

## 选择器：
	- 标签选择器：p { color
```
Font-size=””
}
	Class选择器 .h2{
				Color:
}
	Id选择器：#h2{
				Color:
}
交集选择器 .p1 .p2{

}
并集选择器 .p1 , .p2{

}
后代选择器 .p1 a{

}
```
## css的单位
- Px 像素单位
- Em 相当于当前字体的倍数  text-indent 缩进几个字体
- 背景颜色：bgc rgb( 0, 0, 255 )十六进制，三位分别表示红 绿 蓝
			bgc rgba( 0, 0, 255 .5)最后一位表示透明度区间为0~1，不会改变内容的透明度
			opacity:0.5; 单独使用，也表示透明度，改变整体盒子的透明度。

## 常用属性：
- widht /height 块状元素的宽和高；
  - Background-color:背景颜色
   - Color:字体颜色
- Font-size:字体大小
- Text-aligen :文字对齐方式
- Text-indent：首行缩进
- Font-family:字体
- Font-weight:字体加粗区间为100-900（bolder lighter normal）
- Font-style: ltalic 斜体/normal 正常
- Line-hight：行高 单位px /倍数/百分比 设置文字的行间距
	- 单行文字垂直居中：行高=父类盒子高度
- Font：缩写 font: italic bolder 20px/1.2 arial

## 背景图片：
- background-color: 背景图片颜色
- background-image: 背景图片 url(‘1.png’);
- background-repeat: 平铺方式 repeat | no-repeat | repeat-x | repeat-y
- background-position: 图片位置 left | right | top | bottom | center
- background-attachment: 背景滚动 scroll/fixed (注意：基于body的定位）background ：简写 background: green url(1.jpg) no-repeat center fixed;
- background-size: 100% auto;用于控制背景图片的宽和高
- html,body{
			width: 100%;
			height: 100%;
		}   这种写法能使body占据整个屏幕

## 标签的表现形式

- 块状标签：宽高有效，不可以在同一行显示，比如：diiv ul ol li dl dt dd p h1-h6 form table hr br 
- 行内块标签：宽高有效，可以在同一行显示 比如：input select img button 
- 行内标签：同一行显示，宽高无效 比如：a 以及字体标签。
## 盒子模型
- 一个盒子由四部分组成，：padding 内边距 border 边框 margin盒子与盒子之间的距离 ，外边距 content 内容
- Padding:
- Padding: 10px 20px 30px 40px ,这样会设置元素的上 右下 左 四个方向的内边距
- Padding 10px 23px 30px 分别指上 左右 和下，四个边距
- Padding 10px 20px 分别指上下 和左右四个边距
- Padding 10px 分别指上下左右四个边距
- 同时还有padding-top padding-leftpadding-right padding-bottom 表示四个边距
- Marign 用法和padding相同
- Marign :xxx auto; 可以使块状元素居中。
- 盒子嵌套出现的问题：给子类盒子设置marign的时候会造成嵌套崩塌，子类的margin-top没有-效果，直接作用到父类盒子 ：解决方案：父类overflow：hidding或者父类设置极小的padding
- 如果垂直两个块状元素同时设置了margin-top和marign- bottom，那么这两个值不会叠加，那个值大用哪个。
- Border：可以在元素周围创建边框 border：1px solid red 分别指定了边框的宽度 样式 颜色 boder-style：none dashed dotted solid double   可以单独设置某一条边框例如 border-right：……
- Padding 影响盒子的大小
；元素性质的改变可以通过display来改变
- Visibility 和display-none不同 前者隐藏后仍然占据原来的位置
- Overflow 相关标签里面的内容超出了盒子的范围后处理方式：-visible{默认可见} scroll(强制添加滚动条) -auto（根据需要添加滚动条）-hidden（隐藏超出盒子的内容）

## 浮动
- 块级元素和行内元素都可以浮动，当一个行内元素浮动以后将会自动变为一个块级元素，当一个块级元素浮动以后，宽度会默认被内容撑开，所以当漂浮一个块级元素时我们都会为其指定一个宽度。 当一个元素浮动以后，其下方的元素会上移。元素中的内容将会围绕在元素的周围，元素浮动以后即完全脱离文档流，这时不会再影响父元素的高度。也就是浮动元素不会撑开父元素。浮动元素默认会变为块元素，即使设置display:inline以后其依然是个块元素。
如果子类元素设置了浮动，而父类元素没有设置高度，或者高度比子类元素小，那么子类元素脱离了文档流，就无法把父类盒子撑开。那么整个文档的结构将受到破快。清除浮动的影响： clear: left/right/both 不允许当前元素的left/right/both有浮动元素。在浮动元素的最后面追加一个空的div,设置clear:both即可清除浮动的影响。
- 一般只是用左浮动，因为float-right会改变标签的前后顺序。
- 一旦子类发生了浮动 父类盒子不需要写高度 

## 定位
- Postion 
- Relitive 相对定位。相对定位相对于元素本身的位置定位，开启相对定位以后，可以使用top -right bottom left 四个属性对元素进行定位。相对定位不会改变元素原来的特性，但是会使元素层级提升，使其可以覆盖其他元素。
- Absolute 绝对定位，指元素相对于其他元素的定位，他会是元素脱离原来的文本流，
- Fixed 固定定位，相对boday页面定位，页面滚动页面不会随着移动

- z-index 设置元素的堆叠顺序，拥有更高的堆叠顺序的元素总是位于前面，z-index 仅能在定位元素上奏效。例如{position:absolute} 他的值不限制，没有单位。
- border-radius: 50%; 盒子边角变圆。
- cursor: pointer;指针形状改变（pointer（小手）  move（坐标箭头）  help（箭头加问号）  default（默认））
- text-indent：0；恢复缩进
- display:none; 隐藏 display:block; 显示
- text-aliign 可以对文本 行内块 多个行内块进行居中，但是会有一个空格的偏移，清除这个偏移就在父类盒子写font-size=0;清除空格。
- Background-position坐标：是基于规定区域左上角的位置，横向为纵向为Y ，如果只写一个数字，起作用。默认y轴居中，  
- 当一个标签设置了两个class属性，为了增加权重可以用交集选择器。



