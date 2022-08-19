import Tasks from './CRUD.js';

export const checkSelected = (index) => {
  const data = Tasks.localStorageData();
  data[index].completed = !data[index].completed;
  localStorage.setItem('alltasks', JSON.stringify(data));
};

export const clearAll = () => {
  const dataFromLS = Tasks.localStorageData();
  if (dataFromLS.length === 0) {
    alert('Sorry! You have 0 tasks to remove.');
  } else {
    const filteredtask = dataFromLS.filter((eachObject) => !eachObject.completed);
    localStorage.setItem('alltasks', JSON.stringify(filteredtask));
    window.location.reload();
  }
};
