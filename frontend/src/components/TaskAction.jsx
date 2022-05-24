import React, { useState } from 'react';
import {
  DotsHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/outline';

function TaskAction(props) {
  const { deletetodo, editTodo } = props;
  const [isOpen, toggleOpen] = useState(false);
  const toggle = () => {
    toggleOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>
        <DotsHorizontalIcon className='w-6 h-6 cursor-pointer' />
      </button>
      {isOpen ? (
        <ul className='absolute h-auto mt-5 -ml-12 text-gray-500 bg-gray-600 rounded-lg shadow-lg '>
          <li
            className='flex p-2 mt-2 mb-2 hover:text-gray-300'
            onClick={() => toggleOpen(false)}
          >
            <PencilIcon className='w-6 h-6 ' />
            <span className='ml-2 cursor-pointer text-md' onClick={editTodo}>
              Edit
            </span>
          </li>
          <li
            className='flex p-2 mt-2 mb-2 hover:text-gray-300'
            onClick={() => toggleOpen(false)}
          >
            <TrashIcon className='w-6 h-6 ' />
            <span className='ml-2 cursor-pointer text-md' onClick={deletetodo}>
              Delete
            </span>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default TaskAction;
