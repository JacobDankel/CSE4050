import React from "react";
import TaskList from "../views/task/TaskList";

import axios from "axios";
import { useEffect } from "react";

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/task-types").then(result => {
            setTypes(result.data)
        })
        axios.get("http://localhost:3000/api/tasks").then(result => {
            setTasks(result.data)
        })
    }, [setTasks, setTypes])

    return <TaskList tasks={tasks} types={types}/>
}

export default Task;