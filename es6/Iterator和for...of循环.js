{
    let arr=['hello','world'];
    // 调用方式
    let map=arr[Symbol.iterator]();
    console.log(map.next()) //Object{value:'hello',done:false}  done为false说明循环有下一步，为true这说明没有
    console.log(map.next()) //Object{value:'world',done:false}
    console.log(map.next()) //Object{value:undefined,done:true}
}

{
    let obj = {
        start:[1,3,2],
        end: [7,9,8],
        // 自定义iterator
        [Symbol.iterator](){
            let self = this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

{
    let arr=['hello','world'];
    for(let value of arr){
        console.log('value',value);
    }
}