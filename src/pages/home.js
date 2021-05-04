import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { AccordionContainer } from "../containers/accordion"
import { HeaderContainer } from "../containers/header"
import { Feature, OptForm, Header } from "../components/"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Header.Content>
          <Header.Wrapper>
            <Feature>
              <Feature.Title>
                Unlimited movies, TV shows, and more.
              </Feature.Title>
              <Feature.Subtitle>
                Watch anywhere. Cancel anytime.
              </Feature.Subtitle>
            </Feature>
            <OptForm>
              <OptForm.Title>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Title>
              <OptForm.Wrapper>
                {/* Input Field */}
                <OptForm.InputWrapper>
                  <OptForm.InputInner>
                    <OptForm.Input></OptForm.Input>
                    <OptForm.Label>Email Address</OptForm.Label>
                  </OptForm.InputInner>
                  <OptForm.WarningInner>
                    <OptForm.Warning></OptForm.Warning>
                  </OptForm.WarningInner>
                </OptForm.InputWrapper>
                {/* Warning */}
                {/* Button */}
                <OptForm.Button>Get Started</OptForm.Button>
              </OptForm.Wrapper>
            </OptForm>
          </Header.Wrapper>
        </Header.Content>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
