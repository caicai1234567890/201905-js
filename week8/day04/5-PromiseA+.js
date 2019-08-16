

class MyPromise{
    constructor(excutor){
        // this 是当前构造函数的实例,this.xxx = xxx 向实例上添加私有属性
        this.state = 'pending'; // Promise的状态,默认是pending 
        this.fulfilledEvent = []; // 成功的事件池
        this.rejectedEvent = []; // 失败的事件池
        this.value = undefined; // 用来记录resolve()或者rejected()传入的值
        let resolve = (result) =>{
            // resolve的作用是修改状态为fulfilled ,执行成功的事件池中的函数
            if(this.state !== 'pending') return ;
            this.state = 'fulfilled';
            this.value = result;
            // fulfilledEvent 里面收集的是then方法的回调函数而这些then方法的回调都应该是异步执行的,所以这里需要把执行事件池处理成异步的
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                this.fulfilledEvent.forEach((item) => item(this.value));
            },0);
            
            
        };
        let reject = (reason) =>{
            if(this.state !== 'pending') return ; // Promise的状态只能修改一次,只能从pending 变为fulfilled或者从pending 变为rejected ,如果this.state不是pending 了,说明这个状态被改过了,后面的代码不能再执行了

            this.state = 'rejected';
            this.value = reason;
            let timer = setTimeout(()=>{
                clearTimeout(timer);
                this.rejectedEvent.forEach(item => item(this.value));
            });
            
        };
        try{
            excutor(resolve,reject);
        } catch(e) {
            reject(e);
        }
        

    }
    then(resolveFn,rejectedFn){
        // this.fulfilledEvent.push(resolveFn);
        // this.rejectedEvent.push(rejectedFn);
        return new MyPromise((resolve,reject)=>{
            this.fulfilledEvent.push((result)=>{
                try{
                    let x = resolveFn(result);
                    x instanceof MyPromise ? x.then(resolve,reject) :
                    resolve(x);
                }catch(e){
                    reject(e);
                }
                
            });
            this.rejectedEvent.push((reason)=>{
                try {
                    let x = rejectedFn(reason);
                    x instanceof MyPromise ? x.then(resolve,reject):
                    resolve(x);
                    // x是一个promise的实例,x是resolve还是reject 决定了p2的then哪个回调执行,x如果resolve 了,就应该执行p2 then的第一个回调,如果x reject 了则执行p2的第二个回调, 发现了x的状态决定了p2的状态,我们把控制p2状态变为resolve 的resolve函数添加到x的成功事件池中,把控制p2状态变为rejected的 reject方法添加到x的失败事件池中
                    // 如果x现在变为resolve 了,就会执行x成功的事件池中的函数,在x的成功事件池中有一个控制p2 resolve 的方法,执行了它,p2变成resolve了,对应的x变成rejected 了,就会执行x的失败事件池,就会把p2的reject方法执行了,p2就变成rejected.
                }catch(e){
                    reject(e);
                }
            })
        });
    }
}

new MyPromise((resolve,reject)=>{
    resolve();
    reject();
}).then((res)=>{
    console.log(1);
},(err)=>{
    console.log(2);
});