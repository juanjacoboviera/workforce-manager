  
const assignTasks = (employees, tasks) => {
let result = [];
    employees.forEach(employee => {
        let availableTasks = [...tasks];
        let assignedTasks = [];
        let taskCount = Math.floor(Math.random() * (tasks.length - 1)) + 1;
    for (let i = 0; i < taskCount; i++) {
        let taskIndex = Math.floor(Math.random() * availableTasks.length);
        assignedTasks.push(availableTasks[taskIndex]);
        availableTasks.splice(taskIndex, 1);
        }
    result.push({ ...employee, tasks: assignedTasks });
});
return result;
    }  
    
    export {assignTasks}