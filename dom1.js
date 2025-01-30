let a=document.createElement("h1");
console.log(a);
a.textContent="hello-world";

document.body.appendChild(a);

a.style.backgroundColor="red";

//----------------------------------------------
//craete a div tag
let div = document.createElement("div");
console.log(div);

//append div-tag to body-tag

document.body.appendChild(div);

div.style.border="5px solid black";

//create a ol tag

let ol=document.createElement("ol");
console.log(ol);

div.appendChild(ol);

//create a li tag
let li1=document.createElement("li");        
console.log(li1);
li1.textContent="javascript";

ol.appendChild(li1);

let li2=document.createElement("li");        
console.log(li2);
li2.textContent="react";

ol.appendChild(li2);

ol.setAttribute("type","a");

// ------------------------------
//create a table tag
let table=document.createElement("table");
console.log(table);


document.body.appendChild(table);

table.setAttribute("border","2px solid black");

//create a tr tag
let tr1=document.createElement("tr");
console.log(tr1);

table.appendChild(tr1);

//create a td tag
let td1=document.createElement("td");
console.log(td1);
td1.textContent="hello";

tr1.appendChild(td1);

table.setAttribute("border","2px solid black");

let td2=document.createElement("td");
console.log(td2);
td2.textContent="hello";

tr1.appendChild(td2);

let td3=document.createElement("td");
console.log(td3);
td3.textContent="hello";

tr1.appendChild(td3);

let td4=document.createElement("td");
console.log(td4);
td4.textContent="hello";

tr1.appendChild(td4);

