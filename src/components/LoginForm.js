import React from "react";
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = event => {
    let username = event.target.value
    this.setState({
      username: username,
    })
  }

  handlePassword = event => {
    let password = event.target.value
    this.setState({
      password: password,
    })
  }

  handleSubmitLogin = event => {
    event.preventDefault()
    if (this.state.username === '' || this.state.password === '') {
      return "Must have username or password"
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitLogin}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default LoginForm;


// Open the components/LoginForm.js file.
// This component takes one prop, onSubmit, which is a function that gets called when the form is being submitted.
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary props to these inputs. Their values should be saved in the component's state.
// An example of an input would look like: js <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
// Remember that you can retrieve the input name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
