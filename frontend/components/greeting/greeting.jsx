import React from 'react';
import { Link, hashHistory } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps){
    const currentUser = nextProps.currentUser;
    if (!currentUser) {
      hashHistory.push('/signup');
    }
  }

  render(){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div>

          <div className='top-nav wrapper'>
            <nav className='top-nav'>
              <div className='top-nav-ribbon group'>

                <ul className='top-nav-list group'>
                  <li>
                    <div className="small-logo">
                      <Link to='/projects' id="logo-link">
                        <img src={window.taskChampAssets.taskChampLogo}></img>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to='/projects'>Projects Page</Link>
                  </li>
                  <li>
                    <Link to='/schedule'>My Schedule</Link>
                  </li>
                </ul>
                <ul className='top-nav-list-right'>
                  <li>
                    <Link to='/profile'>
                      <img src={currentUser.avatarUrl} className="user-thumbnail"/>
                    </Link>
                  </li>
                  <li>
                    <button onClick={this.props.logout} className="logout button">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <nav className='team-nav'>
            <a href="">{currentUser.teamName}</a>
          </nav>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default Greeting;
