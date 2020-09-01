# 跨端

一套代码 产生多端

（刚开始：不能使用 npm， 没有less sass 没有状态管理）

1. 能使用开源的解决方案写小程序
   - wepy
     - 腾讯出的，vue些小程序，但是还是需要学习语法
   - mpvue
     - 完全 vue 体验，使用 vue 脚手架，完全 vue 的方法
     - mpvue 刚出的时候，小程序没有组件化
     - 停更了很久

## 编写跨端的小程序

1. Taro
   1. React 开发小程序，可以使用 hooks，使用 redux 使用 mobx
   2. taro-ui 完全使用 npm 管理
      1. 无论是 redux dava mobx, rematch, 都是数据的，和平台无关，只不过官方脚手架自带的只有两个
   3. 默认不支持同时编译多个端，可以自己配置来解决
   4. bulid alipay的时候，把微信的屏蔽了
2. uni-app
   1. 基于 mpvue 的扩展，使用 vue 开发
   2. 重点开发自己的社区
   3. 自己的编辑器
   4. github 和 npm 对接的不好
   5. 官方的 ui 库比较差