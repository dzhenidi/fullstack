import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { updateTodo } from '../../actions/todo_actions';
import { requestProject } from '../../actions/project_actions';

const mapStateToProps = ({projects}, ownProps) => {
  let id = parseInt(ownProps.params.id);
  return ({
    id: parseInt(ownProps.params.id),
    project: projects[id]
  });
};


const mapDispatchToProps = (dispatch) => ({
  toggleTodo: todo => {
    const toggledTodo = Object.assign({}, todo, {
      done: !todo.done
    });
    dispatch(updateTodo(toggledTodo));
  },
  requestProject: id => dispatch(requestProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
