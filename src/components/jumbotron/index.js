import React from "react"
import {
  Image,
  Subtitle,
  Title,
  Holder,
  Container,
  Inner,
  Item,
} from "./styles/jumbotron"

// Original Component
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

// Compound Component
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Holder = function JumbotronHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}
