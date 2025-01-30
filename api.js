// // let odj ={
// //     "name":"Sriram",
// //     "age":20,
// //     "country":"INDIA"
// // }
// // console.log(odj);

// // let obj1=JSON.stringify(odj);
// // console.log(obj1);
// // let obj2=JSON.parse(obj1);
// // console.log(obj2);

// //3-ways
// //fetch() method
// //AJAX
// //Axios

// // let a =window.fetch();
// // console.log(a);

// window.fetch("data.json")
// .then((data) =>data.json())
// .then((res) =>{
//     // console.log(res);
//     // console.log(res[0].name);
//     // console.log(res[1]);
//     // console.log(res[0]);
// res.map((ele) =>{
//     console.log(ele.name);
//     console.log(ele.id);
//     console.log(ele.designation);

//     document.body.innerHTML +=`<h1>${ele.name}</h1>`;
//     document.body.innerHTML +=`<h1>${ele.id}</h1>`;
//     document.body.innerHTML +=`<h1>${ele.designation}</h1>`;

// })
// })

let demo=async() =>{
    let a=await fetch("country.json");
    console.log(a);
    let b=await a.json();
    console.log(b);
    b.map((ele) =>{
        console.log(ele);
        console.log(ele.name);
        console.log(ele.code);
        // let select=document.getElementById("select");
        // console.log(select);
        // select.innerHTML +=`<option value=${ele.code}>${ele.name}</option>`;
        let demo1=document.getElementById("demo1");
        console.log(demo1);
        demo1.innerHTML +=`<option value=${ele.code}>${ele.name}</option>`;

    })
}
demo();