import { SelectProfileContainer } from "./profiles"
import { FirebaseContext } from "../context/firebase"
import { useContext, useEffect, useState } from "react"
import { Header, Loading } from "../components"
import * as ROUTES from "../constants/routes"

export function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState("")
  // Here we find thje
  const [profile, setProfile] = useState({})
  // This is to get rid of the loading after its finished
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" backgroundRemoveOnSmallVP>
        <Header.Inner>
          <Header.Group>
            <Header.Logo
              src={"/images/icons/logo.svg"}
              alt="Nerflix"
              to={ROUTES.HOME}
            />
            <Header.TextLink>Films</Header.TextLink>
            <Header.TextLink>Series</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              >
                Header Search
              </Header.Search>
            </Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Inner>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attemp to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>
            Play
          </Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
