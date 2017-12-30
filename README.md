# react-native-web
Build react-native and web app with [dva] and [antd-mobile].

English | [中文文档]

## Structure
```sh
├── App.js              # native entry
├── index.css           # web global style
├── index.ejs           # web html entry
├── index.js            # web js entry
├── router.js           # web router
├── assets              # assets
│   └── yay.jpg
├── components          # common components
│   ├── Counter.js
│   ├── DrawerLeft.js
│   ├── Header.js
│   ├── Text.js
│   ├── Text.native.js  # native uses the .native.js suffix
│   ├── TodoList.js
│   ├── Touch.js
│   └── Touch.native.js
├── models              # dva models
│   ├── counter.js
│   ├── index.js
│   └── todo.js
├── pages               # native pages
│   └── IndexPage.js
├── routes              # web pages
│   ├── IndexPage.js
│   └── IndexPage.less
├── services            # api services
│   └── example.js
└── utils               # useful utils
    ├── dva.js
    ├── rcform.js
    └── request.js
```
## Scripts
```sh
npm run start     # start react native packager
npm run android   # run android debug apk into devices
npm run apk       # release android app on mac or linux
npm run apk-w     # release android app on windows
npm run web       # start web app
npm run build     # build web app
npm run lint      # lint the code
```
## Platform
```js
function platform() {
  if (!window.platform)
    return 'web';
  else return window.platform; // ios|android
}
```
## Preview

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
[中文文档]: https://github.com/ZevenFang/react-native-web/blob/master/README_CN.md
