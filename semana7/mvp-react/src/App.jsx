import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./assets/style/main.scss";
import { Header } from "../src/components/header/header";
import { Main } from "../src/components/main/main";
import { Footer } from "../src/components/footer/footer";
import { PageNosotros } from "../src/pages/nosotros/nosotros";
import { PageContacto } from "../src/pages/contacto/contacto";
import { PageExperiencia } from "../src/pages/experiencia/experiencia";
import { PagePortafolio } from "../src/pages/portafolio/portafolio";
import { PageNotFound } from "../src/pages/notfound/not-found";


export const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main>
          <Switch>
            <Route path="/nosotros">
              <PageNosotros />
            </Route>
            <Route path="/portafolio">
              <PagePortafolio />
            </Route>
            <Route path="/experiencia">
              <PageExperiencia />
            </Route>
            <Route path="/contacto">
              <PageContacto />
            </Route>
            <Redirect exact from="/" to="/nosotros" />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
};
