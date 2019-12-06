{
    console.log(0b11111011); //503  二进制
    console.log(0o767); //503  八进制
}

// 判断一个数是否有尽
{
    console.log(Number.isFinite(15)) //true 判断是否有尽
    console.log(Number.isFinite(NaN)) //false
    console.log(Number.isFinite(1/0)) //false
    console.log(Number.isNaN(NaN)) //true
}

// 判断一个数是否是整数
{
    console.log(Number.isInteger(25)) //true
    console.log(Number.isInteger(25.0)) //true
    console.log(Number.isInteger(25.1)) //false
    console.log(Number.isInteger('25')) //false
}

{
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
    Number.isSafeInteger(10)  //判断数字是否在安全有效数字范围内
}


// 取数字的整数部分
{
    console.log(Math.trunc(4.1))  //4
    console.log(Math.trunc(4.9))  //4
}


// 取一个数的正负号
{
    console.log(Math.sign(-5)) //-1
    console.log(Math.sign(5)) // 1
    console.log(Math.sign(0)) // 0
}

{
    console.log(Math.cbrt(-1)) // -1   -1的立方根
    console.log(Math.cbrt(8)) // 2   8的立方根
}