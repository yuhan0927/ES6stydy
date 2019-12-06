{   
    // 数据结构横向比较，增删改查
    let map = new Map();
    let set = new Set();
    let array=[]
    let obj = {}
    let item = {c:2}
    // 增
    map.set('t',1);
    set.add({t:1});
    set.add(item)
    array.push({t:1})
    obj["t"]=1

    // 查
    let map_exist=map.has("t");
    let set_exist=map.has({t:1});
    set.has(item)
    let array_exist=array.find(item=>item.t)
    't' in obj

    // 改
    map.set("t",2);
    set.forEach(item=>item.t?item.t=2:'')
    item.t = 2
    array.forEach(item=>item.t?item.t2:'')
    obj['t'] = 2

    // 删
    map.delete('t');
    set.forEach(item=>item.t?set.delete(item):'')
    set.delete(item)
    let index = array.findIndex(item => item.t)
    array.splice(index,1)
    delete obj["t"]
}

// map,set,object对比
{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {}

    // 
}

// 建议，能使用map不使用数组，如果对数据结构要求唯一使用set