'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*  var let const 区别    解构
var a=1
console.log(a)
window.onload = function() {
    console.log(a)
}

// 区块
// var 是全局声明 在区块内会污染全局的作用域
// let 是局部声明不会污染全局
// const 定义常量
// {
//     let a = "喻晗";
// }
// console.log(a)

// 

for (var i=0; i<10; i++){
    console.log('循环体中:' + i)
}
console.log("循环体wai:"+i)

// 解构赋值
let [d,b,c] = [0,1,2];  //相当于 let a=0  let b=1 let c = 2
// 解构赋默认值
let [doo='true'] =[]
// d对象解构
let {foo,bar} = {foo:'yuhan',bar:'np'};
console.log(foo+bar)

// 先赋值再解构必须在外面加()
let haha
({haha} = {haha:'yuhan'})
console.log(haha)

// 字符串解构
const [a1,b1,c1,d1,e1] = 'yuhan'
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)
console.log(e1)
*/

/*
// 扩展运算符和rest运算符
// 扩展运算符  不确定参数个数时
function yuhan(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])   //不会报错会显示undefined
}
yuhan(1,2,3)

let arr1 = ['www','jspang','com']
// let arr2 = arr1
let arr2 = [...arr1]
console.log(arr2)
arr2.push('hhahaah')
console.log(arr1)
// rest ...
function jspang(first,...arg){
    // console.log(arg.length);
    for( let val of arg){
        console.log(val)
    }
}
jspang(0,1,2,3,4,5,6,7)
*/

/*
// 字符串模板 反引号 ``
let llm = '胖子'
// let blog = '这个是真的胖子' +llm+'hahah'
let blog = `这个是真的胖子'${llm}'hahah`
// es5 判断是否有某字符串
// document.write(blog.indexOf(llm)>0)
// es6
document.write(blog.includes(llm))
document.write(blog.startsWith(llm)) //开头是否有
document.write(blog.endsWith(llm)) //结尾是否有
document.write(llm.repeat(3)) //打印三次llm
*/

/*
// 数字操作
let binary = 0B010101;
console.log(binary)
// 八进制声明 Octal
let octal = 0o666;
console.log(octal)
// 
let a = 11
console.log(Number.isFinite(a));
console.log(Number.isFinite('hhh'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));
console.log(Number.isNaN(NaN))
console.log(Number.isInteger(918.1))
*/

// json 数组格式
// let json = {
//     '0' : 'yuhan',
//     '1' : 'zhenlihai',
//     '2' : 'heiheihei',
//     length:3
// }

// let arr = Array.from(json)
// console.log(arr)  //['yuhan','zhenlihai','heiheihei']

// // Array.of 方法
// let arr = Array.of(3,4,5,6);  //转化为数组
// console.log(arr)  //[3,4,5,6]


// find() 实例方法
// value 当前查找的值  index值得索引  arr 数组原型
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.find(function (value, index, arr) {
    return value > 5;
}));
var arr1 = ['yuhan', 'hahah'];
console.log(arr1.find(function (value, index, arr) {
    return value == 'yuhan';
}));

// fill 替换数组中得元素  第一个参数替换成什么 第二个参数替换值的下标，第三个参数借书至某下标处
var arr2 = ['yuhan', '喻晗', '小可爱'];
arr2.fill('老流氓', 1, 3);
console.log(arr2); // ['yuhan','老流氓','老流氓']

// 数组循环
var arr3 = ['yuhan', '喻晗', '小可爱'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr3[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr3.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item2 = _step3.value;

        console.log(_item2);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arr3.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            index = _step4$value[0],
            vale = _step4$value[1];

        console.log(index + ':' + vale);
    }
    // entries
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var list = arr3.entries(); //手动循环
console.log(list.next().value);
console.log('ddddddddddddddd');
console.log(list.next().value);
console.log('++++++++++++=++');
console.log(list.next().value);
