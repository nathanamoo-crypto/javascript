import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className='text-center text-gray-400 mt-4'>
        No tasks yet 🚀
      </p>
    );
  }

  return (
    <ul className='mt-4 space-y-2'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
