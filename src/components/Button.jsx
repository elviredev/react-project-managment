export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-rose-700 text-rose-200 hover:bg-rose-600 hover:text-rose-100 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  )
}
