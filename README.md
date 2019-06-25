# ES6stydy

1. cnpm install -g babel-cli 全局安装babel脚手架
2. cnpm i --save-dev babel-preset-es2015 babel-cli
3. 更目录下新建 .babelrc文件
4. babel src/index.js -o dist/index.js   将src目录下的index.jses5的格式输出到dist目录下的index.js
5. 修改package.json中的scripts字段的值为"build": "babel src/index.js -o dist/index.js"  可用npm run build  代替 babel src/index.js -o dist/index.js 命令
