import Input from "./Input"

export default function NewProject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-rose-100 hover:text-rose-200 cursor-pointer">
            Annuler
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-rose-800 text-rose-50 hover:bg-rose-900 cursor-pointer">
            Enregistrer
          </button>
        </li>
      </menu>

      <div>
        <Input label="Titre" />
        <Input label="Description" textarea />
        <Input label="Date d'échéance" />
      </div>
    </div>
  )
}
