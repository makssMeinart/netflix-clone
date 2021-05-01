import { createContext, useContext, useState } from "react"
import {
  Container,
  Inner,
  Header,
  Frame,
  Item,
  Top,
  Title,
  Dropdown,
  Body,
  Button,
} from "./styles/accordion"

export default function Accordion({ children, ...restProps }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

const ToggleContext = createContext()

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  // useState will be responsible for dropdown and button icon change, But we need to open it and close it only
  // When we click on the Top part not the dropdown, So we gotta pass the useState to the Top
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Top = function AccordionTop({ children, ...restProps }) {
  // Thats where we get our useState through the context and might as well
  // destructure it
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Top
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
    </Top>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Dropdown = function AccordionDropdown({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext)
  // In here I could check state ? true then display dropdown : don't
  // But then you won't have that nice sliding down animation so I would rather
  // Add the class based on the state and do the animation in css

  const dropdown_unactive = {
    maxHeight: "0",
    overflowY: "hidden",
  }
  const dropdown_active = {
    maxHeight: "500px",
  }
  return (
    <Dropdown
      style={toggleShow ? dropdown_active : dropdown_unactive}
      {...restProps}
    >
      {children}
    </Dropdown>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

Accordion.Button = function AccordionButton({ children, ...restProps}) {
  const {toggleShow} = useContext(ToggleContext)

  const button_active = {
    transform: "rotate(45deg)"
  }

  return <Button style={toggleShow ? button_active : null} {...restProps} >{children}</Button>
}
