import { useState } from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import {
  Background,
  Container,
  Group,
  Logo,
  Picture,
  Profile,
  Dropdown,
  ButtonLink,
  Content,
  Wrapper,
  Feature,
  Text,
  TextLink,
  FeatureCallOut,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header"

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`images/users/${src}.png`} />
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children }) {
  return <Group>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo src={restProps.src} {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  )
}

Header.Content = function HeaderContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children} </Wrapper>
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  children,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState()

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  )
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}
