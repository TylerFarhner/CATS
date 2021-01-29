import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'

// Component Imports
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Page Imports
import DashboardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path ='/' render={props => <DashboardPage />} />
        <Route exact path ='/About' render={props => <AboutPage />} />
        <Route exact path ='/Gallery' render={props => <GalleryPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
