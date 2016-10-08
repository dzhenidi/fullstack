import React from 'react';
import ProjectItem from './project_item';
import ProjectForm from './project_form';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.requestProjects();
  }

  render() {

    let projects = this.props.projects;
    const toggleTodo = this.props.toggleTodo;
    const createProject = this.props.createProject;

    let projectItems;

    if (projects) {
      const projectIds = Object.keys(projects);
      projectItems = projectIds.map(id => {
        return (
          <ProjectItem
            key={id}
            project={projects[id]}
            toggleTodo={toggleTodo}/>
        );
      });
    } else {
      projectItems = "";
    }
    return (
      <div className="projects-index-body">
        <section className="projects-index-container">
          <h1>To-dos:</h1>
          <a href="" className="button">Make another list</a>
          <ProjectForm createProject={createProject}/>
          <ul className="projects-list">
            {projectItems}
          </ul>
        </section>
      </div>
    );
  }

}

export default ProjectsIndex;
