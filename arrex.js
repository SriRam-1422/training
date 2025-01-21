let operation = function (a, b, task) {
    console.log(task(a, b));
}
operation(a=Number(prompt("Enter the value a:")), b=Number(prompt("Enter the value b:")),(a, b) => {
    return a + b
})