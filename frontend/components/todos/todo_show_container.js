import { connect } from 'react-redux';
import TodoShow from './todo_show';
import { updateTodo, requestTodo } from '../../actions/todo_actions';

const mapStateToProps = ({todo}, ownProps) => {
  return({
    id: parseInt(ownProps.params.id),
    todo
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (id, formData) => dispatch(updateTodo(id, formData)),
  requestTodo: (id) => dispatch(requestTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
