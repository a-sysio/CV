const ContactList = ({ items = [] }) => (
  <div className="contacts">
    {items.map((item) => (
      <p key={item.id || item.value || item.platform} className="contact">
        <span>➜ </span>
        {item.value || item.platform}
      </p>
    ))}
  </div>
)

export default ContactList
