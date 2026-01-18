import { useState } from 'react';

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mt-4'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='flex-1 border rounded-lg px-3 py-2'
        placeholder='Add a new task...'
      />
      <button className='bg-blue-600 text-white px-4 rounded-lg'>
        Add
      </button>
    </form>
  );
}
