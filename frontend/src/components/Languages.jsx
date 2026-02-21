import TagList from "./TagList"

const Languages = ({ items = [] }) => (
  <div className="languages">
    {items.map((lang) => (
      <div>
        <TagList items={[`${lang.name} - ${lang.level}`]} />
      </div>
    ))}
  </div>
)

export default Languages
