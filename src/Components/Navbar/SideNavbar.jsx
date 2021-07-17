import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
// Icons
import { BiWorld } from 'react-icons/bi';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Components
import TogglerIcon from './components/TogglerIcon';
import CloseNav from './components/CloseNav';
import MainNav from './components/MainNav';

const SideNavbar = () => {
    const dispatch = useDispatch()
    // Refs
    const navbarRef = useRef()
    const navRef = useRef()
    const closeNavRef = useRef()
    const logoRef= useRef()
    // Toggle Navbar
    const navbarToggle = () => {
        navbarRef.current.classList.toggle('close');
        navRef.current.classList.toggle('hidden');
        navRef.current.classList.toggle('d-none');
        closeNavRef.current.classList.toggle('hidden');
        logoRef.current.classList.toggle('hidden');
        console.log('do')
    }
    return (
        window.innerWidth > 767.99 ?
            <nav className="bg-light navbar-light d-flex flex-column align-items-center px-1 py-5" ref={navbarRef}>
                <TogglerIcon dispatch={dispatch} navbarToggle={navbarToggle}/>
                <div className='navbar-logo d-flex align-items-center justify-content-center' ref={logoRef}>
                    <BiWorld/>
                    <Link to="/" clLinkssName="mb-0 mx-1">
                        ALFAROUQ
                    </Link>
                </div>
                <MainNav navRef={navRef}/>
                <CloseNav closeNavRef={closeNavRef} class="hidden"/>
            </nav>
            :
            <nav className="bg-light navbar-light d-flex flex-column align-items-center px-1 py-5 close" ref={navbarRef}>
                <TogglerIcon dispatch={dispatch} navbarToggle={navbarToggle}/>
                <div className='navbar-logo d-flex align-items-center justify-content-center hidden' ref={logoRef}>
                    <BiWorld/>
                    <Link to="/" className="mb-0 mx-1">
                        ALFAROUQ
                    </Link>
                </div>
                <MainNav navRef={navRef} class="hidden d-none" toggle={navbarToggle} dispatch={dispatch}/>
                <CloseNav closeNavRef={closeNavRef} class=""/>
            </nav>
    );
}
 
export default SideNavbar;