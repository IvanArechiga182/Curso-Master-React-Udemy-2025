import { useEffect, useState, useMemo } from "react";
import styles from "../../styles/Tasks.module.css";
const Tasks = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(30);
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError(true);
      setErrorMessage("El campo no puede estar vacio");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    setTasks([...tasks, task]);

    setTask("");
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTasks(updatedTasks);
  };

  const AddTaskSum = () => {
    setTaskCount(taskCount + 1);
  };

  const PastCounts = (accumulation: number) => {
    for (let i = 0; i <= accumulation; i++) {
      console.log("Ejecutando acumulaciones del pasauuuuu");
    }

    return `Contador manual de tareas: ${accumulation}`;
  };

  const memoCounts = useMemo(() => {
    return PastCounts(taskCount);
  }, [taskCount]);

  return (
    <div>
      <h1>Tareas</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
          placeholder="Inserta el titulo de la tarea"
        />
        <br />
        <input type="submit" value="Agregar" />
      </form>

      <h3>{memoCounts}</h3>
      <button onClick={AddTaskSum}>Sumar</button>

      <h1>Tareas agregadas</h1>
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      {tasks.length === 0 ? (
        <p>No hay tareas por mostrar</p>
      ) : (
        <ul>
          {tasks.map((t, index) => (
            <div className={styles.listTasks} key={index}>
              <li>{t}</li>
              <button
                onClick={() => {
                  handleDeleteTask(index);
                }}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
