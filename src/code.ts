//**-- No.2 video --**/
// import * as Rx from "rxjs/Observable";

//--** No.3 video **--//
// import { Observable as Rx }  from "rxjs" ;
// console.log(Rx);

import { Observable } from "rxjs";

var observable = Observable.create((observer: any) => {
    try {

        observer.next('Hey Honey come here!')
        observer.next('How are you?')

        setInterval(() => {
            observer.next('I am Good');
        },2000)


        // observer.complete()
        // observer.next('It will not show')

    } catch (err) {
        observer.error(err);
    }
});

var observer = observable.subscribe(
    (x: any) => console.log(addItem(x)),
    (error: any) => console.log(addItem(error)),
    () => console.log(addItem('Completed!!')),

);

var observer2 = observable.subscribe(
    (x: any) => console.log(addItem(x)),
);
observer.add(observer2)

setTimeout(()=>{
    observer.unsubscribe();
},6001)


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}