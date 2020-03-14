class Password extends React.Component {
    render () {
      return (
        <div>
          <label>{this.props.label}</label>
          <input
            type={ this.props.showPassword ? 'text' : 'password'}
            onChange={(event) => this.props.onChange(event.target.value)}
            style={{
              borderColor: this.props.valid ? 'gray' : 'red',
              margin: 10,
            }}
           />
        </div>
      ) 
    }
  }
  
  class SignupForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        password: '',
        passwordConfirmation: '',
        showPassword: false,
      }
    }
    
    isValid () {
      const { password, passwordConfirmation } = this.state
      
      if (password === '' && passwordConfirmation === '') return true
      if (password !== passwordConfirmation) return false
      if (password.length < this.props.minLength) return false
      if (passwordConfirmation.length <this.props.minLength) return false
      
      return true
    }
    
    render () {
      return <div>
        <h1>This is my form</h1>
        <Password valid={this.isValid()} showPassword={this.state.showPassword} label="Password" value={this.state.password} onChange={(value) => { this.setState({ password: value }) }} />
        <Password valid={this.isValid()} showPassword={this.state.showPassword} label="Password Confirmation" value={this.state.passwordConfirmation} onChange={(value) => { this.setState({ passwordConfirmation: value }) }}/>
        <button onClick={() => this.setState({ showPassword: !this.state.showPassword })}>{ this.state.showPassword ? 'hide me' : 'show me'}</button>
      </div>
    }
  }
  
  class App extends React.Component {
    render () {
      return (
        <div>
          <SignupForm minLength={8} />
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )