# DOM操作
## DOM
- 负责页面节点的增删改查操作
- 元素都是dom节点
## dom元素和节点的区别
- 页面中所有的标签都是dom元素
- node节点
 - 页面中所有的标签都是node节点
 - 标签的文本内容也是node节点
 - 标签的换行 回车 也是节点
 - 标签的属性也是节点
 - 标签的注释 也是节点
## DOM节点的获得
- document.getElementById("demo"); 这是最准确的
- document.getElementsByTagName("div"); 无法定位元素
- document.getElementsByClassName("a"); 最常用,但在IE有兼容性问题.
- 节点的访问关系,是以属性的方式存在的
## class选择器的问题
- 一般在ie8里会存在很多兼容问题, 需要兼容处理(写两套代码)
- 在ie8不支持getElementsByClassName
- 在ie8不支持console这个对象
## 父节点
- 调用者就是节点。一个节点只有一个父节点
- 调用方式就是节点.parentNode.
- 
## 兄弟节点
- nextSibling：调用者是节点。（存在浏览器兼容问题）
 - IE678中指下一个元素节点（标签、注释）。在火狐谷歌IE9+(标准)以后都指的是下一个节点（包括空文档和换行节点）
-  **nextElementSibling** 在火狐谷歌IE9都指的是下一个元素节点
-  兼容写法：nextEle =节点.nextElementSibling || 节点.nextSibling **顺序不能变**
-  previousSibling和previousElementSiblin 使用方法相同 表示前一个元素节点
## 单个子节点
- firstChild：调用者是父节点,IE678中指第一个子元素节点（标签）。在火狐谷歌IE9+以后都指的是第一个节点（包括空文档和换行节点）。
- **firstElementChild:**在火狐谷歌IE9都指的第一个元素节点。
- 兼容写法 `var li1 = ulEl.firstElementChild || ulEl.firstChild;`
- lastChild ,lastElementChild 使用方法相同
## 所有子节点
- childNodes 是标准属性,返回指定元素的子元素集合 包括HTML节点，所有属性，文本节点
 - nodeType  ==  1  表示的是元素节点,**元素就是标签**
 - nodeType  ==  2  表示是属性节点
 - nodeType  ==  3  是文本节点
 - nodeType = 8   注释
- children: 非标准属性,它返回指定元素的子元素集合
## 封装好的兼容ie8和标准浏览器的获取孩子节点的方法
    function myChildren (pNode) {
			var children = pNode.children;
			var rs = [];
			for(var i = 0 ; i < children.length ; i++){
				//过滤元素节点
				if(children[i].nodeType == 1){
					rs.push(children[i]);
				}
			}
			return rs;
		}
## DOM节点操作
- 节点的访问关系都是属性
- 节点的操作都是函数或者方法
## 创建节点
- 使用方法是: `document.createElement();`
- **元素创建之后必须插入才能显示**
## 插入节点（使用节点）
- 使用方法一： `父节点.appendChild();`
- 使用方法二：`父节点.insertBefore(要插入的节点，参考节点)`
## 删除节点
- 用法：`父节点.removeChild（子节点）`
- 不知道父级的写法:`node.parentNode.removeChild(node)`
## 复制节点
- 用法：`oldNode.cloneNode（true）`
- 默认浅clone
- 深clone需要增加额外的参数
 - `var newDiv = d1El.cloneNode(true);` `document.body.appendChild(newDiv);`
-  复制 必须插入才有效
-  记忆: body==>  document.body
## 节点属性（节点.属性）
- 获取：`getAttribute(名称)`
- 设置：`setAttribute(名称, 值)`
 - `setAttribute`是用于添加"属性"的,不是用于操作class内容的
- 删除：`removeAttribute(名称)`
## 内容处理
- p标签插入(替换)内容 `innerText(常用)/textContent`
- 给input设置value,只对表单有效果，是属性 .`usernameInput.value = '';`
- innerHTML插入可执行的标签，标签和样式会被解析，常用于动态生成页面元素
- innerText 插入文本内容，标签和样式会被当做文本内容处理。