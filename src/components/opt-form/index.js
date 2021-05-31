import { createContext, useContext, useState } from "react"

import {
  Inner,
  Title,
  Wrapper,
  InputInner,
  Input,
  Label,
  WarningInner,
  Warning,
  Button,
  InputWrapper,
} from "./styles/opt-form"

// This is to get the value of input lengh to the Label
const ToggleContext = createContext()

export default function OptForm({ children, ...restProps }) {
  return <Inner>{children}</Inner>
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

OptForm.Wrapper = function OptFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

OptForm.InputWrapper = function OptFormInputWrapper({
  children,
  ...restProps
}) {
  // Set the useState to count input.value.length
  const [valueCount, setValueCount] = useState(0)

  return (
    <ToggleContext.Provider value={{ valueCount, setValueCount }}>
      <InputWrapper {...restProps}> {children} </InputWrapper>
    </ToggleContext.Provider>
  )
}

OptForm.InputInner = function OptFormInputInner({children, ...restProps}) {
  return <InputInner {...restProps} >{children}</InputInner>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  const { setValueCount } = useContext(ToggleContext)

  // On change of an input putting the length in useState
  return (
    <Input onChange={(e) => setValueCount(e.target.value)} {...restProps} />
  )
}

OptForm.Label = function OptFormLabel({ children, ...restProps }) {
  // Getting the value.length
  const { valueCount } = useContext(ToggleContext)

  const label_active = {
    color: "gray",
    fontWeight: "bold",
    fontSize: "0.75rem",
    top: "25%",
  }

  // Gonna check if the value of the count is > 0 we wanna keep the label at the top
  // So when you click of it it dosen't drop back on your text
  return (
    <Label style={valueCount.length > 0 ? label_active : null} {...restProps}>
      {children}
    </Label>
  )
}

OptForm.WarningInner = function OptFormWarningInner({children, ...restProps}) {
  return <WarningInner {...restProps} >{children}</WarningInner>
}

OptForm.Warning = function OptFormWarning({ children, ...restProps }) {
  // Here we need to check if the email is typed in and if its correct form and shape
  const {valueCount} = useContext(ToggleContext)

  // This is just to check if the email is valid
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return <Warning {...restProps}>
    {/* Here we want to check if the email is entered at least 5 characters  */}
    {valueCount.length < 5 ? <p>Email is required!</p> : null}
    {/*  */}
    {valueCount.length >= 5 && !re.test(String(valueCount).toLowerCase()) ? <p>Please enter a valid email address</p> : null}
  </Warning>
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="images/icons/chevron-right.png" />
    </Button>
  )
}
