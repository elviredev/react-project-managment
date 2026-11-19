import { useState } from "react"

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("")

  // Récupérer la valeur saisie dans l'input
  function handleChange(e) {
    setEnteredTask(e.target.value)
  }

  // Transmettre la valeur saisie à "App" en passant par "Tasks" et "SelectedProject" et réinitialiser l'input
  function handleClick() {
    if (enteredTask.trim() === "") {
      return
    }
    onAdd(enteredTask)
    setEnteredTask("")
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-rose-100/70 text-black outline-none"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-rose-50 hover:text-rose-200 cursor-pointer"
        onClick={handleClick}
      >
        Ajouter une tâche
      </button>
    </div>
  )
}
