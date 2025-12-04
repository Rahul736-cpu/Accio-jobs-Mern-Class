// creating an element 

// const h3Element=documents,createElement("h3");

// h3Element.textContent="Hi,i am a H3 element ";

// const div1=document.querySelector("div");
// div1.appendChild(h3Element);

// const h3Element1=document.querySelector("h3");

// // Events in Dom
// const para1=document.querySelector("p");
// para1.addEventListener("click",(event)=>{
//    para1Clicked("event");

// });
//  function paraClicked(){
//     h3Element1.remove();
//     console.log("you have clicked a para", event.type);
//  }

 // mouseover, mouseup, mousedown, keyup, keydown ;



const h2Element=document.querySelector("h2");
h2Element.addEventListener("mouseover",()=>{
h2Element.style.backgroundColor="yellow";
})


h2Element.addEventListener("mousedown",()=>{
h2Element.style.backgroundColor="red";
})

h2Element.addEventListener("mouseup",()=>{
h2Element.style.backgroundColor="yellow";
})

document.addEventListener("keydown",(event)=>{
console.log("event type:"+event.key);
console.log("event type:"+event.keyCode);

});









