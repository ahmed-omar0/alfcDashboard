import './css/App.css';
import { useSelector } from 'react-redux';
// Router
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// Components
import SideNavbar from './Components/Navbar/SideNavbar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import OurCutomers from './Components/OurCutomers/OurCutomers';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer';

function App() {
  const navbarOpened  = useSelector(state => state.navbarIsOpened)
  return (
    <BrowserRouter>
        <div className="container-fluid d-flex flex-wrap p-0">
            {
                navbarOpened || window.innerWidth > 767.99?
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
                        <SideNavbar/>
                    </div>
                :
                    <div className="col-sm-1 col-2">
                        <SideNavbar/>
                    </div>

            }
            {
                navbarOpened || window.innerWidth > 767.99 ?
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-8 col-9">
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/our-customers" component={OurCutomers}/>
                            <Route path="/profile" component={Profile}/>
                        </Switch>
                        <Footer/>
                    </div>
                :
                    <div className="col-sm-11 col-10">
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/our-customers" component={OurCutomers}/>
                            <Route path="/profile" component={Profile}/>
                        </Switch>
                        <Footer/>
                    </div>
            }

        </div>
    </BrowserRouter>
  );
}

export default App;
