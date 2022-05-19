import TaskAction from './components/TaskAction';
function App() {
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
          <div className='flex justify-between w-full p-4 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14'>
            <h1>Eat</h1>
            <TaskAction />
          </div>
          <div className='flex justify-between w-full p-4 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14'>
            <h1>Sleep</h1>
            <TaskAction />
          </div>
          <div className='flex justify-between w-full p-4 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14'>
            <h1>Code</h1>
            <TaskAction />
          </div>
          <div className='flex justify-between w-full p-4 text-gray-400 border border-transparent rounded hover:border-gray-600 hover:border h-14'>
            <h1>Repeat</h1>
            <TaskAction />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
