console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.head);
console.log(document.title);

document.title = "flipkart";
console.log(document.body);
console.log(document);
let link=document.links;
console.log(link);
for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo";
    link[i].href="http://www.youtube.com"
    link[i].target="_blank"

}
//in-direct access (methods in dom)
// 1)document.getElementById("value")
// 2)document.getElementsByClassName("value")
// 3)document.getElementsByTagName("value")
// 4)document.getElementsByName("value")
// 5)document.querySelector("value")
// 6)document.querySelectorAll("value")

let a = document.getElementById("demo");
console.log(a);
console.log(a.textContent);
a.textContent="batch 6";
console.log(a.textContent);
a.style.backgroundColor="red";
a.style.textAlign="center";
let b = document.getElementsByClassName("demo1");
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor="green";
console.log(b[1]);
console.log(b[1].textContent);
b[1].style.backgroundColor="blue";

let c = document.getElementsByTagName("p");
console.log(c);
console.log(c[1]);
c[1].style.color="red";
c[1].textContent="hello";

let d = document.getElementsByName("demo2");
console.log(d);
console.log(d[0]);
d[0].style.backgroundColor="crimson";


//document.querySelector()
//-->we have pass value with css selector.
//-->it will return only first element.
let e = document.querySelector("#demo");
console.log(e);

let g = document.querySelector(".demo1");
console.log(g);


//document.querySelectorAll()
//-->we have pass value with css selector.
//-->it will return reference in a node list.
let f = document.querySelectorAll(".demo1");
console.log(f);
console.log(f[1]);


//events in dom
//-------------------------------------------------------
//-->it is an action performed by end-user on a web-page.
//types:-
//1)mouse events
    //onmouseover
    //dbclick
    //onmouseleave
//2)keyboard events
    //keyup
    //keydown
    //keypress
//3)form events
    //input events
    //blur events
    //focus events
//4)pointer events
    //click events