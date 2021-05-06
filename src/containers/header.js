import * as ROUTES from "../constants/routes"
import { useLocation } from "react-router-dom"
import { Header } from "../components"

export function HeaderContainer({ children }) {
  let location = useLocation()

  return (
    <Header>
      <Header.Inner>
        <Header.Logo
          src={"/images/icons/logo.svg"}
          alt="Nerflix"
          to={ROUTES.HOME}
        />

        {location.pathname === ROUTES.HOME ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        ) : null}
      </Header.Inner>
      {children}
    </Header>
  )
}
