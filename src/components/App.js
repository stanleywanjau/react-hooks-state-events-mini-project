import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState(CATEGORIES)
  const [task, setTask] = useState(TASKS)
  const [categoryBtn, setCategoryBtn]= useState("All")
  function addNewItem(newListItem){
    setTask(...task,newListItem)
   }

   function itemDelete(itemDelete){
    setTask(task.filter((item)=>item.text !== itemDelete))
   }

  const displayedItem = task
  .filter(
    (item)=>{
      if(categoryBtn === "All"){
        return true
      }else{
        return categoryBtn === item.category
      }
    }

  )
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  selectBtn={setCategoryBtn} onBtn={categoryBtn}  categories={categories} />
      <NewTaskForm onTaskFormSubmit={addNewItem} categories={categories}/>
      <TaskList tasks={displayedItem} itemDelete={itemDelete}/>
    </div>
  );
}

export default App;
