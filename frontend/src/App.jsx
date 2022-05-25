import axios from 'axios';
import { useEffect, useState } from 'react';

import TaskAction from './components/TaskAction';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [id, setId] = useState(null);

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

  const setTodo = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('todos', {
          text: text,
        })
        .then(() => {
          setText('');
          getTodos();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = (id) => {
    const editText = todos.filter((todo) => todo._id === id);
    setText(editText[0].text);
    setId(editText[0]._id);
  };

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`todos/${id}/`, {
          text: text,
        })
        .then(() => {
          setText('');
          setId(null);
          getTodos();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`todos/${id}`).then((res) => {
      setTodos((todos) => todos.filter((todo) => todo._id !== res.data._id));
    });
  };

  const completeTodo = async (id) => {
    axios
      .get(`todos/complete/${id}`)
      .then(() => {
        setTodos((todos) =>
          todos.map((todo) => {
            if (todo._id === todos._id) {
              todo.complete = todos.complete;
            }
            return todo;
          })
        );
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='flex h-screen bg-pink-500'>
      <div className='container w-1/2 h-auto mx-auto mt-20 mb-20 text-center bg-gray-700 rounded'>
        <form onSubmit={id === null ? setTodo : updateTodo}>
          <input
            className='w-1/2 p-4 px-10 mt-10 bg-gray-800 bg-no-repeat border border-gray-900 rounded shadow-xl outline-none text-slate-100 bg-left-1 bg bg-task'
            type='text'
            name='text'
            id='text'
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className='container flex flex-col items-center w-1/2 mx-auto mt-10 overflow-y-scroll text-left bg-gray-700 rounded h-4/5'>
          {!isLoading &&
            todos.length > 0 &&
            todos.map((todo) => (
              <div
                key={todo._id}
                // eslint-disable-next-line prettier/prettier
                className={`${todo.complete ? 'bg-pink-500' : ''} flex justify-between w-full p-4 mt-2 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14`}
              >
                <h1>{todo.text}</h1>
                <TaskAction
                  key={todo._id}
                  complete={todo.complete}
                  completeTodo={() => completeTodo(todo._id)}
                  editTodo={() => editTodo(todo._id)}
                  deletetodo={() => deleteTodo(todo._id)}
                />
              </div>
            ))}
          {!isLoading && todos.length === 0 && <h1>not yet todos</h1>}
          {isLoading && <h1>loading</h1>}
        </div>
      </div>
    </div>
  );
}
export default App;
