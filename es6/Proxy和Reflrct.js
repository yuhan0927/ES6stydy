{
    let obj = {
        time:'2019-12-7',
        name:'yh',
        _num:'123'
    }

    let mo = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2019','2020')
        },
        // 拦截对象设置属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value
            }else{
                return target[key];
            }
        },
        // 拦截key in object操作
        has(target,key){
            if(key==="name"){
                return target[key]
            }else{
                return false
            }
        },
        // 拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true
            }else{
                return target[key]
            }
        },
        // 拦截Object.keys，Object.getOwnProperSymbols，Objet.getOwnPropertyNames
        ownKeys(target){
            return Object.key(target).filter(item=>item!='time')
        }
    })

    console.log(mo.time) //2020-12-7

    mo.time="2018"
    console.log(mo.time) //2020-12-7
    mo.name="llm";
    console.log(mo.name) //llm

    // 加了拦截key in object操作之后
    console.log('name' in mo,'time' in mo ) //true  false

    // delete mo.time  //不能删除
    // delete mo._num //true
    console.log('ownKeys',Object.keys(mo)) // ownKeys {"name","_num"}
}

{
    let obj = {
        time:'2019-12-7',
        name:'yh',
        _num:123
    };
    console.log('Reflect get',Reflect.get(obj,'time')) //Reflect get 2019-12-7
    Reflect.set(obj,'name','llm') //Reflect get 2019-12-7
    console.log(obj) // {time:'2019-12-7,name:'llm,_num:123}
    console.log(Reflect.has(obj,'name')); //true
}

{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va = this_validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }

                }else{
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators={
        name(val){
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val>18
        }
    }
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            return validator(this,personValidators)
        }
    }

    const person = new Person('yh',21);
    console.log(person)
}

// 使用代理的优势？