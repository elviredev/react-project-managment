import Input from "./Input"
import { useRef } from "react"

export default function NewProject({ onAdd }) {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  function handleSave() {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDueDate = dueDateRef.current.value

    // validation ...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-rose-100 hover:text-rose-200 cursor-pointer">
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
  )
}
