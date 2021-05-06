import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import * as ROUTES from "../constants/routes"
import { MiniFooterContainer } from "../containers/miniFooter"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"

export default function Signup() {
  // custom Hooks
  const history = useHistory()
  // useContext
  const { firebase } = useContext(FirebaseContext)

  // useState
  const [showPassword, setShowPassword] = useState(true)

  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Inline Styles
  const label_active = {
    top: "7px",
    fontSize: "0.6875rem",
  }
  const input_active = {
    borderBottom: "3px solid #e87c03",
  }

  const isInvalid = firstName === "" || password === "" || emailAddress === ""

  const handleSignUp = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(resp => {
        resp.user
          .updateProfile({
            displayName: firstName,
            photoURL: `/images/users/${Math.floor(Math.random() * 5) + 1}.png`
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
            console.log(resp)
          })
      })
      .catch(error => {
        setFirstName("")
        setEmailAddress("")
        setPassword("")
        setError(error.message)
      }) 
  }

  return (
    <>
      <HeaderContainer>
        <Form.Frame onSubmit={handleSignUp} method="POST">
          <Form.Inner>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

             {/* NAME INPUT FIELD */}
             <Form.InputFrame type="word">
              <Form.Input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                style={firstName.length > 0 ? input_active : null}
              />
              <Form.Label style={firstName.length > 0 ? label_active : null}>
                First Name
              </Form.Label>
            </Form.InputFrame>

            {/* EMAIL INPUT FIELD */}
            <Form.InputFrame type="email">
              <Form.Input
                onChange={(e) => setEmailAddress(e.target.value)}
                value={emailAddress}
                style={emailAddress.length > 0 ? input_active : null}
              />
              <Form.Label style={emailAddress.length > 0 ? label_active : null}>
                Email or phone number
              </Form.Label>
            </Form.InputFrame>

            {/* PASSWORD INPUT FIELD */}
            <Form.InputFrame type="password">
              <Form.Input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "password" : "word"}
                value={password}
                style={password.length > 0 ? input_active : null}
              />

              <Form.Label style={password.length > 0 ? label_active : null}>
                Password
              </Form.Label>
              <Form.ShowButton
                type="button"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                Show
              </Form.ShowButton>
            </Form.InputFrame>

            {/* SUBMIT BUTTON */}
            <Form.Button
              onClick={handleSignUp}
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Button>

            {/* SIGNUP BUTTON */}
            <Form.SignupContainer>
              <Form.Text>Already have an account?</Form.Text>
              <Form.SignupButton to={ROUTES.SIGN_IN}>
                Sign in now.
              </Form.SignupButton>
            </Form.SignupContainer>

            <Form.SmallText>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.SmallText>
          </Form.Inner>
        </Form.Frame>

        <div>
          <MiniFooterContainer />
        </div>
      </HeaderContainer>
    </>
  )
}
