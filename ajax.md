---
title: ajax
---
## ajax
- Client/Server这两个单词的首字母,指的是客户端,服务器架构的意思,很多常见的软件都是这种架构
- Browser/Server的这两个单词的首字母,指的是浏览器,服务器,是WEB兴起之后的一种架构
- 服务器 
    - 目前比较火的 php node.js
## express 框加使用步骤
1. 全局安装express生成器 `npm install express-generator -g`
2. 创建文件夹
3. 通过修改配置使express支持 `express -e`
4. 在文件夹执行命令安装package.json中配置的依赖库`npm install`
5. 开启服务 `npm start`
6. 最后通过访问localhost:3000可以看到页面的内容
## 状态码
- 200 成功
- 404 没有找到文件
- 500 服务器错误
## 常见的端口
- 8080 80（可以省略不写） 8090 443
## 服务器的原理
- session 在服务器端会有一个session 他是一个对象的集合，该对象由key 和 value session 可以在整个会话期间存在，具体的销毁时间由服务器程序控制，默认一般30分钟，session一般判断用户是否登陆，用于控制用户的权限，session的数据可以在整个会话期间共享
## ajax封装
- 
```
//四个参数 路径 发送方式 发送内容 回调函数
function  myAjax(url,type,params,fn) {
	//发送ajax请求
  //  创建一个实例对象
  var xhr = new XMLHttpRequest();
  // 2. 设置请求方式 以及请求的url   abc?usernmae=asdf&paw=asdf
  xhr.open(type,url);
  if(type=='post'){
  	 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  	// 3. 执行发送 ...  username=zhangsan&password=1234
 	 xhr.send(params);
  }else{
  	xhr.send(null);
  }
  // 4. 监听状态 
  xhr.onreadystatechange = function(){
      // xhr.readyState 发送成功 等待结果
      // xhr.status == 200  请求成功 返回结果
        if (xhr.readyState == 4 && xhr.status == 200) {
          // 5. 获取结果
           console.log(xhr.responseText);
           // $('.msg').text(xhr.responseText);
           // 字符串
           var rs = xhr.responseText;
           fn(rs);	
       }
  }
}
```
- ajax封装改进
```
// {
// 	url:'xxx',
// 	type:'GET',
// 	data:{
// 		username:'zhagns',
// 		age:20
// 	}
// }

function  myAjax(options,fn) {
	//发送ajax请求
  //  创建一个实例对象
  var xhr = new XMLHttpRequest();
  //获取方法 get/post  变为小写
  var type =  options.type.toLowerCase();
  var url = options.url;
  var params = '';
	if(options.data){
		for(var key in options.data){
			params += '&'+key+'='+options.data[key];
		}
		// &username=zhangsan&password=1234
		params = params.substr(1);
	}
  // 2. 设置请求方式 以及请求的url   abc?usernmae=asdf&paw=asdf
  if(type=='post'){
  	xhr.open(type,url);
  	 xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  	// 3. 执行发送 ...  username=zhangsan&password=1234
  	if(params){
  		xhr.send(params);
  	}
  }else{
  	if(params){
  		url += '?'+params;
  	}
  	xhr.open(type,url);
  	xhr.send(null);
  }
  // 4. 监听状态 
  xhr.onreadystatechange = function(){
      // xhr.readyState 发送成功 等待结果
      // xhr.status == 200  请求成功 返回结果
        if (xhr.readyState == 4 && xhr.status == 200) {
          // 5. 获取结果
           console.log(xhr.responseText);
           // $('.msg').text(xhr.responseText);
           // 字符串
           var rs = xhr.responseText;
           fn(rs);	
       }
  }
}
```

