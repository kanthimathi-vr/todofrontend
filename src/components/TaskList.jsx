import { motion, AnimatePresence } from 'framer-motion';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <span
              className={`flex-grow ${task.completed ? 'line-through text-gray-400' : ''}`}
              onClick={() => onUpdate({ ...task, completed: !task.completed })}
            >
              {task.title}
            </span>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onUpdate({ ...task, completed: !task.completed })}
                className="text-sm p-1 rounded-md text-green-500 hover:text-green-600"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-sm p-1 rounded-md text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;