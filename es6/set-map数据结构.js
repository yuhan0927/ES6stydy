{
    let list = new Set()
    list.add(5);
    list.add(7);

    console.log(list.size); //2  相当于length
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log(list.size) //5
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log(list) [1,2]

    let arr=[1,2,3,1,2]
    let list2=new Set(arr)
    console.log(list2) //[1,2,3]
}

{
    let arr=['add','delete','clear','has']
    let list = new Set(arr)

    console.log(list.has('add')) //true
    console.log(list.delete('add'),list) //true  Set{"delete","clear","has"}
}

{
    let arr=['add','delete','clear','has']
    let list = new Set(arr)
}


// WeakSet的元素只能是对象  不会检测
{
    let weakList = new WeakSet();

    let arg={};

    weakList.add(arg);

    console.log(weakList)  // {}
}

{
    let map = new Map();
    let arr=['123'];

    // Set添加元素用add   Map添加元素用set
    map.set(arr,456);
    console.log(map,map.get(arr)) // {["123"]=>456} 456
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log(map) //Map{"a"=>123,"b"=>456}
    console.log(map.size)
    console.log(map.delete('a'),map) //true  "b"=>456
}

{
    let weakMap=new WeakMap()   //WeakMap 和 map 的区别就跟Set和WeakSet的区别一样
}