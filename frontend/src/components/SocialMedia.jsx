const SocialMedia = ({ items = [] }) => {
  const list = [...items].reverse()
  return (
    <div className="social-media">
      {list.map((item) => (
        <p>
        <a
          key={item.id}
          href={item.url}
          style={{ textDecoration: 'underline' }}
        >
          <span>➜ </span>
          {item.platform}
        </a>
        </p>
      ))}
    </div>
  )
}

export default SocialMedia
