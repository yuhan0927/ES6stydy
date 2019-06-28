# ES6stydy

1. cnpm install -g babel-cli 全局安装babel脚手架
2. cnpm i --save-dev babel-preset-es2015 babel-cli
3. 更目录下新建 .babelrc文件
4. babel src/index.js -o dist/index.js   将src目录下的index.jses5的格式输出到dist目录下的index.js
5. 修改package.json中的scripts字段的值为"build": "babel src/index.js -o dist/index.js"  可用npm run build  代替 babel src/index.js -o dist/index.js 命令


字符串
browserType.indexOf(string)
browserType.slice(num.num)
browserType.toLowerCase()  browserType.toUpperCase()
browserType.replace('','')    在实际程序中，想要真正更新browserType变量的值，您需要设置变量的值等于刚才的操作结果；它不会自动更新子串的值。所以事实上你需要这样写：browserType = browserType.replace('moz','van');

数组
split('分割符')   将字符串转为数组
join()        将数组转为字符串，可以指定分隔符
.toString()   直接将数组转为字符串
 