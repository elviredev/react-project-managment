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

  // On commence le processus d'ajout d'un projet
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // on ajoute un nouveau projet
      }
    })
  }

  // On termine le processus d'ajout
  // Cette fonction est invoquée dans le composant NewProject
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random()
      // stocker le nouveau projet avec ses elts title, description, dueDate et un id généré aléatoirement
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined, // revenir à l'écran d'accueil
        projects: [...prevState.projects, newProject], // on garde les anciens projets et on ajoute le nouveau projet
      }
    })
  }

  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  )
}

export default App
