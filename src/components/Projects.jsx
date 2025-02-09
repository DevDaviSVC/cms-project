import useFetchProjects from "../hooks/useFetchProjects";

const Projects = () => {
  const {projects, loading} = useFetchProjects();

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {!loading ? projects?.map(({title, url, image, id}) => {
            return (
              <a
                key={id}
                className="project"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={image}
                  alt={title}
                  className="img"
                />
                <h5>{title}</h5>
              </a>
            );
        }) : <span className="loading"></span>}
      </div>
    </section>
  );
}
export default Projects;