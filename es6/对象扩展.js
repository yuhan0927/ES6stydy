/**
 * 函数新增特性
 *  简介表示法
 *  属性表达式
 *  扩展运算符
 *  Object新增方法
 */

//  简介表示法
{
    let o=1;
    let l =2
    let es5 = {
        o:o,
        k:k
    };
    let es6 = {
        o,
        k
    }

    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello')
        }
    }
    console.log(es5_method.hello(),es6_method.hello())
}

// 属性表达式
{
    let a = 'b';
    let es5_obj={
        a:'c'
    };

    let es6_obj= {
        [a]:'c'
    }
    console.log(es5_obj,es6_obj) // Object{a:"c"}  Object{b:"c"}
}

// 新增API
{
    console.log('字符串', Object.is('abc','abc'),'abc'==='abc') // true true
    console.log('数组',Object.is([],[]),[]===[])  //false  false    数组是引用类型

    console.log('拷贝', Object.assign({a:'a'},{b:'b'}))

    let test={k:123,o:456}
    for(let [key,value] of Object.entries(test)){
        console.log([key,value])
    }
}

// 扩展运算符
{
    let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:"ccc"};
    // c= {
    //     c:'ddd',
    //     d:'ccc'
    // }
}