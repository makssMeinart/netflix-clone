import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"
import { useState } from "react"
import * as ROUTES from "../constants/routes"
import { MiniFooterContainer } from "../containers/miniFooter"

export default function Signin() {
  // useStates
  const [showPassword, setShowPassword] = useState(true)
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Button Disability
  const isInvalid = password === "" || emailAddress === ""

  // Inline Styles
  const label_active = {
    top: "7px",
    fontSize: "0.6875rem",
  }
  const input_active = {
    borderBottom: "3px solid #e87c03",
  }

  const handleSignIn = e => {
    e.preventDefault()
  }

  return (
    <>
      <HeaderContainer>
        <Form.Frame>
          <Form.Inner>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            {/* EMAIL INPUT FIELD */}
            <Form.InputFrame>
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
            <Form.Button onClick={handleSignIn} disabled={isInvalid} type="submit">
              Sign In
            </Form.Button>

            {/* SIGNUP BUTTON */}
            <Form.SignupContainer>
              <Form.Text>New to Netflix?</Form.Text>
              <Form.SignupButton to={ROUTES.SIGN_UP}>
                Sign up now.
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
