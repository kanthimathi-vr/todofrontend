const Filters = ({ currentFilter, onFilterChange }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-colors";
  const activeClasses = "bg-blue-500 text-white";
  const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600";

  return (
    <div className="flex justify-center gap-4 mb-4">
      <button
        onClick={() => onFilterChange('all')}
        className={`${baseClasses} ${currentFilter === 'all' ? activeClasses : inactiveClasses}`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        className={`${baseClasses} ${currentFilter === 'active' ? activeClasses : inactiveClasses}`}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`${baseClasses} ${currentFilter === 'completed' ? activeClasses : inactiveClasses}`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;