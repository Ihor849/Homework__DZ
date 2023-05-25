// / Імпортуємо хук
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "components/Constants/Constant";




export const TaskList = () => {
  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(state => state.filters.status);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

 


  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList