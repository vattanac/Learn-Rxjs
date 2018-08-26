//**-- No.2 video --**/
// import * as Rx from "rxjs/Observable";

//--** No.3 video **--//
// import { Observable as Rx }  from "rxjs" ;
// console.log(Rx);

import { Observable } from "rxjs";
var observable = Observable.create((observer:any)=>{
    observer.next('Hey Honey come here!')
    observer.next('How are you?')
    observer.complete()
    observer.next('It will not show')
});
observable.subscribe(
    (x:any)=> console.log(addItem(x)),
    (error:any)=> console.log(addItem(error)),
    ()=> console.log(addItem('Completed!!')),

);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}