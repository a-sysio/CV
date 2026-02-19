const TagList = ({ items = [] }) => (
  <div className="tag-list">
    {items.map((item) => (
      <span className="tag" key={item}>
        {item}
      </span>
    ))}
  </div>
)

export default TagList
