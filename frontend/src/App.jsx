import TaskAction from './components/TaskAction';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    setIsLoading(true);
    try {
      axios
        .get('todos')
        .then((res) => {
          if (res.data) {
            setTodos(res.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex h-screen bg-pink-500'>
      <div className='container w-1/2 h-auto mx-auto mt-20 mb-20 text-center bg-gray-700 rounded'>
        <input
          className='w-1/2 p-4 px-10 mt-10 bg-gray-800 bg-no-repeat border border-gray-900 rounded shadow-xl outline-none text-slate-100 bg-left-1 bg bg-task'
          type='text'
          name='text'
          placeholder='Add a task...'
        />
        <div className='container w-1/2 h-auto mx-auto mt-10 text-left bg-gray-700 rounded'>
          {!isLoading &&
            todos.length > 0 &&
            todos.map((todo) => (
              <div className='flex justify-between w-full p-4 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14'>
                <h1>{todo.text}`</h1>
                <TaskAction />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default App;
