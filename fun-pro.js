function main(task){
    console.log(task(10,10));
   }
   main(function(a,b){
       return a+b
   })
   main(function(a,b){
       return a-b
   })
   main(function(a,b){
       return a*b
   })
   
   let b =() => console.log("hello");
   console.log(b);
   console.log(b())
   
   
   let main1=((task)=>{
       console.log(task);
       console.log(task());
   })
   main1(() => {
       return " I am callback Function"
   })