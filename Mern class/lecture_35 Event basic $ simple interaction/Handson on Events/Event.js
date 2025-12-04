
// nall event handlers have access to Event Objects properties and method.
// it is special object which has detail abiut the event.
// event is denoted as ("e");


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 79;
//     a++;
//     console.log(a);
//     //26

// };
// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are in side div");
// }



//    // Event Listeners:

//    btn1.addEventListener("click",(evt)=>{// this is event handler..
//     console.log("button 1 was clicked");
//     console.log(evt);
//     console.log(evt.type);



//    });

//    btn1.addEventListener("click",(evt)=>{// this is event handler..
//     console.log("button 1 was clicked-handler 1");
//    });

//    btn1.addEventListener("click",(evt)=>{// this is event handler..
//     console.log("button 1 was clicked-handler 2");
//    });

//    const handler3=()=>{
// btn1.addEventListener("click",(evt)=>{// this is event handler..
//     console.log("button 1 was clicked-handler 3");
//    });
//    }


//    btn1.addEventListener("click",(evt)=>{// this is event handler..
//     console.log("button 1 was clicked-handler 4");
//    });


let modebtn = document.querySelector("#mode");
let currMode = "light";
let body=document.querySelector("body");

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
body.classList.add("dark");
body.classList.remove("light");
    } else {
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode);
});