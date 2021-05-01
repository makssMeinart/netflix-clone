import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { JumbotronContainer } from "./containers/jumbotron"
import { FooterContainer } from "./containers/footer"
import { AccordionContainer } from "./containers/accordion"
import * as ROUTES from "./constants/routes"

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <AccordionContainer />
        <FooterContainer />
      </Route>
    </Router>
  )
}
