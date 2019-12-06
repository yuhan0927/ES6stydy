//处理unicode超过/0xFFF的字符串
{
    console.log('a','\u0061'); //a a
    console.log('b','\u20BB7'); //a 20BB7超过了0xFFF无法显示出来

    console.log('b','\u{20BB7}'); //a  对应字符    es6处理方式加{}
}



// 使用率高！
{
    let str = "string"
    console.log('includes',str.includes("r"))//true
    console.log('includes',str.includes("c"))//false
    console.log('start',str.startsWith("str"))//true
    console.log('end',str.endsWith("ing"))//true
}


// 使用repeat之后会将原来的字符串复制n次
{
    let str="abc";
    console.log(str.repeat(2));abcabc
}

// 模板字符串
{
    let a="list";
    let n = "hah";
    let m = `i am ${a},${b}`
}


//es7草案  使用频率高 
// padStart()和padStart()一共接受两个参数，
// 第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
// 果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
{
    console.log('1'.padStart(2,'0')) //padStart第一个参数指定字符串长度，第二个参数用于长度不够时向前补
    console.log('1'.padEnd(2,'0')) //padStart第一个参数指定字符串长度，第二个参数用于长度不够时向后补
}

{
    let user = {
        name: 'hah',
        info: 'hello'
    };
    abc`i am ${user.name},${user.info}`
    function abc(s,v1,v2){
        console.log(s,v1,v2)
    }
}