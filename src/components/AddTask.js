export const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmitForm = (e) => {

    e.preventDefault();

    if(task.id){

      const date = new Date();

      const editedTaskList = taskList.map((todo) => (
        todo.id === task.id ? { id : task.id, name : task.name, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
        ))
        setTaskList(editedTaskList);
        setTask({});
    }
    else{
      const date = new Date();
      const newTask = {
        id : date.getTime(),
        name : e.target.task.value,
        time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="enter task..." name="task" value={task.name || " "} onChange={(e) => setTask({...task, name : e.target.value})} maxLength="25" autoComplete="off" />
            <button type="submit">{task.id ? "Update" : "Add Task"}</button>
        </form>
    </section>
  )
}
