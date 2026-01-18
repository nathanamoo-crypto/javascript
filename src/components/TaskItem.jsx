export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className='flex justify-between items-center p-2 border rounded-lg'>
      <span
        onClick={() => onToggle(task.id)}
        className={task.completed ? 'cursor-pointer line-through text-gray-400' : 'cursor-pointer'}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className='text-red-500'
      >
        ✕
      </button>
    </li>
  );
}
