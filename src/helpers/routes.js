import { Route, Redirect } from "react-router-dom"
import { BROWSE, SIGN_IN } from "../constants/routes"

// check if the user is logged in when going on the singin & sign up page if he is not then allow them to go on it else redirect to browse page
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          )
        }
      }}
      return
      null
    />
  )
}

// If they not logged in and trying to access the browse page redirect them to the signin page
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: SIGN_IN,
                state: { from: location },
              }}
            />
          )
        }
        return null
      }}
    />
  )
}
