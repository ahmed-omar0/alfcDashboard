import 'bootstrap/dist/css/bootstrap.min.css';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const CloseNav = (props) => {
    return (
        <ul className={`nav flex-column close align-self-center ${props.class}`} ref={props.closeNavRef}>
            <li className="nav-item">
                <a href="/" className="nav-link">
                    <AiFillDashboard title="Dashboard"/>
                </a>
            </li>
            <li className="nav-item">
                <a href="/projects" className="nav-link">
                    <AiFillProject title="Projects"/>
                </a>
            </li>
            <li className="nav-item">
                <a href="/our-customers" className="nav-link">
                    <BsFillPeopleFill title="Our Cutomers"/>
                </a>
            </li>
            <li className="nav-item">
                <a href="/profile" className="nav-link">
                    <CgProfile title="Profile"/>
                </a>
            </li>
            <li className="nav-item">
                <a href="/login" className="nav-link">
                    <BiLogOut title="Log-Out"/>
                </a>
            </li>
        </ul>
    );
}
 
export default CloseNav;