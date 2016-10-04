import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          email: "",
          team_id: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchTeamNames() {
    
  }

  componentDidMount(){
    fetchTeamNames();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }


  errors() {
    return (
      this.props.errors.map((error, i) => {
        return (<li className="error" key={`error-${i}`}>{error}</li>);
      })
    );
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  render() {
    let buttonHeader;
    let linkTo;
    let linkHeader;

    if (this.props.formType === "login") {
      buttonHeader = "Log in";
      linkTo = "/signup";
      linkHeader="Sign up";
    } else {
      buttonHeader = "Sign up";
      linkTo = "/login";
      linkHeader="Log in";
    }

    let options;

    return (
      <section className="session-container">
        <ul>
          {this.errors()}
        </ul>
        <Link to={linkTo}>{linkHeader}</Link>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            placeholder="username"
            onChange={this.update('username')}/>
          <input
            type="password"
            placeholder="password"
            onChange={this.update('password')}/>
          <select onChange={this.update('team_id')}>
            {options}
          </select>
          <input type="submit" value={buttonHeader}/>
        </form>
      </section>
    );
  }
}

export default SessionForm;