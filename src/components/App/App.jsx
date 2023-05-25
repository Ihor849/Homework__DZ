import TaskCounter from 'components/TaskCounter/TaskCounter'
import StatusFilter from 'components/StatusFilter/StatusFilter'
import TaskForm from 'components/TaskForm/TaskForm'
import TaskList from 'components/TaskList/TaskList'


const App = () => {
  return(
    <div>
      <h1>HellouWord</h1>
      <TaskCounter></TaskCounter>
      <StatusFilter></StatusFilter>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
      
    </div>

  )
}

export default App;
