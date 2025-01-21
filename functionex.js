let main=function(){
    let a=Number(prompt("Enter the value a:"));
    let b=Number(prompt("Enter the value b:"));
    let c=Number(prompt("Enter the value c:"));
    let d=a+b+c;
    console.log(d);
    let e=a-b-c;
    console.log(e); 
    let f=a*b*c;
    console.log(f);
    let g=a/b/c;
    console.log(g);
    let greatest=Math.max(a,b,c);
    return greatest;
}
console.log(main());