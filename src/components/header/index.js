import { Link as ReactRouterLink } from "react-router-dom"
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Content,
  Wrapper,
} from "./styles/header"

export default function Header({ bg = true, children, ...restProps}) {
  return bg ? <Background {...restProps} >{children}</Background> : children
}

Header.Inner = function HeaderInner({children, ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {

  return (
    <ReactRouterLink to={to}>
      <Logo src={restProps.src} {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({to, children,  ...restProps}) {
  return <ButtonLink to={to} {...restProps} >{children}</ButtonLink>
}

Header.Content = function HeaderContent({children, ...restProps}) {
  return <Content {...restProps} >{children}</Content>
}

Header.Wrapper = function HeaderWrapper({children, ...restProps}) {
  return <Wrapper {...restProps} >{children} </Wrapper>
}