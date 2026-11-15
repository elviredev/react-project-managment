export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-rose-900 text-rose-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-rose-100">
        Mes Projets
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-rose-700 text-rose-200 hover:bg-rose-600 hover:text-rose-100 cursor-pointer">
          + Ajouter un projet
        </button>
      </div>
      <ul></ul>
    </aside>
  )
}
