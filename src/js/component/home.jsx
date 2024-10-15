import React, {useState} from "react";

//create your first component
const Home = () => {
	const [toDo, setToDo] = useState("");
    const [tasksArray, setTasksArray] = useState([]);
	const [emptyList, setEmptyList] = useState(true);

	const addTask = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            setTasksArray([...tasksArray, toDo]);
        	e.target.value = "";
			setEmptyList(false);
        }
    };

	const deleteTask = (index)=> {
		const newTasksArray = tasksArray.filter((task, i) => i !== index);
		setTasksArray(newTasksArray);
		if (newTasksArray.length === 0) {
			setEmptyList(true);
		}
	};

	return (
		<div className="text-center container mt-5">
			<h1>My To-do list ✅</h1>
			<br></br>
			<input className="form-control" placeholder="What needs to be done?"
			onChange={(e)=>{
				console.log(e.target.value);
				setToDo(e.target.value);
			}}
			onKeyDown={addTask}
			/>

			<br></br>

			<div className="card">
			{emptyList ? <h6 className="p-2">You have no pending tasks, add one! :)</h6> : 
					 tasksArray.map((task, index) => (
						<ul className="list-group list-group-flush">
						<div className="one-task d-flex" style={{justifyContent: "space-between"}}>
							<li key={index} className="list-group-item">{task}</li>
							<button type="button" className="btn-close p-3" style={{height: "8px"}} aria-label="Close" 
							onClick={()=> deleteTask(index)}>
							</button>
						</div>
						</ul>
                    ))}
			{!emptyList && (<p className="p-2" id="tasksLeft">Keep going! You have {tasksArray.length} {tasksArray.length === 1 ? "task" : "tasks"} left.</p>)}
			</div>
		</div>
	);
};

export default Home;
