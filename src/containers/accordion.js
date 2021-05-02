import { Accordion } from "../components"
import { OptForm } from "../components"
import dataFaqs from "../fixtures/faqs.json"

export function AccordionContainer() {

  return (
    <Accordion>
      <Accordion.Header>Frequently Asked Questions</Accordion.Header>
      <Accordion.Frame>
        {/* Accordion Item */}
        {dataFaqs.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Top>
              <Accordion.Title>{item.header}</Accordion.Title>
              <Accordion.Button>+</Accordion.Button>
            </Accordion.Top>
            <Accordion.Dropdown>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Dropdown>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Title>
          Ready to watch? Enter your email to create or restart your membership.
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
    </Accordion>
  )
}
