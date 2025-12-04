console.log(window.document.body);
        console.log(document.body);


        // it will give all the html child node
        console.log ( document.body.childNodes);




        console.log(document.body.firstChild)

        console.log(document.querySelector("div"));
        console.log(document.querySelectorAll("div"));
        console.log(document.querySelector(".first-div-Child"));
        console.log(document.querySelector("#second-div"));
        console.log(document.querySelector("div.first-div"));
        console.log(document.querySelector("div#second-div"));

        // other specific selectors
        //select an element based on class
        console.log(document.getElementsByClassName("first-div-child"));
        console.log(document.getElementById);
        console.log(document.getElementsBy);

     const para=document.querySelector("p");
        console.log(para);
        para.style.color="blue";
        para.style.backgroundColor="red";

        // const imageElement=document.querySelector("img");
        // imageElement.setAttribute("src","image 2.png");

// const divElement=document.querySelector("div");
// divElement.setAttribute("data-numbre","123");

 const divElement=document.querySelector("div");
 divElement.setAttribute("data-price","1234");

 // setting editing and deleting an attribute value
 const imageElement=document.setAttribute("img");

 // updating the value of exesting attribute.
 imageElement.setAttribute("sec","image 2.png");

 // create a new data attribute
 imageElement.setAttribute("data-price",100);

 // deleting an attribute, by setting its value to null
 imageElement.setAttribute("data-price",null);
  


 console.log(para.innerHTML);// for accessing .
 (para.innerHTML)=
 "<strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</strong>"
 const secondPara= document.querySelector("second-Para");
 // accessing and updating text of an element using textContent        
 console.log(secondPara.textContent);// accessing

 secongPara.textContent="this is a new content ";// updating

 // H.W -> wirte a difference between innerHTML and textContent 
//  write difference between classList and className 

 // create an element 
 

//class property
const sectionElement = document.querySelector(".class1");
// deleting a class
const classes = sectionElement.className.split(" ");
classes.splice(2,1);
 sectionElement.className=classes.join(" ");


// classList..


// console.log(sectionElementCopy.classList);


// add , remove, toggle, replace.





