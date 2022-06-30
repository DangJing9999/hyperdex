import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import loader from "../../assets/images/loader.png"
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'

const loading = (
  <div className="preloader">
    <img className="preloader__image" width="60" src={loader} alt="" />
  </div>
);

// Containers
const Home = React.lazy(() => import('../home/index'));
const Stats = React.lazy(() => import('../stats/index'));
const How = React.lazy(() => import('../how/index'));
const FAQ = React.lazy(() => import('../faq/index'));
const TermsOfServices = React.lazy(() => import('../terms_of_services/index'));
// const Team = React.lazy(() => import('../team'));
const HelpCenter = React.lazy(() => import('../help_center/index'));

const MainContent = (propsMain) => {
  return (
    <>
      {/*<Container fluid oncontextmenu={() => { return false; }}>*/}
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/home" name="Home" render={props => <Home {...props} />} />
            <Route path="/stats" name="Stats" render={props => <Stats {...props} />} />
            <Route path="/how" name="How it works" render={props => <How {...props} />} />
            <Route path="/faq" name="FAQ" render={props => <FAQ {...props} />} />
            <Route path='/terms' name="Terms of service" render={props => <TermsOfServices {...props} />} />
            {/*<Route path="/team" name="Meet the Team" render={props => <Team {...props} />} />*/}
            <Route path="/help-center" name="Help Center" render={props => <HelpCenter {...props} />} />
            <Redirect from="/" to='/home' />
          </Switch>
        </React.Suspense>
      {/*</Container>*/}
    </>
  )
}

export default React.memo(MainContent)
