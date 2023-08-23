const obj={
    key:"value1",
    prpty:"value2",
    mthd:"value3",
    func:function(a,b){
        return a+b;
    },
    get chng(){
        return this.func(3,5);
    }
}

console.log(obj.chng)

const obj1={
    key:"value1",
    prpty:"value2",
    mthd:"value3",
    func:function(c,d){
        return c+d;
    },
    set chgeprpty(a){
        return this.key=a;
    }

}

obj1.chgeprpty= "key2";

console.log(obj1.key)

const obj2 ={
    key:"value2",
    prpty:"value2",
    get key1(){
        return this.key;
    },
    set chgeprpty1(b){
        return this.prpty=b;
    }
}

obj2.chgeprpty1="keyword32";

console.log(obj2.key1)
console.log(obj2.prpty)