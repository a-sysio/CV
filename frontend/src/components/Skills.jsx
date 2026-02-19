import TagList from './TagList'

const Skills = ({ skills = [], languages = [] }) => {
  const grouped = skills.reduce(
    (acc, skill) => {
      const category = skill.category || 'tech'
      acc[category] = acc[category] || []
      acc[category].push(skill.name)
      return acc
    },
    { tech: [], soft: [] },
  )

  const languageTags = languages.map((l) => `${l.name} ${l.level}`)

  return (
    <div className="two-column">
      <div>
        <h3 className="subheading">Technical</h3>
        <TagList items={grouped.tech} />
      </div>
      <div>
        <h3 className="subheading">Languages</h3>
        <TagList items={[...(grouped.soft || []), ...languageTags]} />
      </div>
    </div>
  )
}

export default Skills
