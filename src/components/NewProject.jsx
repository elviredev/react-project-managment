import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal.jsx"

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef()

  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  function handleSave() {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDueDate = dueDateRef.current.value

    // validation : modale d'erreur si les champs sont vides
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Fermer">
        <h2 className="text-xl font-bold text-rose-600 my-4">
          Entrées invalides
        </h2>
        <p className="text-gray-700 mb-4">Veuillez remplir tous les champs.</p>
        <p className="text-gray-700 mb-4">
          Assurez-vous de saisir des valeurs valides dans les champs.
        </p>
      </Modal>
      <div className="w-140 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-rose-100 hover:text-rose-200 cursor-pointer"
              onClick={onCancel}
            >
              Annuler
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-md bg-rose-800 text-rose-50 hover:bg-rose-900 cursor-pointer"
              onClick={handleSave}
            >
              Enregistrer
            </button>
          </li>
        </menu>

        <div>
          <Input ref={titleRef} label="Titre" type="text" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Date d'échéance" type="date" />
        </div>
      </div>
    </>
  )
}
