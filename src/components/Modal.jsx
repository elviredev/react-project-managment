import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button.jsx"

export default function Modal({ ref, children, buttonCaption }) {
  const dialog = useRef()

  // exposer une fonction pouvant être appelée à l'extérieur du composant Modal
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className="m-auto backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      {/* pour fermer la dialog qd on soumet le form */}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  )
}
