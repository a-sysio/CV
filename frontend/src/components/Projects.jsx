import TagList from './TagList'

const splitTags = (text = '') =>
  text
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

const Projects = ({ projects = [] }) => (
  <div className="projects-grid">
    {projects.map((project) => {
      const title = project.title || project.name
      const tags = splitTags(project.tags || '')
      return (
        <div key={project.id || title} className="project-card">
          <div className="project-info">
            <h3>{title}</h3>
            {project.description && <p>{project.description}</p>}
            
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noreferrer" className="project-link">
                {project.github_link}
              </a>
            )}
            <br />
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                {project.link}
              </a>
            )}
          </div>
          <div className="project-tags">
            <TagList items={tags} />
          </div>
        </div>
      )
    })}
  </div>
)

export default Projects
