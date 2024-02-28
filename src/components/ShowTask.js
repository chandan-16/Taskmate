export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleEdit = (id) => {
        const selectedTaskList = taskList.find(todo => todo.id === id);
        setTask(selectedTaskList);
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedTaskList);
    }

  return (
    <section className="showTask">
        <div className="header">
            <div className="headerLeft">
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div> 
            <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
        </div> 
        <hr />
        <ul>    
            {
                taskList.map((todo) =>(
                <li key={todo.id}>
                    <div>
                        <span className="name">{todo.name}</span>
                        <p className="time">{todo.time}</p>
                    </div>
                    <p>
                        <span><i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i></span>
                        <span><i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i></span>
                    </p> 
                </li>
                ))
            }
        </ul>   
    </section>
  )
}
