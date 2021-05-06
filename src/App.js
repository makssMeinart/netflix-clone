import { BrowserRouter as Router, Route } from "react-router-dom"
import { Browse, Home, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
import { useContext } from "react"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"

export default function App() {
  const user = {}

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  )
}
