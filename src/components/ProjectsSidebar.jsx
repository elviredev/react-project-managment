import Button from "./Button.jsx"

export default function ProjectsSidebar({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-rose-900 text-rose-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-rose-100">Mes Projets</h2>
      <div>
        <Button onClick={onAddProject}>+ Ajouter un projet</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-rose-50 hover:bg-rose-800 cursor-pointer"

          if (project.id === selectedProjectId) {
            cssClasses += " bg-rose-800 text-rose-50"
          } else {
            cssClasses += " text-rose-200"
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
