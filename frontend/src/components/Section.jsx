const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="section-header">
      <h2>{title}</h2>
      <div className="dash" />
    </div>
    {children}
  </section>
)

export default Section
