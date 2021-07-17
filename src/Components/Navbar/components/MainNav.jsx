import 'bootstrap/dist/css/bootstrap.min.css';
// Router
import { Link } from 'react-router-dom';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
// Redux
import { toggleNavbar } from '../../../redux/action';
import { useSelector } from 'react-redux';

const MainNav = (props) => {
    const navbarIsOpened  = useSelector(state => state.navbarIsOpened)
    const toggle = () => {
        props.toggle()
        navbarIsOpened ?
            props.dispatch(toggleNavbar(false)) 
            :
            props.dispatch(toggleNavbar(true)) 
    } 
    return (
        <ul className={`nav nav-pills flex-column fs-6 mt-4 align-self-center ${props.class}`} ref={props.navRef}>
            <li className="nav-item my-2" onClick={toggle}>
                <Link to="/">
                    <AiFillDashboard/>
                </Link>
                <Link to="/"> 
                    Dashboard
                </Link>
            </li>
            <li className="nav-item my-2" onClick={toggle}>
                <Link to="/projects">
                    <AiFillProject/>
                </Link>
                <Link to="/projects"> 
                    Projects
                </Link>
            </li>
            <li className="nav-item my-2" onClick={toggle}>
                <Link to="/our-customers">
                    <BsFillPeopleFill/>
                </Link>
                <Link to="/our-customers"> 
                    Our Cutomers
                </Link>
            </li>
            <li className="nav-item my-2" onClick={toggle}>
                <Link to="/profile">
                    <CgProfile/>
                </Link>
                <Link to="/profile"> 
                    Profile
                </Link>
            </li>
            <hr />
            <li className="nav-item my-2" onClick={toggle}>
                <Link to="/login">
                    <BiLogOut/>
                </Link>
                <Link to="/login">
                    Log-Out
                </Link>
            </li>
        </ul>
    );
}
export default MainNav;