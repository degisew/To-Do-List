export default class Tasks {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
  static localStorageData = () => {
    let allTasks = [];
    const parsedData = JSON.parse(localStorage.getItem("alltasks"));
    if (parsedData !== null) {
      allTasks = parsedData;
    }
    return allTasks;
  };
  static add = (newTaskDescrptn) => {
    const allTasksArray = this.localStorageData();
    const taskIndex = allTasksArray.length + 1; // here we add 1 because we get the task index before we add
    const singleTask = new Tasks(newTaskDescrptn, taskIndex);
    allTasksArray.push(singleTask);
    localStorage.setItem("alltasks", JSON.stringify(allTasksArray));
    console.log(newTaskDescrptn);
    console.log(allTasksArray);
  };
  static remove = (targetIndex) => {
    let array = this.localStorageData();
    const remainingTask = array.filter((task) => task.index != targetIndex);
    // to change the index of an array based on the change.
    const arrangeIndexes = [];
    remainingTask.forEach((element, index) => {
      element.index = index++; // should start from 1.
      arrangeIndexes.push(element);
    });
    localStorage.setItem("alltasks", JSON.stringify(arrangeIndexes));
  };

  static update = (newValue, id) => {
    let container = this.localStorageData();
    container[id].description = newValue;
    localStorage.setItem("alltasks", JSON.stringify(container));
  };
}
