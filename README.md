# 基于vue2.0 + vuex + vue-router + vuex + vue-resource，并结合豆瓣图书API开发的图书搜索应用

## 功能说明
-  支持按照书名进行图书搜索
- 支持按照分类显示图书
- 点击图书封面可展示图书信息，包括作者、译者（仅针对外文书）、出版信息、内容简介、目录等信息

## 在线demo
[https://yankeliu.github.io/book-search-dist/dist/index.html](https://yankeliu.github.io/book-search-dist/dist/index.html)

## 技术说明
在构建图书信息展示页面时，由于在搜索图书时，豆瓣API已经提供了图书的详细信息，所以没有再进行http请求，将第一次搜索的结果放在`vuex`对象的`state`中，当需要展示时使用`vuex`对象的`getters`属性返回要用的信息即可。

## 运行项目

\#克隆项目到本地

`git clone git@github.com:yankeliu/book-search.git`

\#切换到项目所在文件夹

`cd book-search`

\#安装依赖

`npm install`

\#打开浏览器输入localhost:8080即可访问

`npm run dev`
