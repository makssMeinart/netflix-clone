import {
  Container,
  Frame,
  Inner,
  Error,
  Title,
  InputFrame,
  Label,
  ShowButton,
  Input,
  Button,
  SignupButton,
  SignupContainer,
  Text,
  SmallText,
} from "./styles/form"

export default function Form({ children, ...restProps }) {
  return <Container>{children}</Container>
}

Form.Frame = function FormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Form.Inner = function FormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Form.InputFrame = function FormInputFrame({ children, ...restProps }) {
  return restProps.type === "email" ? (
    <InputFrame>
     {children}
    </InputFrame>
  ) : (
    <InputFrame>
      {children}
    </InputFrame>
  )
}

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

Form.ShowButton = function FormShowButton({ children, ...restProps }) {
  return <ShowButton {...restProps}>{children}</ShowButton>
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />
}

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Form.SignupButton = function FormSignupButton({ children, ...restProps }) {
  return <SignupButton {...restProps}>{children}</SignupButton>
}

Form.SignupContainer = function FormSignupContainer({children, ...restProps}) {
  return <SignupContainer {...restProps} >{children}</SignupContainer>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function FormSmallText({children, ...restProps}) {
  return <SmallText {...restProps} >{children}</SmallText>
}