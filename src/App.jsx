import { useState } from "react"
import NewProject from "./components/NewProject"
import ProjectsSidebar from "./components/ProjectsSidebar"
import NoProjectSelected from "./components/NoProjectSelected.jsx"

function App() {
  // state permettant de gérer l'affichage d'un composant ou d'un autre
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // pas de projet au départ donc on ne fait rien
    projects: [],
  })

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // on ajoute un nouveau projet
      }
    })
  }

  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleAddProject} />
      {content}
    </main>
  )
}

export default App
