import TagList from './TagList'

const splitTags = (text = '') =>
  text
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

const Timeline = ({ items = [] }) => (
  <div className="timeline">
    {items.map((item) => (
      <div className="card" key={`${item.company || item.school}-${item.id || item.role}`}>
        <div className="card-header">
          <div>
            <p className="eyebrow">
              {item.start_year}
              {item.end_year ? `–${item.end_year}` : ''}
            </p>
            <h3>{item.company || item.school}</h3>
            <p className="subtitle">{item.role || item.program}</p>
          </div>
        </div>
        {item.description && <p className="body">{item.description}</p>}
        {item.tags && <TagList items={splitTags(item.tags)} />}
      </div>
    ))}
  </div>
)

export default Timeline
