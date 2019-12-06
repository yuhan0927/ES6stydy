{
    // 类的基本定义和生成实例
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
    }
    let v_parent = new Parent('v');
    console.log(v_parent);  //Parent{name:v}
}

// 继承
{
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
    }

    class Child extends Parent{

    }
    console.log(new Child());  //Child{name:'yh'}
}

// 继承传递参数
{
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
    }

    class Child extends Parent{
        constructor(name="child"){
            super(name);
            // 在继承函数中，如果子类用了super传递参数，super要放在第一行
            this.type = 'child'
        }
    }
    console.log(new Child());  //Child{name:'child'，type:'child'}
    console.log(new Child(hello));  //Child{name:'hello'，type:'child'}
}

// getter，setter
{
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
        // get 写法 不能理解为方法，其实是属性
        get longName(){
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value
        }
    }

    let v = new Parent()
    console.log(v.longName) //yh
    v.longName="hello"
    console.log(v.longName) //mkhello
}

// 静态方法
{
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
        static tell(){
            console.log('tell')
        }
    }

    Parent.tell() //tell
}

// 静态属性
{
    class Parent{
        constructor(name="yh"){
            this.name = name
        }
        static tell(){
            console.log('tell')
        }
    }

    Parent.type="test"
    console.log('静态属性',Parent.type) //test
}