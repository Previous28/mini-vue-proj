# HTodo-list

###项目说明

一个用来入门Vue的小项目

Todo-list，待办事项的管理。功能有：

> - 添加待办事项
> - 划掉已完成的待办事项
> - 删除待办事项
> - 用不同的标签区分不同的状态的待办事项：全部、已完成、未完成
> - 一次性清除所有已完成事项
> - 本地存储功能



### 组件划分

```
App：挂载整个应用
 |——myHeader:界面的上部
 |——todo:【主要模块】
 	 |——Item:表示每一个待办事项
 	 |——Tabs:表示所有待办事项的状态
 |——myFooter:界面的下部
```



### 文件结构

```
|——build：构建用到的相关文件
|——config：构建的配置文件
|——node_modules：相关依赖文件
|——src：前端开发源码
	|——assets：静态资源如图片、样式文件等
	|——todo：前端vue组件
	|——App.vue：应用的外层结构
	|——main.js：应用的入口文件
```



## Build Setup

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080 运行项目
npm run dev
```
