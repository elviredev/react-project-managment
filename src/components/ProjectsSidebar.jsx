import Button from "./Button.jsx"

export default function ProjectsSidebar({ onAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-rose-900 text-rose-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-rose-100">
        Mes Projets
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Ajouter un projet</Button>
      </div>
      <ul></ul>
    </aside>
  )
}
