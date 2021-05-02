import * as ROUTES from "../constants/routes"
import { Header } from "../components"

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Inner>
        <Header.Logo
          src={"/images/icons/logo.svg"}
          alt="Nerflix"
          to={ROUTES.HOME}
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}></Header.ButtonLink>
      </Header.Inner>
      <Header.Wrapper>{children}</Header.Wrapper>
    </Header>
  )
}
