let task1 = "GetUp Early";
let task2 = "Drink 3 litres of Water";
let task3 = "Starts Javascript Practice";
let tasks = [task1, task2, task3];
let task4 = "Debugging the code";
function addTask(task) {
    tasks.push(task);
}
addTask("read book");
function tasklist() {
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        console.log(element);
    }
}
tasklist();
let task = {
    title: "Eat Lunch",
    isComplete: true
};
console.log(task)