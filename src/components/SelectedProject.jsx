import Tasks from "./Tasks.jsx"

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="w-140 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-rose-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-rose-100 mb-2">
            {project.title}
          </h1>
          <button
            className="text-rose-100 hover:text-rose-700 cursor-pointer"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-rose-300/70">{formattedDate}</p>
        <p className="text-rose-50 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  )
}
