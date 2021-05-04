import { MiniFooter } from "../components"

export function MiniFooterContainer() {
  return (
    <>
      <MiniFooter>
        <MiniFooter.Title>
          <MiniFooter.Link location="#">Questions? Contact us.</MiniFooter.Link>
        </MiniFooter.Title>
        <MiniFooter.Row>
          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>FAQ</MiniFooter.Link>
          </MiniFooter.ItemWrapper>

          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>Privacy</MiniFooter.Link>
          </MiniFooter.ItemWrapper>

          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>Help Center</MiniFooter.Link>
          </MiniFooter.ItemWrapper>

          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>Cookie Preferences</MiniFooter.Link>
          </MiniFooter.ItemWrapper>

          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>Terms of Use</MiniFooter.Link>
          </MiniFooter.ItemWrapper>

          <MiniFooter.ItemWrapper>
            <MiniFooter.Link>Corporate Information</MiniFooter.Link>
          </MiniFooter.ItemWrapper>
        </MiniFooter.Row>
      </MiniFooter>
    </>
  )
}
