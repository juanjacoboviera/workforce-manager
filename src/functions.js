  
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
    
 const getSessionStorageData = () =>{
        const sessionStorageData = sessionStorage.getItem("employeesList");
        return JSON.parse(sessionStorageData);
    }


    const findEmployee = (users, param) =>{
        const firstWord = param.split("-")[1]
        const user = users.filter(employee => {
          return employee.name.last == firstWord
        })
        return user
      }

      const handleUpdateTask = (updateTask, match, array) => {
        const newEmployeesList = array.map((employee) => {
          if (employee.email !== match[0].email) {
            return employee;
          }
          const newTasks = employee.tasks.map((task) => {
            if (task.id !== updateTask.id) {
              return task;
            }
      
            return {
              ...task,
              completed: updateTask.completed,
            };
          });
      
          return {
            ...employee,
            tasks: newTasks,
          };
        });
         return newEmployeesList;
      
      };


    export {assignTasks, getSessionStorageData, findEmployee, handleUpdateTask}

