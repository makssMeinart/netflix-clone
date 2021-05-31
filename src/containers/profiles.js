import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import { Profile } from "../components"
import useAuthListener from "../hooks/use-auth-listener"

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
    <Header bg={null}>
      <Header.Inner>
        <Header.Logo
          src={"images/icons/logo.svg"}
          alt="Nerflix"
          to={ROUTES.BROWSE}
        />
      </Header.Inner>
    </Header>

    <Profile>
      <Profile.Title>Who's watching?</Profile.Title>
      <Profile.List>
        <Profile.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
          <Profile.Picture src={user.photoURL} alt="Profile Picture" />
          <Profile.Name>{user.displayName}</Profile.Name>
        </Profile.User>
      </Profile.List>
    </Profile>
    </>
  )
}
