//Symbol声明的变量是独一无二的
{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1===a2) //false
    let a3=Symbol.for('a3')
    let a4=Symbol.for('a3')
    console.log(a3===a4) //true
}

{
    let a1=Symbol.for('abc');
    let obj = {
        [a1]:'123',
        'abc':345,
        "c":456
    }
    console.log(obj) //Object
                        //abc:123
                        //c:456
                        //Symbol(abc):"123"
    for(let [key,value] of Object.entries(obj)) {
        console.log(key,value)  // abc 345
                                // c  456
    }     
    
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]) //123   只拿到Symbol的值
    })

    Reflect.ownKeys(obj).forEach(function(item){
        console.log(item.obj[item]) //abc:123
                                    //c:456
                                    //Symbol(abc):"123"
    })
}
//在对象中如果用Symbol类型做key值的话，用for in  拿不到Symbol类型