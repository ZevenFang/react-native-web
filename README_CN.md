# ReactNativeWeb
使用 [dva] 和 [antd-mobile] 构建 ReactNative 应用和网页应用

[English] | 中文文档

## 目录结构
```sh
├── App.js              # react-native 入口文件
├── index.css           # web 全局样式
├── index.ejs           # web html 入口
├── index.js            # web js 入口
├── router.js           # web 路由
├── assets              # 公共资源文件
│   └── yay.jpg
├── components          # 公共组件
│   ├── Counter.js
│   ├── DrawerLeft.js
│   ├── Header.js
│   ├── Text.js
│   ├── Text.native.js  # react-native 优先匹配 .native.js 后缀
│   ├── TodoList.js
│   ├── Touch.js
│   └── Touch.native.js
├── models              # 公共 dva 模型
│   ├── counter.js
│   ├── index.js
│   └── todo.js
├── pages               # react-native 页面
│   └── IndexPage.js
├── routes              # web 页面
│   ├── IndexPage.js
│   └── IndexPage.less
├── services            # 公共 api 服务
│   └── example.js
└── utils               # 公共工具类
    ├── dva.js
    ├── rcform.js
    └── request.js
```
## 运行脚本
```sh
npm run start     # start react native packager
npm run android   # run android debug apk into devices
npm run apk       # release android app on mac or linux
npm run apk-w     # release android app on windows
npm run web       # start web app
npm run build     # build web app
npm run lint      # lint the code
```
## 支持平台
```js
function platform() {
  if (!window.platform)
    return 'web';
  else return window.platform; // ios|android
}
```
## 界面预览

### Web
![](https://rawgit.com/ZevenFang/react-native-web/screen/web-todos.png)
![](https://rawgit.com/ZevenFang/react-native-web/screen/web-counter.png)
### Android
![](https://rawgit.com/ZevenFang/react-native-web/screen/android-todos.png)
![](https://rawgit.com/ZevenFang/react-native-web/screen/android-counter.png)
### iOS
![](https://rawgit.com/ZevenFang/react-native-web/screen/ios-todos.png)
![](https://rawgit.com/ZevenFang/react-native-web/screen/ios-counter.png)

[dva]: https://github.com/dvajs/dva
[antd-mobile]: https://mobile.ant.design/docs/react/introduce-cn
[English]: https://github.com/ZevenFang/react-native-web/blob/master/README.md
