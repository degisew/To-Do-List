export default class Tasks {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }

  static localStorageData = () => {
    let allTasks = [];
    const parsedData = JSON.parse(localStorage.getItem('alltasks'));
    if (parsedData !== null) {
      allTasks = parsedData;
    }
    return allTasks;
  };

  static add = (newTaskDescrptn) => {
    const allTasksArray = this.localStorageData();
    const taskIndex = allTasksArray.length + 1; // incrementing
    const singleTask = new Tasks(newTaskDescrptn, taskIndex);
    allTasksArray.push(singleTask);
    localStorage.setItem('alltasks', JSON.stringify(allTasksArray));
  };

  static remove = (targetIndex) => {
    const array = this.localStorageData();
    const remainingTask = array.filter((task) => task.index.toString() !== targetIndex);
    // to change the index of an array based on the change.
    const arrangeIndexes = [];
    remainingTask.forEach((element, index) => {
      element.index = index + 1; // should start from 1.
      arrangeIndexes.push(element);
    });
    localStorage.setItem('alltasks', JSON.stringify(arrangeIndexes));
  };

  static update = (newValue, id) => {
    const container = this.localStorageData();
    container[id].description = newValue;
    localStorage.setItem('alltasks', JSON.stringify(container));
  };
}
