const Password = ({ valid, showPassword, label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={ showPassword ? 'text' : 'password'}
        onChange={(event) => onChange(event.target.value)}
        style={{
          borderColor: valid ? 'gray' : 'red',
          margin: 10,
        }}
       />
    </div>
  ) 
}

const SignupForm = ({ minLength }) => {
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  
  const isValid = () => {
    if (password === '' && passwordConfirmation === '') return true
    if (password !== passwordConfirmation) return false
    if (password.length < minLength) return false
    if (passwordConfirmation.length < minLength) return false
    
    return true
  }
  
  return <div>
    <h1>This is my form</h1>
    <Password valid={isValid()} showPassword={showPassword} label="Password" value={password} onChange={setPassword} />
    <Password valid={isValid()} showPassword={showPassword} label="Password Confirmation" value={passwordConfirmation} onChange={setPasswordConfirmation}/>
    <button onClick={(() => setShowPassword(!showPassword))}>{ showPassword ? 'hide me' : 'show me'}</button>
  </div>
}

const App = () => {
  const [text, setText] = React.useState("Text")
  
  return (
    <div>
      <SignupForm minLength={8} />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)