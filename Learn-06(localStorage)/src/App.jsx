import { useState } from "react"
import LoginPage from "./Components/LoginPage"
import SignInPage from "./Components/SignInPage"
import AfterLogIn from "./Components/AfterLogIn"

const App = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  return (
    <div>
      {isLoggedIn ? (
        <AfterLogIn 
          email={userEmail}
          onLogout={() => setIsLoggedIn(false)}
        />
      ) : isLogin ? (
        <LoginPage 
          switchToSingIn={() => setIsLogin(false)}
          onLogin={(email) => {
            setUserEmail(email)
            setIsLoggedIn(true)
          }}
        />
      ) : (
        <SignInPage switchToLogIn={() => setIsLogin(true)} />
      )}
    </div>
  )
}

export default App
