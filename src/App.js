import './css/App.css';
import { useSelector } from 'react-redux';
// Components
import Footer from './Components/Footer';
import SideNavbar from './Components/Navbar/SideNavbar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const navbarOpened  = useSelector(state => state.navbarIsOpened)
  return (
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
                  <Dashboard/>
                  <Footer/>
              </div>
          :
              <div className="col-sm-11 col-10">
                  <Header/>
                  <Dashboard/>
                  <Footer/>
              </div>
      }
    </div>
  );
}

export default App;
