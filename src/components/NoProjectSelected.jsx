import noProjectImage from "../assets/no-projects.png"
import Button from "./Button.jsx"

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="Une liste de tâches vide"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-rose-100 my-4">
        Pas de projet sélectionné
      </h2>
      <p className="text-rose-100 mb-4">
        Sélectionner un projet ou en commencer un nouveau
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Créer un nouveau projet</Button>
      </p>
    </div>
  )
}
