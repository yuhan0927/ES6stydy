/*
函数新增特性
    参数默认值
    rest参数
    扩展运算符
    箭头函数
    this绑定
    尾调用
*/

{
    function test(x,y='world'){
        console.log(x,y)
    }
    test('hello')  // hello world
    test('hello','yh')  // hello yh
}

{
    let x = "test";
    function test2(x,y=x){
        console.log(x,y)
    }
    function test3(c,y=x){
        console.log(x,y)
    }
    test2('kill') // kill kill
    test2('') // undefined undefined 
    test3('kill') // kill test
}

// rest参数
{
    function test3(...arg) {
        for(let v of arg){
            console.log(v)
        }
    }
    test(1,2,3,4,'a') // 1
                      // 2
                      // 3
                      // 4
                      // a
}

//扩展运算符
{
    console.log(...[1,2,4]) //1,2,4
    console.log('a',...[1,2,4]) //a,1,2,4
}

// 箭头函数
{
    let arrow=v=> v*2
    let arrow2 = () => 5
    console.log(arrow(3)) //6
    console.log(arrow2()) //5
}

// 尾调用    提升性能
{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123) //tail 123
}