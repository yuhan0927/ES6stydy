{
    let regex=new RegExp('xyz','i');  //es5写法
    let regex2=new RegExp(/xyz/i); //es5中正则表达式写法只能是一个参数

    console.log(regex.test('xyz123'),regex2.test('xyz123')) //true true

    let regex3 = new RegExp(/xyz/ig,'i') //es6中可以是两个参数,第二个修饰符会覆盖前面正则表达式所用的修饰符
    console.log(regex3.flags); //i
}


//y修饰符
{
    let s='bbb_bb_b';
    let a1=/b+/g;
    let a2=/b+/y;
    console.log(a1.exec(s),a2.exec(s)) // 
    console.log(a1.exec(s),a2.exec(s)) // 

    console.log(a1.sticky,a2.sticky) //false true  判断是否开启了y修饰符
}

// u修饰符
{
    console.log(/^\uDB3D/.test('\uDB3D\uDC2A'))  //true
    console.log(/^\uDB3D/u.test('\uDB3D\uDC2A'))  //false

    console.log(/\u{61}/.test(a)) //false
    console.log(/\u{61}/u.test(a))  //true
}

// s修饰符