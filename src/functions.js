const randomNumber = () => {
    return Math.floor(Math.random() * 21) + 1;
  }

  
//   const mergeEmployeesAndTasks = (tasks, data, numberOfItems) => {
//     let resultArray = [];

//   for (let i = 0; i < data.length; i++) {
//     let selectedTasks = [];
//     for (let j = 0; j < numberOfItems; j++) {
//       let randomIndex = Math.floor(Math.random() * tasks.length);
//       selectedTasks.push(tasks[randomIndex]);
//     }
//     resultArray.push({...data[i], tasks: selectedTasks });
//   }

//   return resultArray;
//     }
    

 
const mergeEmployeesAndTasks = (tasks, data, numberOfItems) => {
    let resultArray = [];

  for (let i = 0; i < data.length; i++) {
    let selectedTasks = [];
    for (let j = 0; j < numberOfItems; j++) {
      let randomIndex = Math.floor(Math.random() * tasks.length);
      selectedTasks.push(tasks[randomIndex]);
    }
    resultArray.push({...data[i], tasks: selectedTasks });
  }

  return resultArray;
    }
    
// const assignTasks = (employees, tasks) => {
//     let result = [];
//     let taskCopy = [...tasks];
//     employees.forEach(employee => {
//       let taskCount = Math.floor(Math.random() * tasks.length) + 1;
//       let selectedTasks = [];
//       for (let i = 0; i < taskCount; i++) {
//         let taskIndex = Math.floor(Math.random() * tasks.length);
//         selectedTasks.push(tasks[taskIndex]);
//         taskCopy.splice(taskIndex, 1);
//       }
//       result.push({
//         ...employee,
//         tasks: selectedTasks
//       });
//     });
//     return result;
//       }  

  
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
          

    
    export {randomNumber, mergeEmployeesAndTasks, assignTasks}