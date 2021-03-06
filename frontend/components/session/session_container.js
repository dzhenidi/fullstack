import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_action.js';


const mapStateToProps = ({session}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
