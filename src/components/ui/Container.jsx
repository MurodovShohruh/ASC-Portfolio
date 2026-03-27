export default function Container({ children, className = '', id }) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </section>
  )
}
