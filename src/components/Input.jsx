export default function Input({ ref, label, textarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-rose-300 bg-rose-100/65 text-black focus:outline-none focus:border-rose-600"

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-rose-100">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  )
}
