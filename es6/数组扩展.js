// Array.of    把其他数据类型转化为数组
{
    let arr = Array.of(3,4,7,9,11);
    console.log(arr); //[3,4,7,9,11]

    let arr1 = Array.of();
    console.log(arr1) //[]
}


// Array.from  把一些伪数组转化为数组
{
    let p =document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent)
    });

    console.log(Array.from([1,3,5],function(item){return item*2})) // [2,6,10]
}

{
    console.log([1,'a',undefined].fill(7)); //[7,7,7]
    console.log(['a','b','c'].fill(7,1,3))//['a',7,7]  从下标一开始换，到下标为3之前 不确定
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index); //keys 0 
                                   //keys 1
                                   //keys 2
    }
    for(let value of ['1','c','ks'].values()){
        console.log(value);  //1 
                             //c 
                             //ks
    }
    for(let [index,value] of ['1','c','ks'].values()){
        console.log(index,value);  //0 1 
                                   //1 c 
                                   //2 ks
    }
}

// conpyWithin 方法


// find  findIndex
{
    console.log([1,2,3,4,5,6].find(function(item){return item>=3}));  //4
    console.log([1,2,3,4,5,6].findIndex(function(item){return item >= 3})); //3
}

{
    console.log('number',[1,2,NaN].includes(1))  //true
    console.log('number',[1,2,NaN].includes(NaN))  //true
}