import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_container';

const App = ({ children }) => (
  <div>
    <h1>Task Champ</h1>
    <GreetingContainer />

    {children}
  </div>
);

export default App;
