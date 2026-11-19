import NewTask from "./NewTask.jsx"

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-rose-100 mb-4">Tâches</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-rose-50 my-4">
          Ce projet n&#39;a pas encore de tâches.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-rose-100/80">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-black hover:text-red-700 cursor-pointer"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
