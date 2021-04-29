import jumboData from "../fixtures/jumbo.json"
import {Jumbotron} from "../components"

 export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item, index) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Holder>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Holder>
          <Jumbotron.Holder>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Holder>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

