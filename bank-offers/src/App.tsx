import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <svg className="App-logo" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <g fill="none">
              <path d="M0 0h24v24H0V0z"></path>
              <path d="M0 0h24v24H0V0z" opacity=".87"></path>
            </g>
            <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
        </div>
        <h2>
          Auth Form
        </h2>
        <form action="#" className="SignIn-form">
          <div className="SignIn-form__form-row">
            <label htmlFor="username">
              Username:
            </label>
          </div>
          <div className="SignIn-form__form-row">
            <input id="username" type="text" className="SignIn-form__form-input" name="username"/>
          </div>
          <div className="SignIn-form__form-row">
            <label htmlFor='password'>
              Password:
            </label>
          </div>
          <div className="SignIn-form__form-row">
            <input id="password" type="password" className="SignIn-form__form-input" name="password"/>
          </div>
          <div className="SignIn-form__form-row SignIn-form__submit-row">
            <button type="reset" className="App-authButton">Reset</button>
            <button type="submit" className="App-authButton">Sign in</button>
          </div>
        </form>

      </header>
    </div>
  );
}

export default App;
