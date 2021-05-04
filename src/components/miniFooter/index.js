import { Container, Inner, ItemWrapper, Title, Row, Link } from "./styles/miniFooter"

export default function MiniFooter({ children, ...restProps }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

MiniFooter.Title = function MiniFooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

MiniFooter.Row = function MiniFooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

MiniFooter.ItemWrapper = function MiniFooterItemWrapper({ children, ...restProps }) {
  return <ItemWrapper {...restProps}>{children}</ItemWrapper>
}

MiniFooter.Link = function MiniFooterLink({ children, ...restProps }) {
  return <Link href={restProps.location}>{children}</Link>
}
