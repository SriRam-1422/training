// // // // function parentFunc() {
// // // //   function childFunc() {
// // // //     return 'I am child function';
// // // //   }
// // // //   return childFunc();
// // // // }
// // // // parentFunc(); // 'I am child function'
// // // var a=10;
// // // let b=20;
// // // function parent1(){
// // //     let a="hello";
// // //     let b="world";
// // //     console.log(a);
// // //     console.log(b);
// // //     console.log(this.a);
// // //     console.log(this.b);
// // // }
// // // parent1();

// // function main(){
// //     let a=10;
// //     function child(){
// //         console.log(a);
// //     }
// //     return child();
// // }
// // main(); // 10

// function parent2(){
//     let a=10;
//     function child(){
//         console.log(a);
//     }
//     return child
// }
// parent2()(); // 10
// parent2()(); // 10
// parent2()(); // 10
// parent2()(); // 10
// parent2()(); // 10
// parent2()(); // 10
// parent2()(); // 10

function parent(){
    function child(){
        console.log('I am child function');
        function child2(){
            console.log('I am child of child function');
        }
        return child2;
    }
    function child1(){
        console.log('I am child1 function');
    }
    return [child,child1];
}
parent()[0]()(); // I am child function
parent()[1](); // I am child1 function