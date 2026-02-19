const ContactList = ({ items = [], large = false }) => (
  <div className={`contacts${large ? ' large' : ''}`}>
    {items.map((item) => (
      <p key={item.id || item.url} href={item.url} className="contact" target="_blank" rel="noreferrer">
        <span>➜ </span>
        {item.label || item.platform}
      </p>
    ))}
  </div>
)

export default ContactList
