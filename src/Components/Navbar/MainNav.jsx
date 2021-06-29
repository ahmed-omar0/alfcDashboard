import 'bootstrap/dist/css/bootstrap.min.css';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const MainNav = (props) => {
    return (
        <ul className={`nav nav-pills flex-column fs-6 mt-4 align-self-center ${props.class}`} ref={props.navRef}>
            <li className="nav-item my-2">
                <a href="/">
                    <AiFillDashboard/>
                </a>
                <a href="/"> 
                    Dashboard
                </a>
            </li>
            <li className="nav-item my-2">
                <a href="/projects">
                    <AiFillProject/>
                </a>
                <a href="/projects"> 
                    Projects
                </a>
            </li>
            <li className="nav-item my-2">
                <a href="/our-customers">
                    <BsFillPeopleFill/>
                </a>
                <a href="/our-customers"> 
                    Our Cutomers
                </a>
            </li>
            <li className="nav-item my-2">
                <a href="/profile">
                    <CgProfile/>
                </a>
                <a href="/profile"> 
                    Profile
                </a>
            </li>
            <hr />
            <li className="nav-item my-2">
                <a href="/login">
                    <BiLogOut/>
                </a>
                <a href="/login">
                    Log-Out
                </a>
            </li>
        </ul>
    );
}
export default MainNav;